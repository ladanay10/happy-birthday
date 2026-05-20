"use client";

import { useMemo } from "react";

const COLORS = [
  "rgba(244,189,201,0.75)",
  "rgba(255,255,255,0.85)",
  "rgba(237,213,248,0.7)",
  "rgba(232,136,152,0.55)",
  "rgba(255,220,230,0.7)",
];

function seeded(seed: number, max: number) {
  return ((Math.sin(seed * 9301 + 49297) * 233280) % 1) * max;
}

export default function Petals({ count = 22 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id:    i,
        left:  seeded(i * 1, 100),
        size:  Math.round(seeded(i * 2, 12) + 7),
        dur:   `${(seeded(i * 3, 7) + 6).toFixed(1)}s`,
        delay: `${(seeded(i * 4, 8)).toFixed(1)}s`,
        drift: `${(seeded(i * 5, 120) - 60).toFixed(0)}px`,
        spin:  `${(seeded(i * 6, 720) + 180).toFixed(0)}deg`,
        color: COLORS[Math.floor(seeded(i * 7, COLORS.length))],
      })),
    [count]
  );

  return (
    <>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          aria-hidden
          style={{
            left:    `${p.left}%`,
            width:   p.size,
            height:  p.size * 0.65,
            background: p.color,
            "--dur":   p.dur,
            "--delay": p.delay,
            "--drift": p.drift,
            "--spin":  p.spin,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
}
