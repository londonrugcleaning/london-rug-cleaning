
import { useState } from "react";
import { Phone } from "lucide-react";
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
          className="gap-2 bg-blue-600 hover:bg-blue-700"
          onClick={() => setShowQuoteModal(true)}
        >
          {showText ? "Get a Free Quote" : null}
        </Button>

        <Button asChild size="lg" variant={"outline"} className="gap-2">
          <a href="tel:02034888344">
            <Phone className="h-4 w-4" />
            {showText ? "02034888344" : null}
          </a>
        </Button>
      </div>

      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />
    </>
  );
};
