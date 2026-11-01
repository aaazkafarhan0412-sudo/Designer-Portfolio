import { useId } from "react";
import { cn } from "@/utils/cn";

type RotatingSealProps = {
  className?: string;
  text?: string;
};

/**
 * Slowly rotating brand seal. Decorative and hidden from assistive technology;
 * the same information is available in the surrounding copy.
 */
export function RotatingSeal({
  className,
  text = "MADE BY AZKA ✦ DESIGN WITH SOUL ✦ ",
}: RotatingSealProps) {
  const raw = useId();
  const pathId = `seal-path-${raw.replace(/[:]/g, "")}`;

  return (
    <div
      className={cn(
        "relative grid h-28 w-28 place-items-center rounded-full bg-cream shadow-[0_15px_35px_-18px_rgba(45,20,32,.55)] ring-1 ring-plum/10",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 132 132" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path
            id={pathId}
            d="M66,66 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
            fill="none"
          />
        </defs>
        <text
          fontFamily="Manrope, sans-serif"
          fontSize="8.2"
          fontWeight="600"
          letterSpacing="2.1"
          fill="#462536"
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 40 40" className="h-8 w-8">
        <g transform="translate(20 20)">
          {[0, 72, 144, 216, 288].map((rotation) => (
            <ellipse
              key={rotation}
              rx="3.7"
              ry="7.6"
              cy="-5.5"
              transform={`rotate(${rotation})`}
              fill="#462536"
            />
          ))}
          <circle r="2.6" fill="#BD8491" />
        </g>
      </svg>
    </div>
  );
}
