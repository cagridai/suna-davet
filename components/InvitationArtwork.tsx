import type { DesignId } from "@/lib/designs";

export function InvitationArtwork({ id }: { id: DesignId }) {
  switch (id) {
    case "dogum-gunu":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 280 88"
          className="h-20 w-full max-w-[280px]"
          fill="none"
        >
          {/* Balloons & festive cake */}
          <ellipse cx="42" cy="34" rx="18" ry="22" fill="#fb7185" />
          <path d="M42 56 C40 68, 48 74, 42 84" stroke="#9f1239" strokeWidth="1.5" />
          <ellipse cx="78" cy="26" rx="15" ry="19" fill="#fbbf24" />
          <path d="M78 45 C80 60, 74 70, 78 84" stroke="#b45309" strokeWidth="1.5" />
          <ellipse cx="236" cy="30" rx="17" ry="21" fill="#38bdf8" />
          <path d="M236 51 C238 64, 232 74, 236 84" stroke="#0369a1" strokeWidth="1.5" />
          {/* Cake */}
          <rect x="112" y="48" width="56" height="28" rx="6" fill="#fde68a" stroke="#9f1239" strokeWidth="2" />
          <path d="M112 58 Q126 65 140 58 Q154 65 168 58" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
          <rect x="137" y="28" width="6" height="20" rx="2" fill="#f43f5e" />
          <path d="M140 16 C145 21, 144 27, 140 27 C136 27, 135 21, 140 16 Z" fill="#f59e0b" />
          {/* Confetti */}
          <circle cx="194" cy="24" r="3.5" fill="#ec4899" />
          <rect x="205" y="42" width="7" height="7" transform="rotate(22 205 42)" fill="#10b981" />
          <circle cx="24" cy="64" r="3" fill="#8b5cf6" />
          <rect x="184" y="60" width="6" height="6" transform="rotate(-18 184 60)" fill="#f59e0b" />
        </svg>
      );

    case "vefat-ilani":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 220 52"
          className="h-12 w-52"
          fill="none"
        >
          <line x1="8" y1="26" x2="78" y2="26" stroke="#1c1917" strokeWidth="1.5" />
          <line x1="142" y1="26" x2="212" y2="26" stroke="#1c1917" strokeWidth="1.5" />
          {/* Mourning ribbon */}
          <path
            d="M95 44 L110 12 L125 44 M102 30 L118 30"
            stroke="#1c1917"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="110" cy="11" r="4" fill="#1c1917" />
        </svg>
      );

    case "bilimsel-makale":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 360 72"
          className="h-16 w-full max-w-[360px]"
          fill="none"
        >
          <line x1="0" y1="54" x2="360" y2="54" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="22" x2="360" y2="22" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
          {/* Cardiomyocyte action potential waveform */}
          <path
            d="M8 54 L64 54 L72 10 L82 26 L124 28 C142 30, 152 54, 174 54 L224 54 L232 10 L242 26 L284 28 C302 30, 312 54, 334 54 L352 54"
            stroke="#0284c7"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="72" cy="10" r="4" fill="#0f172a" />
          <circle cx="232" cy="10" r="4" fill="#0f172a" />
        </svg>
      );

    case "cicek-bahcesi":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 260 64"
          className="h-16 w-64"
          fill="none"
        >
          <path d="M24 44 Q72 24 130 34 Q188 44 236 24" stroke="#4d7c0f" strokeWidth="2" />
          <circle cx="130" cy="30" r="6" fill="#fbbf24" />
          <circle cx="130" cy="18" r="6" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
          <circle cx="141" cy="26" r="6" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
          <circle cx="137" cy="39" r="6" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
          <circle cx="123" cy="39" r="6" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
          <circle cx="119" cy="26" r="6" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
          <circle cx="130" cy="30" r="5" fill="#f59e0b" />
          {/* Leaves */}
          <ellipse cx="64" cy="33" rx="11" ry="5" transform="rotate(-18 64 33)" fill="#84cc16" />
          <ellipse cx="196" cy="34" rx="11" ry="5" transform="rotate(15 196 34)" fill="#84cc16" />
          <circle cx="42" cy="38" r="4" fill="#f472b6" />
          <circle cx="218" cy="28" r="4" fill="#f472b6" />
        </svg>
      );

    case "son-dakika":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 180 48"
          className="h-11 w-44"
          fill="none"
        >
          <circle cx="24" cy="24" r="16" stroke="#f87171" strokeWidth="2" opacity="0.55" />
          <circle cx="24" cy="24" r="10" stroke="#ef4444" strokeWidth="2" />
          <circle cx="24" cy="24" r="5" fill="#ef4444" />
          <path d="M52 24 H76 L86 10 L96 38 L106 16 L116 32 L124 24 H172" stroke="#fca5a5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "sirk-afisi":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 280 56"
          className="h-14 w-full max-w-[280px]"
          fill="none"
        >
          <path d="M20 46 L140 8 L260 46 Z" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2" />
          <path d="M68 46 L140 8 L212 46 Z" fill="#fef3c7" />
          <path d="M110 46 L140 8 L170 46 Z" fill="#dc2626" />
          <line x1="140" y1="2" x2="140" y2="10" stroke="#7f1d1d" strokeWidth="2" />
          <polygon points="140,2 154,6 140,10" fill="#fbbf24" />
        </svg>
      );

    case "indirim-katalogu":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 110 110"
          className="h-24 w-24 shrink-0"
          fill="none"
        >
          <polygon
            points="55,4 67,22 88,15 86,36 106,45 92,62 103,81 82,84 78,105 58,95 41,106 34,86 13,86 21,66 5,52 24,40 19,19 40,24"
            fill="#facc15"
            stroke="#dc2626"
            strokeWidth="3"
          />
          <text
            x="55"
            y="50"
            textAnchor="middle"
            fill="#dc2626"
            fontSize="16"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            0 TL
          </text>
          <text
            x="55"
            y="68"
            textAnchor="middle"
            fill="#181615"
            fontSize="10"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            BEDAVA
          </text>
        </svg>
      );

    case "retro-sistem":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 56 56"
          className="h-14 w-14 shrink-0"
          fill="none"
        >
          <rect x="4" y="4" width="48" height="48" fill="#fef08a" stroke="#18181b" strokeWidth="2.5" />
          <polygon points="28,12 46,42 10,42" fill="#facc15" stroke="#18181b" strokeWidth="2" />
          <rect x="26.5" y="22" width="3" height="10" fill="#18181b" />
          <rect x="26.5" y="35" width="3" height="3" fill="#18181b" />
        </svg>
      );

    case "gerilim-afisi":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 240 52"
          className="h-12 w-60"
          fill="none"
        >
          <path
            d="M12 26 H86 L96 8 L108 44 L120 18 L128 32 L136 26 H228"
            stroke="#ef4444"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "resmi-tebligat":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 112 112"
          className="h-24 w-24 shrink-0 -rotate-12"
          fill="none"
        >
          <circle cx="56" cy="56" r="48" stroke="#b91c1c" strokeWidth="3.5" strokeDasharray="6 3" />
          <circle cx="56" cy="56" r="39" stroke="#b91c1c" strokeWidth="1.5" />
          <text
            x="56"
            y="49"
            textAnchor="middle"
            fill="#b91c1c"
            fontSize="11"
            fontWeight="800"
            fontFamily="monospace"
          >
            ZORUNLU
          </text>
          <text
            x="56"
            y="65"
            textAnchor="middle"
            fill="#b91c1c"
            fontSize="10"
            fontWeight="800"
            fontFamily="monospace"
          >
            DAVET
          </text>
        </svg>
      );
  }
}
