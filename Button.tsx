import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Icon } from "./Icon";

type ButtonVariant = "primary" | "outline" | "outline-light" | "light" | "rose" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: "up-right" | "right" | false;
  className?: string;
  href?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className"> &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-plum text-cream hover:bg-plum-deep shadow-[0_12px_30px_-16px_rgba(70,37,54,0.8)]",
  rose: "bg-rose text-cream hover:bg-rose-deep shadow-[0_12px_30px_-16px_rgba(189,132,145,0.9)]",
  outline:
    "border border-plum/25 bg-transparent text-plum hover:border-plum hover:bg-plum hover:text-cream",
  "outline-light":
    "border border-cream/25 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-plum",
  light: "bg-cream text-plum hover:bg-blush",
  ghost: "bg-transparent text-plum hover:bg-plum/6",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-[0.7rem]",
  md: "px-6 py-3.5 text-[0.72rem]",
  lg: "px-7 py-4 text-[0.76rem]",
};

/**
 * Shared call-to-action. Renders an <a> when `href` is provided, otherwise a button.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold tracking-[0.13em] uppercase",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-deep",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name={arrow === "up-right" ? "arrow-up-right" : "arrow-right"}
          className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5"
          strokeWidth={1.9}
        />
      )}
    </>
  );

  if (href) {
    const { target, rel, ...anchorProps } = props as ComponentPropsWithoutRef<"a">;
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : target}
        rel={external ? "noopener noreferrer" : rel}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {content}
    </button>
  );
}
