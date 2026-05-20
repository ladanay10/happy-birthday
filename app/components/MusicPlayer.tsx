"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ songTitle = "Улюблена пісня 🎵" }: { songTitle?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const t  = setTimeout(() => setShowLabel(true),  3000);
    const t2 = setTimeout(() => setShowLabel(false), 7000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setShowLabel(true));
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* Label */}
      <div style={{
        position: "fixed",
        bottom: 40,
        right: 96,
        zIndex: 50,
        pointerEvents: "none",
        transition: "opacity 0.4s",
        opacity: showLabel || playing ? 1 : 0,
      }}>
        <div style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 9999,
          padding: "6px 14px",
          fontFamily: "var(--font-dm)",
          fontSize: 12,
          color: "var(--muted)",
          whiteSpace: "nowrap",
          boxShadow: "0 2px 12px var(--shadow)",
        }}>
          {playing ? `♪ ${songTitle}` : "Натисни для атмосфери 🎶"}
        </div>
      </div>

      {/* Pulse rings */}
      {playing && (
        <div style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 40,
          width: 58,
          height: 58,
          borderRadius: "50%",
          pointerEvents: "none",
        }}>
          <div className="music-ring" />
          <div className="music-ring" style={{ animationDelay: "0.7s" }} />
        </div>
      )}

      {/* Button */}
      <button
        onClick={toggle}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => !playing && setShowLabel(false)}
        aria-label={playing ? "Пауза" : "Відтворити музику"}
        className="music-btn"
      >
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        )}
      </button>
    </>
  );
}
