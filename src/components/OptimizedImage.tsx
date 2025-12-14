import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
// @ts-ignore
import imageMap from '@/generated/images-map.json';

const imageMapData = imageMap as Record<string, any>;

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    fill?: boolean;
}

const OptimizedImage = ({ src, alt, className, priority, fill, style, ...props }: OptimizedImageProps) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    // Reset loading state when src changes
    useEffect(() => {
        setIsLoaded(false);
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, [src]);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, []);

    // Normalize path to match keys in JSON (ensure leading slash)
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    const optimizedData = imageMapData[normalizedSrc];

    // Case 1: Image data exists in our map (Optimized)
    if (optimizedData) {
        const { avif, webp, placeholder, original, width, height } = optimizedData;

        // Generate srcSet strings with proper URI encoding for spaces and special chars
        const avifSrcSet = avif.map((v: any) => `${encodeURI(v.src)} ${v.width}w`).join(', ');
        const webpSrcSet = webp.map((v: any) => `${encodeURI(v.src)} ${v.width}w`).join(', ');

        return (
            <div
                className={cn(
                    "relative overflow-hidden",
                    fill ? "absolute inset-0 h-full w-full" : "",
                    className
                )}
                style={{
                    ...style,
                    aspectRatio: !fill && width && height ? `${width} / ${height}` : undefined
                }}
            >
                {/* Placeholder (Blur Layer) */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "absolute inset-0 bg-cover bg-center transition-opacity duration-500 will-change-opacity",
                        isLoaded ? "opacity-0" : "opacity-100"
                    )}
                    style={{ backgroundImage: `url("${placeholder}")`, filter: 'blur(20px)', transform: "scale(1.1)" }}
                />

                <picture>
                    <source srcSet={avifSrcSet} type="image/avif" sizes={props.sizes} />
                    <source srcSet={webpSrcSet} type="image/webp" sizes={props.sizes} />
                    <img
                        ref={imgRef}
                        src={original}
                        alt={alt}
                        decoding="async"
                        width={!fill ? width : undefined}
                        height={!fill ? height : undefined}
                        loading={priority ? "eager" : "lazy"}
                        className={cn(
                            "object-cover transition-opacity duration-500",
                            fill ? "absolute inset-0 h-full w-full" : "w-full h-auto",
                            isLoaded ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => setIsLoaded(true)}
                        {...props}
                    />
                </picture>
            </div>
        );
    }

    // 2. Fallback: Use standard img for unoptimized assets
    return (
        <div className={cn("relative overflow-hidden", className)}>
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;
