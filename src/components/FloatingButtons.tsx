
import { useState, useEffect } from "react";
import { Phone, ChevronUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "./QuoteModal";

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {showScrollTop && (
          <Button
            size="icon"
            className="rounded-full bg-blue-800 hover:bg-blue-900 shadow-lg transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </Button>
        )}

        <Button
          size="icon"
          className="rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300"
          onClick={() => setShowQuoteModal(true)}
          aria-label="Get a free quote"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
        </Button>

        <Button
          size="icon"
          className="rounded-full bg-blue-800 hover:bg-blue-900 shadow-lg transition-all duration-300"
          asChild
        >
          <a href="tel:02034888344" aria-label="Call us at 02034888344">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        </Button>
      </div>

      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />
    </>
  );
};
