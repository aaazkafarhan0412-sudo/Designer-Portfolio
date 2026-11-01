import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type MediaFrameProps = {
  /** Add e.g. "/images/my-photo.jpg" to replace the placeholder artwork. */
  src?: string;
  alt: string;
  /** Shown when no `src` is provided. */
  children?: ReactNode;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
};

/**
 * A locked-ratio, replaceable image container.
 * The crop, alignment and rounded treatment remain identical whether an image
 * or custom illustration is used.
 */
export function MediaFrame({
  src,
  alt,
  children,
  className,
  imgClassName,
  loading = "lazy",
}: MediaFrameProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn("absolute inset-0 h-full w-full object-cover object-center", imgClassName)}
        />
      ) : (
        <div className="absolute inset-0" role="img" aria-label={alt}>
          {children}
        </div>
      )}
    </div>
  );
}
