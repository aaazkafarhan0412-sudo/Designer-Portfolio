import { brand } from "@/data/site";
import { cn } from "@/utils/cn";
import { Icon } from "./Icon";

type InstagramLinkProps = {
  className?: string;
  onDark?: boolean;
  showHandle?: boolean;
  label?: string;
  /** Small is ideal for inline placements; default is a full text link. */
  size?: "sm" | "md";
};

/**
 * The single source of truth for Instagram link styling.
 * URL lives in `brand.instagram` inside src/data/site.ts.
 */
export function InstagramLink({
  className,
  onDark = false,
  showHandle = true,
  label,
  size = "md",
}: InstagramLinkProps) {
  return (
    <a
      href={brand.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${brand.handle} on Instagram (opens in a new tab)`}
      className={cn(
        "group inline-flex max-w-full shrink-0 items-center gap-2.5 transition-colors duration-300",
        onDark ? "text-cream hover:text-blush" : "text-plum hover:text-rose-deep",
        size === "sm" ? "text-[0.7rem]" : "text-[0.78rem]",
        className
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full border transition-all duration-500",
          onDark
            ? "border-cream/20 bg-cream/5 group-hover:border-blush group-hover:bg-cream/10"
            : "border-plum/15 bg-white/40 group-hover:border-rose group-hover:bg-blush/40"
        )}
      >
        <Icon name="instagram" className="h-4 w-4" strokeWidth={1.7} />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        {label && (
          <span className="text-[0.53rem] font-semibold tracking-[0.14em] whitespace-nowrap uppercase opacity-55">
            {label}
          </span>
        )}
        <span className="font-medium tracking-[0.02em] whitespace-nowrap">
          {showHandle ? brand.handle : "Instagram"}
        </span>
      </span>
    </a>
  );
}
