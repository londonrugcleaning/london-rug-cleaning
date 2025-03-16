
import { useEffect } from 'react';

interface FontLoaderProps {
  fonts: Array<{
    family: string;
    weights?: number[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
  }>;
}

export const FontLoader = ({ fonts }: FontLoaderProps) => {
  useEffect(() => {
    // Skip if fonts are already loaded or if the browser doesn't support FontFace
    if (!('FontFace' in window)) return;

    // Create a link element for Google Fonts
    const buildGoogleFontsUrl = () => {
      const familyParams = fonts.map(font => {
        const weights = font.weights?.join(';') || '400';
        return `family=${encodeURIComponent(font.family)}:wght@${weights}`;
      }).join('&');
      
      return `https://fonts.googleapis.com/css2?${familyParams}&display=swap`;
    };
    
    // Only load fonts if they aren't already loaded
    if (!document.querySelector(`link[href*="${fonts[0].family}"]`)) {
      const link = document.createElement('link');
      link.href = buildGoogleFontsUrl();
      link.rel = 'stylesheet';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [fonts]);

  return null;
};
