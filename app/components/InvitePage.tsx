import Petals from "./Petals";
import ConfettiButton from "./ConfettiButton";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

// ═══════════════════════════════════════════
// ✏️  ЗАПОВНИ ТУТ — ВСЕ СВОЄ
// ═══════════════════════════════════════════
const NAME = "Ірина";
const AGE = "40";
const LOCATION = "Ресторан «Соната»";
const DRESS_CODE = "Тепла палітра";

const MOM_TEXT = `Для мене день народження — це не стільки про цифри, скільки про привід зібрати своїх людей разом.

Запрошую вас розділити цей день зі мною.

Ніякого складного дрес-коду чи формальностей — беріть із собою лише гарний настрій та готовність провести час у чудовій компанії.

До зустрічі на святі!`;
// ═══════════════════════════════════════════

const DRESS_SWATCHES = [
  { color: "#F4BDC9", name: "Рожевий" },
  { color: "#FAF3ED", name: "Молочний" },
  { color: "#C9A882", name: "Бежевий" },
  { color: "#6B3F2A", name: "Шоколадний" },
];

// ── SVG Icons ─────────────────────────────────────────────
const IconCalendar = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconClock = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconPin = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconShirt = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20.38 18H3.62a1 1 0 01-.76-1.65L12 7" />
    <path d="M12 7V4" />
    <circle cx="12" cy="3" r="1" />
  </svg>
);

function SectionTag({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-dm)",
        fontSize: 10,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "var(--blush-rose)",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: "var(--blush)",
        }}
      />
      {text}
      <span
        style={{
          display: "inline-block",
          width: 24,
          height: 1,
          background: "var(--blush)",
        }}
      />
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        justifyContent: "center",
        margin: "0 auto",
        maxWidth: 320,
      }}
    >
      <div style={{ height: 1, flex: 1, background: "var(--blush)" }} />
      <span
        style={{ color: "var(--blush-rose)", fontSize: "1.125rem" }}
        aria-hidden
      >
        ✿
      </span>
      <div style={{ height: 1, flex: 1, background: "var(--blush)" }} />
    </div>
  );
}

