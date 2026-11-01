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
   1. CHOLISTAN — THE DESERT DECK
   ------------------------------------------------------------------ */
export function CholistanArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");
  const clip = `cholistan-clip-${uid}`;

  return (
    <svg {...svgProps} role="img" aria-labelledby={`cholistan-title-${uid}`}>
      <title id={`cholistan-title-${uid}`}>
        Cholistan, The Desert Deck — a warm illustrated card design featuring camels, a fort and
        desert motifs
      </title>
      <defs>
        <clipPath id={clip}>
          <rect x="68" y="54" width="464" height="642" rx="30" />
        </clipPath>
        <g id={`camel-${uid}`} fill="#332014">
          {/* body and hump */}
          <path d="M13 38c0-12 10-19 23-16 8 2 13 8 18 8l5-16c1-3 6-3 8 1l8 18c9 2 15 8 15 16 0 6-4 11-10 13l2 6H17c-7 0-11-6-11-12z" />
          {/* head */}
          <path d="M53 12h11c3 0 5 2 5 5s-2 5-5 5H57l-4-6z" />
          <path d="M58 10l-1-5 4 3M67 10l3-4v5" />
          {/* tail */}
          <path d="M12 34c-6-4-8-11-5-18l4 4c-2 4 1 8 5 10z" />
          {/* legs */}
          <path
            d="M21 57v16M36 55v18M69 55v18M83 57v16"
            stroke="#332014"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="69" cy="19" r="1.4" fill="#f3e1b6" />
        </g>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8edcd" />
          <stop offset="100%" stopColor="#f1dba9" />
        </linearGradient>
      </defs>

      <rect width="600" height="750" fill="#f4f0e3" />
      <g transform="rotate(-1 300 375)">
        <rect
          x="53"
          y="40"
          width="494"
          height="670"
          rx="42"
          fill="#f3e1b6"
          stroke="#b65c3b"
          strokeWidth="5"
        />
        <rect
          x="68"
          y="54"
          width="464"
          height="642"
          rx="30"
          fill={`url(#sky-${uid})`}
          stroke="#b65c3b"
          strokeWidth="1.5"
        />
        <g clipPath={`url(#${clip})`}>
          <rect x="68" y="54" width="464" height="642" fill={`url(#sky-${uid})`} />

          {/* top dot rule */}
          {Array.from({ length: 11 }).map((_, i) => (
            <circle key={i} cx={92 + i * 41} cy="82" r="6.5" fill="#b65c3b" />
          ))}

          {/* place names */}
          <g
            fill="#3a2417"
            fontFamily="Manrope, sans-serif"
            fontSize="9.5"
            fontWeight="600"
            letterSpacing="2.6"
            textAnchor="middle"
          >
            <text x="170" y="119">
              PAKISTAN
            </text>
            <text x="300" y="119">
              PUNJAB
            </text>
            <text x="430" y="119">
              BAHAWALPUR
            </text>
          </g>
          <g fill="#b65c3b">
            <path d="m236 113 4 6-4 6-4-6z" />
            <path d="m366 113 4 6-4 6-4-6z" />
          </g>

          {/* sun motif */}
          <circle cx="300" cy="158" r="32" fill="#b65c3b" />
          <circle cx="300" cy="158" r="44" fill="none" stroke="#d7a768" strokeWidth="2" />
          <circle cx="300" cy="158" r="53" fill="none" stroke="#e9cb93" strokeWidth="1" />

          {/* title lockup */}
          <text
            x="300"
            y="244"
            textAnchor="middle"
            fontFamily="Pinyon Script, serif"
            fontSize="62"
            fill="#2b1811"
          >
            Cholistan
          </text>
          <path d="m126 232 5 8-5 8-5-8z" fill="#b65c3b" />
          <circle cx="469" cy="232" r="5" fill="#b65c3b" />
          <text
            x="300"
            y="282"
            textAnchor="middle"
            fontFamily="Fraunces, Georgia, serif"
            fontSize="19"
            letterSpacing="6.5"
            fill="#382418"
          >
            THE DESERT DECK
          </text>
          <g
            fill="#5b3c26"
            fontFamily="Manrope, sans-serif"
            fontSize="9"
            letterSpacing="2.4"
            textAnchor="middle"
          >
            <text x="300" y="308">
              12 CARDS ✦ ONE DESERT STORY
            </text>
          </g>

          {/* desert scene */}
          <path
            d="M68 432c54-20 74-48 128-52 47-4 70 22 114 10 42-11 62-35 105-38 42-4 73 22 117 15v122H68z"
            fill="#ecd39d"
          />
          <path
            d="M68 452c58-24 91-50 147-49 52 1 82 26 135 16 47-9 71-25 116-22 33 2 50 15 66 22v82H68z"
            fill="#e6c78a"
          />
          <path d="M68 474h464v78H68z" fill="#9d4a2a" />
          <path d="M68 478h464v22H68z" fill="#b65c3b" opacity=".55" />

          {/* fortress */}
          <g transform="translate(244 355)" fill="#3b2316">
            <path d="M4 106h145v18H4z" />
            <path d="M19 106V48h12V34h12v14h10V34h12v14h10V34h12v14h10V34h12v14h10V34h12v14h8l12 58z" />
            <path d="M40 75h25v18H40zM95 75h25v18H95zM73 33v46h20V33z" fill="#2b180e" />
            <path d="M0 106V80l20-15v41zM151 106V80l-20-15v41z" opacity=".85" />
            <path d="M4 124h145v8H4z" opacity=".75" />
          </g>

          {/* camels */}
          <use href={`#camel-${uid}`} transform="translate(116 448) scale(1.55)" />
          <use href={`#camel-${uid}`} transform="translate(202 462) scale(1.3)" opacity=".92" />

          {/* cactus */}
          <g fill="#2f5451" transform="translate(463 421)">
            <rect x="14" y="0" width="13" height="76" rx="6.5" />
            <path d="M14 28c-14-2-21 4-21 14v11c0 5 8 5 8 0V45c0-4 4-6 13-5z" />
            <path d="M27 19c12-2 19 3 19 12v22c0 5-8 5-8 0V35c0-4-3-6-11-5z" />
            <ellipse cx="20" cy="77" rx="27" ry="4" fill="#a55b38" opacity=".4" />
          </g>

          {/* pot */}
          <g transform="translate(418 472)">
            <ellipse cx="25" cy="49" rx="24" ry="4" fill="#70331e" opacity=".35" />
            <path
              d="M13 8c0-6 24-6 24 0l4 8c7 5 8 18 2 25-4 5-11 7-18 7s-14-2-18-7c-6-7-5-20 2-25z"
              fill="#c9754d"
            />
            <path d="M16 30c7 4 16 4 23 0M18 36c6 3 12 3 18 0" stroke="#71351f" strokeWidth="1.5" fill="none" />
            <path d="M12 9c7 3 22 3 29 0" stroke="#71351f" strokeWidth="1.5" fill="none" />
          </g>

          {/* footprints */}
          <g fill="#d9853d">
            <ellipse cx="354" cy="491" rx="5" ry="8" transform="rotate(-25 354 491)" />
            <ellipse cx="369" cy="504" rx="5" ry="8" transform="rotate(-25 369 504)" />
            <ellipse cx="384" cy="488" rx="5" ry="8" transform="rotate(-25 384 488)" />
            <ellipse cx="397" cy="505" rx="5" ry="8" transform="rotate(-25 397 505)" />
          </g>

          {/* bottom panel */}
          <path d="M68 550h464v146H68z" fill="#372015" />
          <text
            x="300"
            y="602"
            textAnchor="middle"
            fontFamily="Manrope, sans-serif"
            fontSize="12.5"
            letterSpacing="3.4"
            fill="#d5b789"
          >
            A VISUAL JOURNEY THROUGH
          </text>
          <text
            x="300"
            y="648"
            textAnchor="middle"
            fontFamily="Fraunces, Georgia, serif"
            fontSize="34"
            letterSpacing="4"
            fill="#e7ca9d"
          >
            CHOLISTAN
          </text>

          {/* bottom dot rule */}
          {Array.from({ length: 11 }).map((_, i) => (
            <circle key={`b-${i}`} cx={92 + i * 41} cy="676" r="6" fill="#c46b45" />
          ))}
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------
   2. DESI — SOCIAL CAMPAIGN
   ------------------------------------------------------------------ */
export function DesiArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");

  return (
    <svg {...svgProps} role="img" aria-labelledby={`desi-title-${uid}`}>
      <title id={`desi-title-${uid}`}>
        Desi social campaign poster asking “Can one word have 5 personalities?” with glossy pink
        lettering
      </title>
      <defs>
        <linearGradient id={`desi-gloss-${uid}`} x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0%" stopColor="#ff8fb7" />
          <stop offset="42%" stopColor="#ef4b82" />
          <stop offset="100%" stopColor="#b31b58" />
        </linearGradient>
      </defs>

      <rect width="600" height="750" fill="#f5f0e4" />
      <g opacity=".16" fill="#d7c7b2">
        <circle cx="530" cy="92" r="44" />
        <circle cx="48" cy="630" r="62" />
      </g>

      <text x="62" y="70" fontFamily="Manrope, sans-serif" fontSize="16" fontWeight="600" fill="#2d2d31">
        1/7
      </text>

      <g
        fontFamily="Manrope, sans-serif"
        fontWeight="800"
        fill="#26272c"
        textAnchor="middle"
        letterSpacing="-1.4"
      >
        <text x="300" y="172" fontSize="47">
          Can one word
        </text>
        <text x="300" y="228" fontSize="47">
          have <tspan fill="#ec4279" fontSize="57">5</tspan>
        </text>
        <text x="300" y="284" fontSize="47">
          personalities?
        </text>
      </g>
      <path
        d="M196 305c52 12 122 14 179 3 15-3 28-2 39 1"
        fill="none"
        stroke="#ec4279"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <g transform="rotate(-6 300 468)">
        <text
          x="303"
          y="545"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="150"
          letterSpacing="2"
          fill="#7f123f"
        >
          DESI
        </text>
        <text
          x="298"
          y="527"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="150"
          letterSpacing="2"
          fill={`url(#desi-gloss-${uid})`}
          stroke="#951345"
          strokeWidth="2.5"
          paintOrder="stroke"
        >
          DESI
        </text>
      </g>

      <g stroke="#ec4279" strokeWidth="6" strokeLinecap="round">
        <path d="m90 420-18-8" />
        <path d="m112 393-8-18" />
        <path d="m146 377-2-21" />
        <path d="m480 388 14-14" />
        <path d="m505 412 20-4" />
        <path d="m511 447 18 8" />
      </g>
      <g fill="#ec4279">
        <path d="m101 485 4 9-4 9-4-9z" />
        <path d="m501 500 4 9-4 9-4-9z" />
      </g>

      <g fontFamily="Manrope, sans-serif" fill="#3d3c40">
        <text x="62" y="646" fontSize="22" fontWeight="500">
          Same word.
        </text>
        <text x="62" y="678" fontSize="22" fontWeight="500">
          Different vibes.
        </text>
      </g>

      <g transform="translate(388 668)">
        <path d="M0 0h110M94-15 112 0 94 15" stroke="#3d3c40" strokeWidth="2" fill="none" />
      </g>

      <text
        x="62"
        y="718"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="16"
        fill="#4a4446"
      >
        @madebyazka
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------
   3. DESI, BUT MAKE IT BEDAZZLED
   ------------------------------------------------------------------ */
export function BedazzledArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");

  return (
    <svg {...svgProps} role="img" aria-labelledby={`bedazzled-title-${uid}`}>
      <title id={`bedazzled-title-${uid}`}>
        Desi, but make it Bedazzled — a vivid poster of a rhinestoned rickshaw surrounded by
        sparkling stars
      </title>
      <defs>
        <linearGradient id={`bed-gem-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5b95" />
          <stop offset="50%" stopColor="#c2186b" />
          <stop offset="100%" stopColor="#6d1046" />
        </linearGradient>
        <linearGradient id={`bed-silver-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#c8c8d0" />
          <stop offset="100%" stopColor="#7d7c88" />
        </linearGradient>
        <pattern id={`bed-dots-${uid}`} width="30" height="30" patternUnits="userSpaceOnUse">
          <path
            d="M15 4l2.6 8.4L26 15l-8.4 2.6L15 26l-2.6-8.4L4 15l8.4-2.6z"
            fill="#f4a4cd"
            opacity=".9"
          />
          <circle cx="3" cy="24" r="2.2" fill="#b8d9ff" opacity=".85" />
        </pattern>
        <filter id={`bed-shadow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#5b1035" floodOpacity=".22" />
        </filter>
        <path
          id={`bed-star-${uid}`}
          d="M0-13 3.3-3.3 13 0 3.3 3.3 0 13-3.3 3.3-13 0-3.3-3.3Z"
        />
        <clipPath id={`bed-body-${uid}`}>
          <path d="M22 197c0-50 26-76 73-88l42-47C150 47 172 36 205 36h78c45 0 76 20 84 62l18 31v118c0 20-13 30-32 30H55c-21 0-33-12-33-32z" />
        </clipPath>
      </defs>

      <rect width="600" height="750" fill="#efe8d3" />

      {/* headline */}
      <g filter={`url(#bed-shadow-${uid})`}>
        <text
          x="408"
          y="120"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="100"
          letterSpacing="-2"
          fill="#561036"
          opacity=".35"
          transform="translate(5 8)"
        >
          DESI
        </text>
        <text
          x="405"
          y="112"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="100"
          letterSpacing="-2"
          fill={`url(#bed-gem-${uid})`}
        >
          DESI
        </text>
        <text
          x="392"
          y="180"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontStyle="italic"
          fontSize="45"
          fill="none"
          stroke="#ae1b63"
          strokeWidth="1.4"
        >
          but make it
        </text>
        <text
          x="392"
          y="255"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="64"
          letterSpacing="-1.5"
          fill="#5f1139"
          opacity=".28"
          transform="translate(4 6)"
        >
          BEDAZZLED
        </text>
        <text
          x="388"
          y="249"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontWeight="800"
          fontSize="64"
          letterSpacing="-1.5"
          fill={`url(#bed-gem-${uid})`}
        >
          BEDAZZLED
        </text>
      </g>

      {/* rickshaw */}
      <g transform="translate(30 360)" filter={`url(#bed-shadow-${uid})`}>
        <ellipse cx="210" cy="302" rx="178" ry="17" fill="#8f7c5d" opacity=".22" />

        {/* main body */}
        <path
          d="M22 197c0-50 26-76 73-88l42-47C150 47 172 36 205 36h78c45 0 76 20 84 62l18 31v118c0 20-13 30-32 30H55c-21 0-33-12-33-32z"
          fill="#a81469"
        />
        <g clipPath={`url(#bed-body-${uid})`}>
          <rect x="20" y="35" width="370" height="270" fill={`url(#bed-dots-${uid})`} opacity=".9" />
          <path
            d="M20 200c58-18 104-12 158-3 55 9 116 13 211-3v63c0 20-13 30-32 30H55c-21 0-33-12-33-32z"
            fill="#bd1d7a"
          />
          <rect x="20" y="35" width="370" height="55" fill="#242c64" />
        </g>

        {/* canopy / roof trim */}
        <path
          d="M138 107c15-38 42-57 88-57h37c48 0 78 22 85 64l-15 9c-6-34-30-52-70-52h-37c-37 0-58 14-73 46z"
          fill="#1b2257"
        />
        <g fill="#55d9f2">
          {Array.from({ length: 11 }).map((_, i) => (
            <circle key={i} cx={140 + i * 19.5} cy={85 - Math.sin(i / 10 * Math.PI) * 13} r="3.3" />
          ))}
        </g>
        <g fill="#f4c3e0">
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={`p-${i}`} cx={175 + i * 30} cy="60" r="2.2" opacity=".85" />
          ))}
        </g>

        {/* windshield */}
        <path
          d="M43 185c-2-31 13-52 50-59l36-7v100H50c-4-10-7-21-7-34z"
          fill="#b9cdf8"
        />
        <path d="M58 177c-2-21 9-36 36-42l14-3v45z" fill="#dbe7ff" opacity=".85" />
        <path d="M58 114c31-13 70-8 101 9" stroke="#e9f4ff" strokeWidth="3" fill="none" opacity=".7" />

        {/* side windows */}
        <path d="M166 112h126c18 0 27 9 27 26v54H166z" fill="#37102c" />
        <path d="M176 120h116v65H176z" fill="#4b123a" />
        <path d="M180 127h108M180 136h108" stroke="#c6a0be" strokeWidth="1.2" opacity=".45" />
        <path d="M250 194v35" stroke="#822b60" strokeWidth="7" />
        <rect x="263" y="215" width="44" height="7" rx="3" fill="#c8a067" />

        {/* front details */}
        <rect x="57" y="196" width="70" height="25" rx="4" fill="#e5b9d7" stroke="#7a2d61" strokeWidth="1.5" />
        <text
          x="92"
          y="214"
          textAnchor="middle"
          fontFamily="Manrope, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill="#722258"
        >
          J 2908
        </text>
        <circle cx="47" cy="153" r="18" fill="#b9cdf8" stroke="#221238" strokeWidth="5" />
        <circle cx="45" cy="230" r="14" fill="#d3e0ff" stroke="#14121f" strokeWidth="6" />

        {/* yellow mudguard */}
        <path d="M26 260c-4-36 15-70 60-72 32-1 52 18 60 45l-17 38H47c-10 0-18-4-21-11z" fill="#f1a11b" />
        <path d="M76 206c24-10 48 2 56 27" stroke="#c77a08" strokeWidth="3" fill="none" opacity=".5" />

        {/* gem highlights */}
        <g fill="#f8b4d4">
          {[
            [92, 240],
            [120, 232],
            [148, 248],
            [176, 232],
            [203, 247],
            [230, 231],
            [257, 249],
            [286, 236],
            [312, 252],
            [338, 236],
            [150, 155],
            [250, 150],
            [310, 160],
          ].map(([x, y], i) => (
            <path key={i} d="M0-7 1.8-1.8 7 0 1.8 1.8 0 7-1.8 1.8-7 0-1.8-1.8Z" transform={`translate(${x} ${y})`} />
          ))}
        </g>

        {/* wheels */}
        <circle cx="96" cy="264" r="55" fill="#151419" />
        <circle cx="96" cy="264" r="38" fill="#23212b" />
        <circle cx="96" cy="264" r="12" fill="#77717e" />
        <circle cx="298" cy="262" r="50" fill="#151419" />
        <circle cx="298" cy="262" r="35" fill="#23212b" />
        <circle cx="298" cy="262" r="10" fill="#77717e" />

        {/* antenna */}
        <path d="M53 92 40 18" stroke="#232012" strokeWidth="3" />
        <path d="M34 16h13" stroke="#232012" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* scattered sparkle elements */}
      <g filter={`url(#bed-shadow-${uid})`}>
        <use href={`#bed-star-${uid}`} transform="translate(58 98) scale(.95)" fill="#c2186b" />
        <use href={`#bed-star-${uid}`} transform="translate(118 167) scale(.6)" fill="#f08cba" />
        <use href={`#bed-star-${uid}`} transform="translate(562 130) scale(.8)" fill="#c2186b" />
        <use href={`#bed-star-${uid}`} transform="translate(538 390) scale(1.05)" fill={`url(#bed-silver-${uid})`} />
        <use href={`#bed-star-${uid}`} transform="translate(80 405) scale(.75)" fill="#dc3a86" />
        <use href={`#bed-star-${uid}`} transform="translate(520 515) scale(.65)" fill="#b91f6d" />
        <use href={`#bed-star-${uid}`} transform="translate(120 610) scale(.9)" fill="#c2186b" />
        <use href={`#bed-star-${uid}`} transform="translate(495 635) scale(.55)" fill={`url(#bed-silver-${uid})`} />
        <use href={`#bed-star-${uid}`} transform="translate(220 690) scale(.7)" fill="#ec79ac" />
        <circle cx="235" cy="30" r="18" fill={`url(#bed-silver-${uid})`} />
        <path d="M235 13l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fff" opacity=".65" />
        <circle cx="548" cy="256" r="15" fill={`url(#bed-silver-${uid})`} />
        <circle cx="98" cy="286" r="10" fill="#e53e88" />
        <circle cx="455" cy="455" r="11" fill={`url(#bed-gem-${uid})`} />
        <circle cx="68" cy="510" r="9" fill={`url(#bed-silver-${uid})`} />
      </g>
      <g fill="#c2186b" opacity=".8">
        <path d="M445 330l5 9 9 5-9 5-5 9-5-9-9-5 9-5zM540 570l4 7 7 4-7 4-4 7-4-7-7-4 7-4z" />
      </g>

      <text
        x="548"
        y="718"
        textAnchor="end"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="17"
        fill="#611a44"
      >
        @madebyazka
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------
   4. BE — TYPE STUDY
   ------------------------------------------------------------------ */
export function BeArtwork() {
  const raw = useId();
  const uid = raw.replace(/[:]/g, "");

  const letters = [
    { char: "B", x: 225, y: 500, size: 300 },
    { char: "E", x: 374, y: 575, size: 300 },
  ];

  return (
    <svg {...svgProps} role="img" aria-labelledby={`be-title-${uid}`}>
      <title id={`be-title-${uid}`}>
        Be — a bold yellow three-dimensional typographic poster on navy with a teal border
      </title>
      <defs>
        <linearGradient id={`be-gold-${uid}`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#ffe886" />
          <stop offset="38%" stopColor="#f5d64a" />
          <stop offset="76%" stopColor="#dcb329" />
          <stop offset="100%" stopColor="#b69113" />
        </linearGradient>
        <filter id={`be-shadow-${uid}`} x="-30%" y="-30%" width="170%" height="170%">
          <feDropShadow dx="12" dy="18" stdDeviation="14" floodColor="#3d2d02" floodOpacity=".32" />
        </filter>
      </defs>

      <rect width="600" height="750" fill="#16cdb5" />
      <rect x="44" y="44" width="512" height="662" fill="#ffffff" opacity=".22" />
      <rect x="56" y="56" width="488" height="638" fill="#101c5c" />

      <g filter={`url(#be-shadow-${uid})`} transform="rotate(-13 300 380)">
        {letters.map(({ char, x, y, size }) =>
          [26, 20, 14, 8, 4].map((offset, index) => (
            <text
              key={`${char}-${offset}`}
              x={x + offset * 0.75}
              y={y + offset}
              fontFamily="Manrope, sans-serif"
              fontWeight="800"
              fontSize={size}
              fill={["#4f3e05", "#6a5508", "#8a710c", "#a98c12", "#c3a31a"][index]}
            >
              {char}
            </text>
          ))
        )}
        {letters.map(({ char, x, y, size }) => (
          <text
            key={`front-${char}`}
            x={x}
            y={y}
            fontFamily="Manrope, sans-serif"
            fontWeight="800"
            fontSize={size}
            fill={`url(#be-gold-${uid})`}
            stroke="#f9e693"
            strokeWidth="1"
            paintOrder="stroke"
          >
            {char}
          </text>
        ))}
      </g>
      <path d="M80 650h440" stroke="#f3cf43" strokeWidth="1" opacity=".35" />
      <text
        x="80"
        y="110"
        fontFamily="Manrope, sans-serif"
        fontSize="10"
        letterSpacing="4"
        fontWeight="600"
        fill="#f3cf43"
        opacity=".8"
      >
        A TYPOGRAPHIC STUDY
      </text>
      <text
        x="520"
        y="672"
        textAnchor="end"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="15"
        fill="#f3cf43"
        opacity=".8"
      >
        @madebyazka
      </text>
    </svg>
  );
}
