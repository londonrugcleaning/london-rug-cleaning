
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
            className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        )}
        
        <Button 
          size="icon" 
          className="rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300"
          onClick={() => setShowQuoteModal(true)}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Get a free quote</span>
        </Button>
        
        <Button 
          size="icon" 
          className="rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg transition-all duration-300"
          asChild
        >
          <a href="tel:02034888344">
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call us</span>
          </a>
        </Button>
      </div>
      
      <QuoteModal open={showQuoteModal} onOpenChange={setShowQuoteModal} />
    </>
  );
};
