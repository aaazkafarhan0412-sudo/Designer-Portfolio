import { useId } from "react";

const svgProps = {
  viewBox: "0 0 600 750",
  width: "100%",
  height: "100%",
  preserveAspectRatio: "xMidYMid slice",
  xmlns: "http://www.w3.org/2000/svg",
  className: "block h-full w-full",
} as const;

/* ------------------------------------------------------------------
   5. PURPLE REVERIE — PAPER-CUT ILLUSTRATION
   ------------------------------------------------------------------ */
export function PurpleReverieArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");
  const clip = `reverie-clip-${uid}`;
  const shadow = `reverie-shadow-${uid}`;

  const blob =
    "M107 548C59 469 75 331 191 229C307 127 466 137 524 239C582 341 521 419 504 489C487 559 513 628 431 684C349 740 212 714 153 649C114 607 138 597 107 548Z";

  return (
    <svg {...svgProps} role="img" aria-labelledby={`reverie-title-${uid}`}>
      <title id={`reverie-title-${uid}`}>
        Purple Reverie — layered lilac paper-cut landscape with a forest, garden and a deer
      </title>
      <defs>
        <linearGradient id={`reverie-bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f3f1" />
          <stop offset="100%" stopColor="#eceae8" />
        </linearGradient>
        <filter id={shadow} x="-30%" y="-30%" width="170%" height="180%">
          <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#4a1455" floodOpacity=".2" />
        </filter>
        <clipPath id={clip}>
          <path d={blob} />
        </clipPath>
        <g id={`reverie-deer-${uid}`} fill="#e9c8ed">
          <ellipse cx="37" cy="38" rx="27" ry="13" />
          <path d="M25 34 11 6h10l11 26z" />
          <ellipse cx="7" cy="3" rx="9" ry="5" transform="rotate(-18 7 3)" />
          <path d="M2 0-5-5-2 3zM13-2l8-5-4 7z" />
          <path
            d="M8-3C2-13 7-20 12-27M9-18 1-23M10-22l-2-9M14-3c2-13 11-19 14-28M22-23l8-2M22-17l6-6M31-30l7-6"
            fill="none"
            stroke="#e9c8ed"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M20 46 17 69M30 48l1 23M48 46l3 23M59 42l6 22"
            fill="none"
            stroke="#e9c8ed"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M64 32c7 0 10 4 10 10" fill="none" stroke="#e9c8ed" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g id={`reverie-tree-${uid}`} fill="#d9a8e1">
          <rect x="14" y="18" width="3.5" height="30" rx="1.5" />
          <circle cx="15" cy="15" r="13" />
          <circle cx="3" cy="23" r="9" />
          <circle cx="27" cy="23" r="9" />
          <circle cx="10" cy="8" r="8" />
        </g>
        <g id={`reverie-pine-${uid}`} fill="#d9a8e1">
          <path d="M0 32h3.5v12H0z" />
          <path d="M9-4 20 18h-7l11 20H-5l11-20H-1z" />
        </g>
      </defs>

      <rect width="600" height="750" fill={`url(#reverie-bg-${uid})`} />
      <circle cx="92" cy="112" r="3" fill="#d8c5dc" />
      <circle cx="512" cy="88" r="4" fill="#d8c5dc" />
      <circle cx="530" cy="642" r="3" fill="#d8c5dc" />

      {/* outer paper shape */}
      <path d={blob} fill="#e4bfe8" filter={`url(#${shadow})`} />
      <g clipPath={`url(#${clip})`}>
        {/* layered paper rims */}
        <g transform="translate(309 512) scale(.925) translate(-309 -512)">
          <path d={blob} fill="#d6a8de" filter={`url(#${shadow})`} />
        </g>
        <g transform="translate(309 520) scale(.845) translate(-309 -520)">
          <path d={blob} fill="#c58bd3" filter={`url(#${shadow})`} />
        </g>
        <g transform="translate(309 532) scale(.755) translate(-309 -532)">
          <path d={blob} fill="#ab67bf" filter={`url(#${shadow})`} />
        </g>
        <g transform="translate(309 548) scale(.655) translate(-309 -548)">
          <path d={blob} fill="#893d9d" filter={`url(#${shadow})`} />
        </g>
        <g transform="translate(309 565) scale(.535) translate(-309 -565)">
          <path d={blob} fill="#6a227c" filter={`url(#${shadow})`} />
        </g>
        <g transform="translate(309 590) scale(.4) translate(-309 -590)">
          <path d={blob} fill="#541660" filter={`url(#${shadow})`} />
        </g>

        {/* soft top rim highlight */}
        <path
          d="M137 499C96 400 139 284 243 220c98-61 221-55 268 37"
          fill="none"
          stroke="#f7e6f9"
          strokeWidth="2"
          opacity=".4"
        />

        {/* inner landscape silhouettes */}
        <g opacity=".92">
          <use href={`#reverie-tree-${uid}`} transform="translate(160 500) scale(1.55)" />
          <use href={`#reverie-tree-${uid}`} transform="translate(226 526) scale(.95)" opacity=".82" />
          <use href={`#reverie-pine-${uid}`} transform="translate(300 442) scale(1.4)" opacity=".9" />
          <use href={`#reverie-pine-${uid}`} transform="translate(344 468) scale(1.05)" opacity=".8" />
          <use href={`#reverie-pine-${uid}`} transform="translate(246 456) scale(.85)" opacity=".72" />
          <use href={`#reverie-tree-${uid}`} transform="translate(368 534) scale(.9)" opacity=".68" />
        </g>

        {/* pale path through the forest */}
        <path
          d="M124 591c91-34 131 19 197-2 61-20 70-43 155-20 44 12 59 22 68 31l-31 45c-74 43-187 34-253 4-67-30-91-22-136-58z"
          fill="#cf9bd8"
          opacity=".45"
        />

        {/* foreground foliage */}
        <g fill="#e4b9e8">
          <path d="M224 570c-8-35 8-55 31-70 3 18-4 29 9 41 2-18 14-28 26-35 3 24 0 38-16 50z" opacity=".85" />
          <path d="M304 588c-16-26-8-48 8-62 4 16 1 27 14 35 4-15 13-24 24-28 1 24-8 40-22 52z" opacity=".75" />
          <path d="M174 580c-10-22-3-40 10-51 4 13 2 23 12 30 3-11 10-19 19-22 0 20-8 34-19 43z" opacity=".7" />
        </g>
        <g fill="none" stroke="#e4b9e8" strokeWidth="3.2" strokeLinecap="round" opacity=".8">
          <path d="M390 594c-12-27-3-48 12-62M390 581c-16 2-27 9-33 20M393 566c14-4 24-13 28-25" />
          <path d="M214 619c-12-24-6-42 6-54M214 607c14-3 24-9 29-19" />
        </g>

        <g opacity=".96">
          <use href={`#reverie-deer-${uid}`} transform="translate(438 516) scale(1.3)" />
        </g>

        {/* depth shadows */}
        <ellipse cx="190" cy="662" rx="76" ry="14" fill="#480b52" opacity=".12" />
      </g>

      <text
        x="542"
        y="718"
        textAnchor="end"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="16"
        fill="#3f3440"
      >
        @madebyazka
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------
   6. ATELIER COLLECTION — FLATLAY / BRAND COLLAGE
   ------------------------------------------------------------------ */
export function CollectionArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");

  return (
    <svg {...svgProps} role="img" aria-labelledby={`collection-title-${uid}`}>
      <title id={`collection-title-${uid}`}>
        Atelier collection — a flatlay of brand identity cards, packaging, a lilac business card and
        a mobile app concept
      </title>
      <defs>
        <filter id={`col-shadow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#5b3f4b" floodOpacity=".22" />
        </filter>
        <filter id={`col-shadow-soft-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#5b3f4b" floodOpacity=".16" />
        </filter>
        <pattern id={`col-stars-${uid}`} width="42" height="42" patternUnits="userSpaceOnUse">
          <path
            d="M20 10l1.7 7.3L29 20l-7.3 1.7L20 29l-1.7-7.3L11 20l7.3-2.7z"
            fill="#f2ddf1"
            opacity=".85"
          />
          <circle cx="7" cy="33" r="1.1" fill="#f8e6d8" />
        </pattern>
        <clipPath id={`col-phone-${uid}`}>
          <rect x="362" y="386" width="166" height="302" rx="22" />
        </clipPath>
      </defs>

      <rect width="600" height="750" fill="#fbfaf7" />
      <path d="M36 66c38-44 90-52 104-22" fill="none" stroke="#c08c78" strokeWidth="1.4" />
      <path d="M526 644c31-35 33-88 3-113" fill="none" stroke="#8d7563" strokeWidth="1.4" />
      <path d="m86 132 4-13 5 13-13-4 13-5z" fill="#d7a391" opacity=".85" />
      <path d="m499 618 4-12 4 12-12-4 12-4z" fill="#b8957e" opacity=".8" />

      {/* purple star card, back */}
      <g transform="rotate(-18 158 506)" filter={`url(#col-shadow-${uid})`}>
        <rect x="58" y="372" width="198" height="268" rx="4" fill="#4d2249" />
        <rect x="58" y="372" width="198" height="268" rx="4" fill={`url(#col-stars-${uid})`} opacity=".9" />
        <text
          x="78"
          y="620"
          fontFamily="Fraunces, Georgia, serif"
          fontStyle="italic"
          fontSize="9"
          fill="#f3d9e9"
          opacity=".8"
        >
          @madebyazka
        </text>
      </g>

      {/* SOLID identity card */}
      <g transform="rotate(-12 176 242)" filter={`url(#col-shadow-${uid})`}>
        <rect x="68" y="88" width="218" height="308" fill="#ffffff" />
        <path d="M214 88h72v98h-72z" fill="#f1eded" />
        <path d="M214 186h72v46h-72z" fill="#0d1a3a" />
        <g transform="translate(102 128)">
          <path d="m28 0 25 43H3z" fill="#101015" />
          <rect x="17" y="21" width="28" height="31" fill="#f3f1eb" stroke="#101015" strokeWidth="1.4" />
          <path d="M3 43h50" stroke="#b99a6b" strokeWidth="7" />
          <circle cx="28" cy="35" r="7" fill="#101015" />
        </g>
        <text
          x="90"
          y="230"
          fontFamily="Manrope, sans-serif"
          fontWeight="700"
          fontSize="26"
          letterSpacing="2"
          fill="#111116"
        >
          SOLID
        </text>
        <text
          x="91"
          y="246"
          fontFamily="Manrope, sans-serif"
          fontSize="6.2"
          fontWeight="600"
          letterSpacing="2"
          fill="#4c4c52"
        >
          ENGINEERING CONSULTANCY
        </text>
        <path d="M91 263h111" stroke="#d8d3ca" strokeWidth="1" />
        <text
          x="91"
          y="283"
          fontFamily="Manrope, sans-serif"
          fontSize="5.5"
          letterSpacing="1.3"
          fill="#6e6a65"
        >
          COLOR PALETTE
        </text>
        {["#3a4145", "#f0efe9", "#9c7a3c"].map((color, i) => (
          <circle key={color} cx={97 + i * 21} cy="303" r="7.5" fill={color} stroke="#d9d5cc" strokeWidth=".6" />
        ))}
        <rect x="219" y="205" width="60" height="72" fill="#f4f1ea" />
        <path d="m234 222 34 22-12 20-34-22z" fill="#18213c" />
        <path d="m232 254 31-13" stroke="#b99a6b" strokeWidth="3" />
        <rect x="219" y="285" width="60" height="54" fill="#0f1a37" />
        <text x="229" y="313" fontFamily="Manrope, sans-serif" fontSize="7" fill="#f4ebd9" letterSpacing="1">
          BUILD
        </text>
        <path d="M228 320h41" stroke="#b99a6b" strokeWidth="1.6" />
        <rect x="219" y="348" width="60" height="42" fill="#f1eee7" />
        <path d="M228 363h42M228 371h32M228 379h37" stroke="#9f988c" strokeWidth="1.2" />
      </g>

      {/* DESI social card */}
      <g transform="rotate(8 424 245)" filter={`url(#col-shadow-${uid})`}>
        <rect x="318" y="92" width="210" height="300" fill="#f6efdf" />
        <text x="335" y="115" fontFamily="Manrope, sans-serif" fontSize="7" fill="#323037">
          1/7
        </text>
        <g fontFamily="Manrope, sans-serif" fontWeight="800" fill="#27272c" letterSpacing="-.7">
          <text x="335" y="154" fontSize="19">
            Can one word
          </text>
          <text x="335" y="176" fontSize="19">
            have <tspan fill="#e84179">5</tspan>
          </text>
          <text x="335" y="198" fontSize="19">
            personalities?
          </text>
        </g>
        <path d="M337 209c29 5 64 6 88 2" stroke="#e84179" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <g transform="rotate(-5 420 265)">
          <text
            x="424"
            y="280"
            textAnchor="middle"
            fontFamily="Manrope, sans-serif"
            fontWeight="800"
            fontSize="56"
            letterSpacing="1"
            fill="#b41b57"
            stroke="#e44983"
            strokeWidth="1"
          >
            DESI
          </text>
        </g>
        <g stroke="#e84179" strokeWidth="2" strokeLinecap="round">
          <path d="m352 227-7-3M357 220l-3-7M470 229l6-5M477 239l7-2" />
        </g>
        <text x="335" y="323" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#454247">
          Same word. Different vibes.
        </text>
        <text x="335" y="336" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#454247">
          A carousel about the many ways to be desi.
        </text>
        <path d="M335 371h82M404 367l13 4-13 4" stroke="#3b393d" strokeWidth="1" fill="none" />
        <text
          x="335"
          y="383"
          fontFamily="Fraunces, Georgia, serif"
          fontStyle="italic"
          fontSize="6"
          fill="#5a5357"
        >
          @madebyazka
        </text>
      </g>

      {/* Cholistan deck, centre */}
      <g transform="rotate(-2 312 440)" filter={`url(#col-shadow-${uid})`}>
        <rect
          x="218"
          y="306"
          width="198"
          height="274"
          rx="11"
          fill="#f3e0b4"
          stroke="#b65c3b"
          strokeWidth="2"
        />
        <rect x="227" y="315" width="180" height="256" rx="7" fill="#f8edcd" stroke="#b65c3b" strokeWidth=".8" />
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={`d-${i}`} cx={238 + i * 26} cy="324" r="2.6" fill="#b65c3b" />
        ))}
        <text
          x="317"
          y="344"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="4.5"
          letterSpacing="1"
          fill="#4c3021"
        >
          PAKISTAN ✦ PUNJAB ✦ BAHAWALPUR
        </text>
        <circle cx="317" cy="361" r="8.5" fill="#b65c3b" />
        <circle cx="317" cy="361" r="12" fill="none" stroke="#d7a768" strokeWidth="1" />
        <text
          x="317"
          y="391"
          textAnchor="middle"
          fontFamily="Pinyon Script, serif"
          fontSize="24"
          fill="#2b1811"
        >
          Cholistan
        </text>
        <text
          x="317"
          y="405"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="6"
          letterSpacing="2.4"
          fill="#3d2519"
        >
          THE DESERT DECK
        </text>
        <path d="M227 424c42-12 58-21 90-14 33 7 47 19 90 8v53H227z" fill="#e6c78a" />
        <path d="M227 466h180v22H227z" fill="#9d4a2a" />
        <g transform="translate(288 425)" fill="#3b2316">
          <path d="M0 25 7 8h39l8 17zM10 8V3h7v5zM34 8V3h7v5zM19 13h13v9H19z" />
        </g>
        <g fill="#332014" transform="translate(246 462) scale(.42)">
          <path d="M20 46c-9 0-14-7-14-15 0-5 3-8 8-8 4 0 6 3 7 7 2-9 8-14 14-14s10 5 11 14c2-8 6-12 11-12s9 4 9 10c0 8-5 12-12 13z" />
          <path d="M18 43c-7-8-5-18 2-23l3 6c-4 3-4 8 0 12l-2 7z" />
          <path d="M20 45v23M32 45v23M48 45v23M60 43v25" stroke="#332014" strokeWidth="4" strokeLinecap="round" />
        </g>
        <path d="M371 466c-1-13 2-20 6-20s7 7 6 20z" fill="#2f5451" />
        <path d="M377 452h10M377 458h8" stroke="#2f5451" strokeWidth="1.4" />
        <path d="M227 482h180v41H227z" fill="#372015" />
        <text
          x="317"
          y="499"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="4"
          letterSpacing="1.2"
          fill="#d5b789"
        >
          A VISUAL JOURNEY THROUGH
        </text>
        <text
          x="317"
          y="511"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="10"
          letterSpacing="1.6"
          fill="#e7ca9d"
        >
          CHOLISTAN
        </text>
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={`bd-${i}`} cx={238 + i * 26} cy="561" r="2.4" fill="#c46b45" />
        ))}
      </g>

      {/* phone UI mockup */}
      <g transform="rotate(12 450 535)" filter={`url(#col-shadow-${uid})`}>
        <rect x="356" y="380" width="178" height="314" rx="26" fill="#233a2c" />
        <rect x="362" y="386" width="166" height="302" rx="22" fill="#f7f4e9" />
        <g clipPath={`url(#col-phone-${uid})`}>
          <rect x="362" y="386" width="166" height="74" fill="#2c4836" />
          <rect x="412" y="392" width="66" height="9" rx="4.5" fill="#1a2b20" />
          <text x="373" y="420" fontFamily="Manrope, sans-serif" fontSize="5.5" fill="#f2eee0">
            9:41
          </text>
          <g fill="#f2eee0">
            <rect x="499" y="414" width="8" height="5" rx="1" />
            <rect x="510" y="412" width="8" height="7" rx="1" />
          </g>
          <path d="m375 448-5 4 5 4" stroke="#f4f0e2" strokeWidth="1.4" fill="none" />
          <text x="388" y="444" fontFamily="Manrope, sans-serif" fontSize="5" fill="#e4e3d7">
            Customer
          </text>
          <text x="388" y="453" fontFamily="Manrope, sans-serif" fontSize="6.5" fontWeight="700" fill="#ffffff">
            Khatta
          </text>
          <circle cx="509" cy="446" r="7.5" fill="#7e9b78" />
          <text x="509" y="449" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="5" fill="#fff">
            AK
          </text>
          <text x="512" y="461" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="4.6" fill="#d6d7c9">
            Ahmed Khan
          </text>

          <rect x="370" y="468" width="150" height="54" rx="7" fill="#ffffff" />
          <text x="378" y="479" fontFamily="Manrope, sans-serif" fontSize="4.6" fill="#929184">
            BALANCE
          </text>
          <text x="378" y="492" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700" fill="#253328">
            Rs. 4,500
          </text>
          <circle cx="507" cy="479" r="8" fill="#f3ead5" />
          <text x="507" y="481.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="4" fill="#7e672c">
            Due
          </text>
          <text x="378" y="505" fontFamily="Manrope, sans-serif" fontSize="4.4" fill="#8e8c80">
            Total credit
          </text>
          <text x="378" y="514" fontFamily="Manrope, sans-serif" fontSize="5.2" fontWeight="700" fill="#4a4740">
            Rs. 5,300
          </text>
          <text x="510" y="505" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="4.4" fill="#8e8c80">
            Total paid
          </text>
          <text x="510" y="514" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="5.2" fontWeight="700" fill="#4a4740">
            Rs. 800
          </text>

          <text x="370" y="537" fontFamily="Manrope, sans-serif" fontSize="5.2" fontWeight="700" fill="#545349">
            Transaction history
          </text>
          <text x="520" y="537" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="4.4" fill="#a09780">
            March 2026
          </text>
          {[
            ["Grocery", "Rs. 1,200", "#dc9a48", "↑"],
            ["Payment", "Rs. 500", "#789576", "↓"],
            ["Grocery", "Rs. 2,050", "#dc9a48", "↑"],
          ].map(([label, amount, color, arrow], i) => (
            <g key={label + i} transform={`translate(370 ${546 + i * 24})`}>
              <circle cx="9" cy="6" r="8" fill={`${color}22`} />
              <text x="9" y="8.5" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="6" fill={color}>
                {arrow}
              </text>
              <text x="22" y="4.5" fontFamily="Manrope, sans-serif" fontSize="4.8" fontWeight="600" fill="#4a4841">
                {label}
              </text>
              <text x="22" y="11.5" fontFamily="Manrope, sans-serif" fontSize="3.8" fill="#a09d93">
                15 Mar · Cash
              </text>
              <text x="148" y="7" textAnchor="end" fontFamily="Manrope, sans-serif" fontSize="4.8" fontWeight="600" fill="#423f38">
                {amount}
              </text>
              <path d="M0 19h150" stroke="#eae5d9" strokeWidth=".7" />
            </g>
          ))}

          <rect x="370" y="620" width="150" height="21" rx="5" fill="#bf5b2a" />
          <text x="445" y="634" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="5.4" fontWeight="700" fill="#fff">
            + Add Transaction
          </text>
          <rect x="370" y="646" width="150" height="20" rx="5" fill="#2c4836" />
          <text x="445" y="659" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="4.8" fill="#f3eee0">
            Send WhatsApp Reminder
          </text>
        </g>
      </g>

      {/* business card */}
      <g filter={`url(#col-shadow-soft-${uid})`} transform="rotate(2 290 624)">
        <rect x="174" y="560" width="230" height="126" rx="2" fill="#f6e3dc" />
        <g transform="translate(264 602)">
          <rect width="17" height="17" rx="5" fill="#462536" />
          <circle cx="8.5" cy="8.5" r="3.5" fill="#f6e3dc" />
          <circle cx="8.5" cy="8.5" r="1.4" fill="#bd8491" />
        </g>
        <text
          x="287"
          y="615"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="14"
          fill="#462536"
        >
          made.byazka<tspan fill="#b56f7e">.</tspan>
        </text>
        <text
          x="287"
          y="626"
          fontFamily="Manrope, sans-serif"
          fontSize="4"
          letterSpacing="1.2"
          fill="#8f6e78"
        >
          GRAPHIC DESIGN & VISUAL STORYTELLING
        </text>
        <path d="M174 686c43-17 153-8 230-5" stroke="#bb958c" strokeWidth="1" fill="none" />
      </g>

      <g transform="rotate(-9 96 598)">
        <text
          x="58"
          y="600"
          fontFamily="Fraunces, Georgia, serif"
          fontStyle="italic"
          fontSize="17"
          fill="#40323a"
        >
          <tspan x="58" dy="0">good designs</tspan>
          <tspan x="66" dy="20">makes a</tspan>
          <tspan x="76" dy="20">difference</tspan>
        </text>
        <path d="M160 636c12 14 12 34 1 47" stroke="#40323a" strokeWidth="1.2" fill="none" />
      </g>

      <text
        x="44"
        y="638"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="16"
        fill="#40323a"
        opacity="0"
      >
        @madebyazka
      </text>
    </svg>
  );
}
