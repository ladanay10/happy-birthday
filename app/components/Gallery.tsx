"use client";

export interface GalleryPhoto {
  src: string;
  caption: string;
  fallback: string;
  rotate: string;
}

const DEFAULT_PHOTOS: GalleryPhoto[] = [
  { src: "/gallery/1.jpg", caption: "Маленька мама ✿",  fallback: "linear-gradient(135deg,#FDDDE6,#FCBAD3)", rotate: "-3deg"   },
  { src: "/gallery/2.jpg", caption: "Сімейне щастя 🌸", fallback: "linear-gradient(135deg,#FDE4CE,#FBCDAD)", rotate:  "2deg"    },
  { src: "/gallery/3.jpg", caption: "Разом і назавжди",  fallback: "linear-gradient(135deg,#E8D5F5,#D4C5F9)", rotate: "-1.5deg"  },
  { src: "/gallery/4.jpg", caption: "Найкраща мама 💛", fallback: "linear-gradient(135deg,#D5EAD0,#C8D5C0)", rotate:  "3deg"    },
  { src: "/gallery/5.jpg", caption: "Тоді і зараз 🤍",  fallback: "linear-gradient(135deg,#FCE8ED,#F4BDC9)", rotate: "-2deg"    },
];

export default function Gallery({ photos = DEFAULT_PHOTOS }: { photos?: GalleryPhoto[] }) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 56,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to right, var(--cream), transparent)",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 56,
        zIndex: 10, pointerEvents: "none",
        background: "linear-gradient(to left, var(--cream), transparent)",
      }} />

      <div style={{
        display: "flex",
        gap: 24,
        padding: "20px 64px 32px",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none",
      } as React.CSSProperties}>
        {photos.map((photo, i) => (
          <div
            key={i}
            className="polaroid"
            style={{ transform: `rotate(${photo.rotate})` }}
          >
            <div style={{
              width: 200,
              height: 240,
              borderRadius: 2,
              backgroundImage: `url('${photo.src}'), ${photo.fallback}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />
            <p style={{
              fontFamily: "var(--font-script)",
              fontSize: "1rem",
              color: "var(--muted)",
              textAlign: "center",
              marginTop: 12,
              lineHeight: 1.4,
            }}>
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
