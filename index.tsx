import type { ArtworkKey } from "@/data/site";
import { BedazzledArtwork, BeArtwork, CholistanArtwork, DesiArtwork } from "./PosterArtworks";
import { CollectionArtwork, PurpleReverieArtwork } from "./PaperArtworks";
import { cn } from "@/utils/cn";

/**
 * Artwork registry.
 * Each project in src/data/site.ts points at one of these keys.
 * To use a real photograph instead, set `image` on the project — every frame
 * will then render your image with the same crop and dimensions.
 */
const artworkRegistry = {
  cholistan: CholistanArtwork,
  desi: DesiArtwork,
  bedazzled: BedazzledArtwork,
  purpleReverie: PurpleReverieArtwork,
  be: BeArtwork,
  collection: CollectionArtwork,
} satisfies Record<ArtworkKey, () => React.JSX.Element>;

type ArtworkProps = {
  artwork: ArtworkKey;
  className?: string;
};

export function Artwork({ artwork, className }: ArtworkProps) {
  const Component = artworkRegistry[artwork];
  return (
    <div className={cn("h-full w-full", className)}>
      <Component />
    </div>
  );
}

export {
  BedazzledArtwork,
  BeArtwork,
  CholistanArtwork,
  CollectionArtwork,
  DesiArtwork,
  PurpleReverieArtwork,
};
