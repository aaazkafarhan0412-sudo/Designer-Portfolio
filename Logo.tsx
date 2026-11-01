import { brand } from "@/data/site";
import { cn } from "@/utils/cn";

type LogoProps = {
  /** Use light styles on a dark/plum background. */
  onDark?: boolean;
  showTagline?: boolean;
  className?: string;
  /** Optional override for the logo mark's accessible label. */
  label?: string;
};

/**
 * Brand logo — reusable across every section.
 * Replace the mark by supplying `brand.logo.image` in src/data/site.ts.
 * Set `showTagline` where there is room for the descriptor.
 */
export function Logo({ onDark = false, showTagline = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {brand.logo.image ? (
        <img
          src={brand.logo.image}
          alt={`${brand.name} logo`}
          className="h-10 w-10 rounded-[0.85rem] object-contain"
        />
      ) : (
        <span
          className={cn(
            "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-[0.85rem] shadow-sm",
            onDark ? "bg-cream" : "bg-plum"
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 40 40" className="h-10 w-10">
            <g transform="translate(20 20)">
              {[0, 72, 144, 216, 288].map((rotation) => (
                <ellipse
                  key={rotation}
                  rx="4.4"
                  ry="8.6"
                  cy="-6.3"
                  transform={`rotate(${rotation})`}
                  fill={onDark ? "#462536" : "#FAF6F0"}
                  opacity="0.9"
                />
              ))}
              <circle r="3.1" fill="#BD8491" />
            </g>
          </svg>
        </span>
      )}
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.28rem] leading-none tracking-[-0.03em]",
            onDark ? "text-cream" : "text-plum"
          )}
        >
          {brand.logo.wordmark}
          <span className="text-rose">.</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1.5 text-[0.53rem] font-semibold tracking-[0.23em] uppercase",
              onDark ? "text-cream/55" : "text-mauve"
            )}
          >
            {brand.logo.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
