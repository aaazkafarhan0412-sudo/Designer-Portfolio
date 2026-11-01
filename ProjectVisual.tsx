import type { Project } from "@/data/site";
import { Artwork } from "@/components/artwork";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { cn } from "@/utils/cn";

type ProjectVisualProps = {
  project: Project;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Renders a project's real image when supplied, otherwise its custom artwork.
 * Both paths use the same replaceable frame for perfectly consistent crops.
 */
export function ProjectVisual({ project, className, loading }: ProjectVisualProps) {
  return (
    <MediaFrame
      src={project.image}
      alt={project.imageAlt}
      loading={loading}
      className={cn("h-full w-full bg-porcelain", className)}
    >
      <Artwork artwork={project.artwork} />
    </MediaFrame>
  );
}
