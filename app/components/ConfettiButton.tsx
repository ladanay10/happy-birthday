"use client";

import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const handleClick = () => {
    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.55 },
      colors: ["#F4BDC9", "#EDD5F8", "#C8D5C0", "#FFFCFA", "#E88898", "#D4A853"],
      scalar: 1.1,
    });
    setTimeout(() => {
      document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <button className="cta-btn" onClick={handleClick} aria-label="Відкрити запрошення">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="rgba(255,255,255,0.3)" />
      </svg>
      Відкрити запрошення
    </button>
  );
}
