"use client";

import { useEffect, useState } from "react";

type T = { days: number; hours: number; minutes: number; seconds: number };

function calc(target: string): T | null {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const UNITS = [
  { key: "days",    label: "Днів"    },
  { key: "hours",   label: "Годин"   },
  { key: "minutes", label: "Хвилин"  },
  { key: "seconds", label: "Секунд"  },
] as const;

export default function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<T | null>(null);

  useEffect(() => {
    setTime(calc(target));
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) {
    return (
      <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.875rem", color: "var(--rose)", textAlign: "center" }}>
        Сьогодні! 🎉
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
      {UNITS.map(({ key, label }) => (
        <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{
            background: "rgba(255,252,250,0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(244,189,201,0.45)",
            borderRadius: 18,
            padding: "16px 20px",
            minWidth: 72,
            textAlign: "center",
            boxShadow: "0 4px 20px var(--shadow)",
          }}>
            <span style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 600,
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
              color: "var(--ink)",
              display: "block",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}>
              {pad(time[key])}
            </span>
          </div>
          <span style={{
            fontFamily: "var(--font-dm)",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
