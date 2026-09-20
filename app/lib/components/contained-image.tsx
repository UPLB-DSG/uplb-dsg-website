import Image from "next/image";
import type { ImageItem } from "@/lib/data";

// Shows the whole image, never cropped: the same picture, blurred and dimmed,
// fills the box behind an object-contain foreground.
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
  const small = image.src.replace(".webp", "-640.webp");
  return (
    <div className={`img-shimmer relative overflow-hidden bg-black ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-125 bg-cover bg-center opacity-50 blur-2xl"
        style={{ backgroundImage: `url(${small})` }}
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
