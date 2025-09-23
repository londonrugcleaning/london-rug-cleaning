
import { useState } from "react";
import { Phone, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "./QuoteModal";

export const CTAButtons = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <div className="flex flex-row gap-4">
        <Button
          size="lg"
          className="gap-2 bg-blue-800 hover:bg-blue-900"
          onClick={() => setShowQuoteModal(true)}
          aria-label="Get a free quote"
        >
          <MessageSquareQuote aria-hidden="true" />
          <span>Get a Free Quote</span>
        </Button>

        <Button asChild size="lg" variant="outline" className="gap-2">
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
