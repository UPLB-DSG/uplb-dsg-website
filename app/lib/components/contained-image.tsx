import Image from "next/image";
import type { ImageItem } from "@/lib/data";

// Shows the whole image, never cropped: the same picture, blurred and dimmed,
// fills the box behind an object-contain foreground. The backdrop is a lazy
// image of the small file, so it loads only near the viewport and reuses the
// mobile download.
export default function ContainedImage({
  image,
  sizes,
  priority = false,
  className = "",
}: {
  image: ImageItem;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const small = image.small ?? image.src;
  return (
    <div className={`img-shimmer relative overflow-hidden bg-black ${className}`}>
      <Image
        src={small}
        alt=""
        aria-hidden="true"
        fill
        priority={priority}
        sizes="20vw"
        className="scale-125 object-cover opacity-50 blur-2xl"
      />
      <picture>
        <source media="(max-width: 640px)" srcSet={small} />
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      </picture>
    </div>
  );
}
