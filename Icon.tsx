import type { ReactNode, SVGProps } from "react";
import { cn } from "@/utils/cn";

export type IconName =
  | "instagram"
  | "behance"
  | "linkedin"
  | "pinterest"
  | "mail"
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-left"
  | "menu"
  | "close"
  | "sparkle"
  | "copy"
  | "check"
  | "brand"
  | "design"
  | "social"
  | "illustration"
  | "ui"
  | "package";

const icons: Record<IconName, ReactNode> = {
  instagram: (
    <>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  behance: (
    <>
      <path d="M3 7h5a2.5 2.5 0 0 1 0 5H3zM3 12h5.7a3 3 0 0 1 0 6H3z" />
      <path d="M14.5 9.5h6M20.5 16.2c-.5 1.3-1.7 2.1-3.6 2.1a4.3 4.3 0 0 1-4.4-4.5 4.4 4.4 0 0 1 4.4-4.5c2.6 0 4.2 1.9 4.2 4.6h-6.3" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.2 10.5V17M7.2 7.4v.1M11 17v-6.5M11 13.4c0-2.1 4-2.4 4 .4V17" />
    </>
  ),
  pinterest: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9.1 20.1c1.1-2.4 1.8-5 2.2-7.6M10.4 15.6c-.8-2.1.4-4.4 2.4-4.4 1.7 0 2.7 1.1 2.7 2.8 0 2.3-1.4 4-3.2 4-1.1 0-1.9-.7-2-1.7" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="M3.5 7l7.2 5.4a2.2 2.2 0 0 0 2.6 0L20.5 7" />
    </>
  ),
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "arrow-right": <path d="M4 12h16M14 6l6 6-6 6" />,
  "arrow-left": <path d="M20 12H4M10 6l-6 6 6 6" />,
  menu: <path d="M3 7h18M3 12h18M3 17h12" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  sparkle: (
    <path
      d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z"
      fill="currentColor"
      stroke="none"
    />
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6a3 3 0 0 0-3 3v7a2.5 2.5 0 0 0 2 2.4" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  brand: (
    <>
      <path d="M12 2.8c.6 4.4 3.8 7.6 8.2 8.2-4.4.6-7.6 3.8-8.2 8.2-.6-4.4-3.8-7.6-8.2-8.2 4.4-.6 7.6-3.8 8.2-8.2z" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>
  ),
  design: (
    <>
      <path d="m4 20 1.2-4.4L16.4 4.4a2 2 0 0 1 2.8 0l.4.4a2 2 0 0 1 0 2.8L8.4 18.8 4 20z" />
      <path d="m14.7 6.1 3.2 3.2M5.2 15.6l3.2 3.2" />
    </>
  ),
  social: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M12 15.3c-1.8-1.1-3-2.3-3-3.7A1.7 1.7 0 0 1 12 10a1.7 1.7 0 0 1 3 1.6c0 1.4-1.2 2.6-3 3.7z" />
    </>
  ),
  illustration: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6c0-2.6-.7-5.6-2.6-5.6S7 7.7 9.8 9.8M14.2 12c2.6 0 5.6-.7 5.6-2.6S16.3 7 14.2 9.8M12 14.4c0 2.6.7 5.6 2.6 5.6s2.4-3.7-.4-5.8M9.8 12c-2.6 0-5.6.7-5.6 2.6S7.7 17 9.8 14.2" />
    </>
  ),
  ui: (
    <>
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" />
      <path d="M2.5 8.5h19M6 6h.1M9 6h.1" />
      <path d="M6.5 12.5h5v4h-5zM15 12.5h2.5M15 16h2.5" />
    </>
  ),
  package: (
    <>
      <path d="m12 2.8 8.5 4.7v9.6L12 21.2 3.5 17.1V7.5L12 2.8z" />
      <path d="m3.8 7.7 8.2 4.5 8.2-4.5M12 12.2v8.6M7.7 5.2l8.4 4.6v4.6" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
} & SVGProps<SVGSVGElement>;

export function Icon({ name, className, strokeWidth = 1.6, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
