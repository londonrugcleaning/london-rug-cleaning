
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
}

export const LazyLoadImage = ({
  src,
  alt,
  className,
  placeholderSrc = "/placeholder.svg",
  ...props
}: LazyLoadImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);

  // Ensure alt text is always provided
  const accessibleAlt = alt || "Image";

  useEffect(() => {
    // Create new image to preload
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={accessibleAlt}
      loading="lazy"
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-50",
        className
      )}
      {...props}
    />
  );
};
