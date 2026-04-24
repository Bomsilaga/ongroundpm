"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string;
  fallback?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  alt,
  fallback,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`bg-cream-dark border-2 border-dashed border-sandstone/30 flex items-center justify-center ${className ?? ""}`}
        role="img"
        aria-label={alt as string}
      >
        {fallback ?? (
          <span className="font-sans text-xs text-warm-muted/50 uppercase tracking-widest">
            Image placeholder
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
