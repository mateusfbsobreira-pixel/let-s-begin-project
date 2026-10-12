import { useEffect, useRef, useState } from "react";
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function VideoPlayer({ src, label, poster }: { src: string; label: string; poster?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const vid = useRef<HTMLVideoElement>(null);
  const hideT = useRef<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [show, setShow] = useState(true);
  const [started, setStarted] = useState(false);
  const [fs, setFs] = useState(false);
  useEffect(() => {
    const on = () => setFs(document.fullscreenElement === wrap.current);
    document.addEventListener("fullscreenchange", on);
    document.addEventListener("webkitfullscreenchange", on);
    return () => {
      document.removeEventListener("fullscreenchange", on);
      document.removeEventListener("webkitfullscreenchange", on);
    };
  }, []);

  const poke = () => {
    setShow(true);
    window.clearTimeout(hideT.current);
    hideT.current = window.setTimeout(() => {
      if (vid.current && !vid.current.paused) setShow(false);
    }, 2500);
  };
  useEffect(() => () => window.clearTimeout(hideT.current), []);

  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setStarted(true);
    } else v.pause();
    poke();
  };

  const fullscreen = () => {
    const v = vid.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    const w = wrap.current;
    if (document.fullscreenElement) return void document.exitFullscreen();
    if (w?.requestFullscreen) w.requestFullscreen().catch(() => v?.webkitEnterFullscreen?.());
    else v?.webkitEnterFullscreen?.();
  };

  const pct = dur ? (time / dur) * 100 : 0;

  return (
    <div
      ref={wrap}
      className={`group relative overflow-hidden bg-black ${fs ? "flex h-[100dvh] w-screen items-center justify-center" : "rounded-2xl border-2 border-gold/40 shadow-2xl"}`}
      onMouseMove={poke}
      onTouchStart={poke}
    >
      <video
        ref={vid}
        src={src.includes("#t=") ? src : `${src}#t=0.001`}
        poster={poster}
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        onClick={toggle}
        onPlay={() => { setPlaying(true); poke(); }}
        onPause={() => { setPlaying(false); setShow(true); }}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        className={`cursor-pointer bg-black object-contain ${fs ? "h-full max-h-[100dvh] w-full" : "aspect-[9/16] w-full"}`}
      />

      <span
        className={`pointer-events-none absolute left-3 right-3 top-3 mx-auto w-fit rounded-full border border-gold/50 bg-black/70 px-3 py-1.5 text-center text-xs font-bold text-[#FCD34D] backdrop-blur-sm transition-opacity duration-300 sm:text-sm ${started && !show ? "opacity-0" : "opacity-100"}`}
      >
        {label}
      </span>

      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Reproducir video"
          className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-cta text-paper shadow-[0_0_40px_rgba(22,163,74,0.6)] ring-4 ring-paper/30 transition-transform hover:scale-105 active:scale-95"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-cta/40" aria-hidden="true" />
          <Play className="relative ml-1.5 h-11 w-11 fill-current" />
        </button>
      )}
      {!started && (
        <p className="pointer-events-none absolute inset-x-0 top-[calc(50%+64px)] text-center text-base font-bold text-paper drop-shadow-lg">
          Toca para ver con sonido 🔊
        </p>
      )}

      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-10 transition-opacity duration-300 ${show || !playing ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <input
          type="range"
          min={0}
          max={dur || 0}
          step={0.1}
          value={time}
          aria-label="Progreso del video"
          onChange={(e) => {
            if (vid.current) vid.current.currentTime = Number(e.target.value);
            poke();
          }}
          className="h-2 w-full cursor-pointer appearance-none rounded-full accent-[#FCD34D]"
          style={{ background: `linear-gradient(to right, #FCD34D ${pct}%, rgba(255,255,255,0.3) ${pct}%)` }}
        />
        <div className="mt-2 flex items-center gap-2 text-paper">
          <button type="button" onClick={toggle} aria-label={playing ? "Pausar" : "Reproducir"} className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/15 backdrop-blur-sm hover:bg-paper/25">
            {playing ? <Pause className="h-5 w-5 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
          </button>
          <button
            type="button"
            onClick={() => { if (vid.current) { vid.current.muted = !muted; setMuted(!muted); } poke(); }}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/15 backdrop-blur-sm hover:bg-paper/25"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
          <span className="text-sm font-semibold tabular-nums">{fmt(time)} / {fmt(dur)}</span>
          <button type="button" onClick={fullscreen} aria-label="Pantalla completa" className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-paper/15 backdrop-blur-sm hover:bg-paper/25">
            <Maximize className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
