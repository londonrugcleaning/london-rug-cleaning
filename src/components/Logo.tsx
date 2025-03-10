
import { Star } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Star className="h-8 w-8 text-primary" />
        <Star className="absolute left-0 top-0 h-8 w-8 animate-pulse text-primary/30" />
      </div>
      <span className="font-serif text-xl font-semibold">
        London Rug Cleaning
      </span>
    </div>
  );
};
