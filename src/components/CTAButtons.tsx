import { useState } from "react";
import { Phone, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "./QuoteModal";
import { cn } from "@/lib/utils";

interface CTAButtonsProps {
  variant?: "default" | "hero" | "outline-solid" | "secondary";
  className?: string;
}

export const CTAButtons = ({ variant = "default", className }: CTAButtonsProps) => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const isSecondary = variant === "secondary";

  return (
    <>
      <div className={cn("flex flex-row gap-4", className)}>
        <Button
          size="lg"
          className={cn(
            "gap-2",
            isSecondary
              ? "bg-white text-blue-900 hover:bg-blue-50"
              : "bg-blue-800 hover:bg-blue-900"
          )}
          onClick={() => setShowQuoteModal(true)}
          aria-label="Get a free quote"
        >
          <MessageSquareQuote aria-hidden="true" />
          <span>Get a Free Quote</span>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className={cn(
            "gap-2",
            isSecondary && "border-white text-white hover:bg-white hover:text-blue-900"
          )}
        >
          <a href="tel:02034888344" aria-label="Call us at 02034888344">
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>02034888344</span>
          </a>
        </Button>
      </div>

      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />
    </>
  );
};