function WaveDown({ fill, from }: { fill: string; from: string }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", display: "block" }}
        preserveAspectRatio="none"
        height="72"
      >
        <path d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z" fill={fill} />
      </svg>
    </div>
  );
}
function WaveUp({ fill, from }: { fill: string; from: string }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", display: "block" }}
        preserveAspectRatio="none"
        height="72"
      >
        <path d="M0,36 C480,0 960,72 1440,36 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
interface Props {
  dateDisplay: string;
  timeDisplay: string;
  target: string;
  momText?: string;
}

export default function InvitePage({
  dateDisplay,
  timeDisplay,
  target,
  momText = MOM_TEXT,
}: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Petals />
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ══ HERO ═══════════════════════════════════════════ */}
        <section
          id="hero"
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 24px",
            textAlign: "center",
            background:
              "radial-gradient(ellipse at 50% -10%, #FDE8EF 0%, var(--cream) 65%)",
          }}
        >
          <div
            className="anim-fade-in hero-photo"
            style={{
              width: "clamp(220px,42vw,340px)",
              height: "clamp(220px,42vw,340px)",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('/photo.jpg'), linear-gradient(160deg,#F9D5DE 0%,#EDD5F8 50%,#C8D5C0 100%)",
                backgroundSize: "90%",
                backgroundPosition: "50% 12%",
              }}
            />
          </div>

          <p
            className="anim-fade-up d1"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--blush-rose)",
              marginBottom: 12,
            }}
          >
            ✦ Запрошення ✦
          </p>

          <h1
            className="anim-fade-up d2"
            style={{
              fontFamily: "var(--font-script)",
              lineHeight: 1.1,
              color: "var(--ink)",
              marginBottom: 4,
              fontSize: "clamp(3rem,8vw,6rem)",
            }}
          >
            {NAME}
          </h1>

          <p
            className="anim-fade-up d2"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              color: "var(--muted)",
              marginBottom: 24,
              fontSize: "clamp(1rem,2vw,1.25rem)",
            }}
          >
            святкує {AGE}-річчя
          </p>

          <div
            className="anim-fade-up d4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 36,
            }}
          >
            {[
              { icon: <IconCalendar />, text: dateDisplay },
              { icon: <IconClock />, text: timeDisplay },
            ].map(({ icon, text }) => (
              <span
                key={text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,252,250,0.82)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid var(--border)",
                  borderRadius: 9999,
                  padding: "10px 20px",
                  fontFamily: "var(--font-dm)",
                  fontSize: "0.875rem",
                  color: "var(--ink)",
                  boxShadow: "0 2px 12px var(--shadow)",
                }}
              >
                <span style={{ color: "var(--rose)" }}>{icon}</span>
                {text}
              </span>
            ))}
          </div>

          <div className="anim-fade-up d5">
            <ConfettiButton />
          </div>

          <div
            className="anim-float"
            style={{
              marginTop: 48,
              color: "var(--faint)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* ══ ABOUT ══════════════════════════════════════════ */}
        <WaveDown fill="var(--blush-pale)" from="var(--cream)" />
        <section
          id="invitation"
          style={{ background: "var(--blush-pale)", padding: "72px 24px" }}
        >
          <div style={{ maxWidth: 672, margin: "0 auto", textAlign: "center" }}>
            <Reveal>
              <SectionTag text="Про іменинницю" />
            </Reveal>
            <Reveal delay={1}>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  color: "var(--muted)",
                  whiteSpace: "pre-line",
                  lineHeight: 1.9,
                  marginTop: 28,
                  fontSize: "clamp(0.95rem,1.8vw,1.1rem)",
                }}
              >
                {momText}
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p
                style={{
                  fontSize: "1.875rem",
                  marginTop: 32,
                  letterSpacing: "0.3em",
                }}
                aria-hidden
              >
                🌸 🌷 🌸
              </p>
            </Reveal>
          </div>
        </section>

        {/* ══ COUNTDOWN ══════════════════════════════════════ */}
        <WaveDown fill="#F5EEF8" from="var(--cream)" />
        <section
          style={{
            padding: "80px 24px",
            textAlign: "center",
            background: "linear-gradient(160deg,#F9EEF6 0%,#EDD5F8 100%)",
          }}
        >
          <div style={{ maxWidth: 672, margin: "0 auto" }}>
            <Reveal>
              <SectionTag text="Відлік часу" />
            </Reveal>
            <Reveal delay={1}>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  color: "var(--ink)",
                  marginTop: 14,
                  marginBottom: 40,
                  fontSize: "clamp(1.8rem,4vw,2.8rem)",
                }}
              >
                До особливого дня…
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <Countdown target={target} />
            </Reveal>
          </div>
        </section>

        {/* ══ DETAILS ════════════════════════════════════════ */}
        <WaveUp fill="var(--cream)" from="#EDD5F8" />
        <section style={{ background: "var(--cream)", padding: "72px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Reveal>
                <SectionTag text="Деталі свята" />
              </Reveal>
              <Reveal delay={1}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    color: "var(--ink)",
                    marginTop: 14,
                    fontSize: "clamp(2rem,4vw,3rem)",
                  }}
                >
                  Де та коли?
                </h2>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="details-cards">
                {[
                  {
                    Icon: IconCalendar,
                    label: "Дата",
                    value: dateDisplay,
                    grad: "linear-gradient(135deg,#F4BDC9,#EDD5F8)",
                  },
                  {
                    Icon: IconClock,
                    label: "Час",
                    value: timeDisplay,
                    grad: "linear-gradient(135deg,#EDD5F8,#C8D5C0)",
                  },
                  {
                    Icon: IconPin,
                    label: "Місце",
                    value: LOCATION,
                    grad: "linear-gradient(135deg,#C8D5C0,#F4BDC9)",
                  },
                  {
                    Icon: IconShirt,
                    label: "Дрес-код",
                    value: DRESS_CODE,
                    grad: "linear-gradient(135deg,#F4BDC9,#D4A853)",
                  },
                ].map(({ Icon, label, value, grad }) => (
                  <div
                    key={label}
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 24,
                      padding: 28,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      textAlign: "center",
                      boxShadow: "0 4px 24px var(--shadow)",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: grad,
                      }}
                    >
                      <span style={{ color: "white" }}>
                        <Icon />
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-dm)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontWeight: 600,
                        color: "var(--ink)",
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 24,
                  padding: "28px 32px",
                  textAlign: "center",
                  boxShadow: "0 4px 24px var(--shadow)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 16,
                  }}
                >
                  Палітра кольорів
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    justifyContent: "center",
                    flexWrap: "wrap",
                    marginBottom: 12,
                  }}
                >
                  {DRESS_SWATCHES.map(({ color, name }) => (
                    <div
                      key={color}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          border: "3px solid var(--card)",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                          background: color,
                        }}
                        title={name}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: 10,
                          color: "var(--faint)",
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    color: "var(--muted)",
                    fontSize: "1rem",
                  }}
                >
                  {DRESS_CODE}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ FOOTER ═════════════════════════════════════════ */}
        <WaveDown fill="#FEF0F5" from="var(--cream)" />
        <footer
          style={{
            padding: "72px 24px 48px",
            textAlign: "center",
            background: "linear-gradient(to bottom, #FEF0F5, #FAE5ED)",
          }}
        >
          <div style={{ maxWidth: 512, margin: "0 auto" }}>
            <Reveal>
              <p
                style={{
                  fontSize: "1.875rem",
                  letterSpacing: "0.3em",
                  marginBottom: 20,
                }}
                aria-hidden
              >
                🌸 💕 🌸
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  color: "var(--ink)",
                  lineHeight: 1.6,
                  marginBottom: 24,
                  fontSize: "clamp(1.4rem,3vw,2rem)",
                }}
              >
                Буду рада бачити вас поруч у цей особливий день
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Divider />
            </Reveal>
          </div>
        </footer>
      </div>
    </div>
  );
}
