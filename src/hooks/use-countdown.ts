import { useEffect, useState } from "react";

const STORAGE_KEY = "lcdp-offer-deadline";
const DURATION_MS = 14 * 60 * 1000 + 59 * 1000;

function getDeadline() {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  const parsed = stored ? Number(stored) : NaN;
  if (Number.isFinite(parsed) && parsed > Date.now()) return parsed;
  const next = Date.now() + DURATION_MS;
  window.localStorage.setItem(STORAGE_KEY, String(next));
  return next;
}

export function useCountdown() {
  const [remaining, setRemaining] = useState(DURATION_MS);

  useEffect(() => {
    let deadline = getDeadline();

    const tick = () => {
      let left = deadline - Date.now();
      if (left <= 0) {
        deadline = Date.now() + DURATION_MS;
        window.localStorage.setItem(STORAGE_KEY, String(deadline));
        left = DURATION_MS;
      }
      setRemaining(left);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const totalSeconds = Math.max(0, Math.floor(remaining / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return { minutes, seconds, label: `${minutes}:${seconds}` };
}
