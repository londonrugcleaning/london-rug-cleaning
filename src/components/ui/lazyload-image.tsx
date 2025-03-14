
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export const LazyLoadImage = ({
  src,
  alt,
  className,
  placeholderSrc = "/placeholder.svg",
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  ...props
}: LazyLoadImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);

  // Ensure alt text is always provided
  const accessibleAlt = alt || "Image";

  useEffect(() => {
    // If using native lazy loading and browser supports it, use that
    if ('loading' in HTMLImageElement.prototype && loading === 'lazy') {
      setCurrentSrc(src);
      return;
    }

    // For browsers that don't support lazy loading or when eager loading is requested
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [src, loading]);

  return (
    <img
      src={currentSrc}
      alt={accessibleAlt}
      loading={loading}
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-50",
        className
      )}
      {...props}
    />
  );
};
