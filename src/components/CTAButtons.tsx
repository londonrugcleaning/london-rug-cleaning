
import { useState } from "react";
import { Phone, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "./QuoteModal";

interface CTAButtonsProps {
  variant?: "default" | "hero";
  showText?: boolean;
}

export const CTAButtons = ({
  variant = "default",
  showText = true,
}: CTAButtonsProps) => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <div className={`flex ${variant === "hero" ? "flex-col sm:flex-row" : "flex-row"} gap-4`}>
        <Button
          size="lg"
          className="gap-2 bg-blue-800 hover:bg-blue-900"
          onClick={() => setShowQuoteModal(true)}
          aria-label="Get a free quote"
        > 
          <MessageSquareQuote aria-hidden="true" />
          {showText ? <span>Get a Free Quote</span> : null}
        </Button>

        <Button asChild size="lg" variant={variant === "hero" ? "outlineWhite" : "outline"} className="gap-2">
          <a href="tel:02034888344" aria-label="Call us at 02034888344">
            <Phone className="h-5 w-5" aria-hidden="true" />
            {showText ? <span>02034888344</span> : null}
          </a>
        </Button>
      </div>

      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />
    </>
  );
};
