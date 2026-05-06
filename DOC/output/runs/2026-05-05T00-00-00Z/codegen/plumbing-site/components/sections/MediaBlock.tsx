import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MediaBlockProps {
  src?: string;
  alt?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  className?: string;
  children?: ReactNode;
}

export default function MediaBlock({
  src,
  alt = "",
  aspectRatio = "16/9",
  className,
  children,
}: MediaBlockProps) {
  const ratioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  }[aspectRatio];

  return (
    <div
      className={cn(
        "rounded-[--radius-card] overflow-hidden bg-[--color-inset] border border-[--color-border]",
        ratioClass,
        className
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : children ? (
        children
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[--color-text-muted] text-sm">
          {alt || "Image"}
        </div>
      )}
    </div>
  );
}
