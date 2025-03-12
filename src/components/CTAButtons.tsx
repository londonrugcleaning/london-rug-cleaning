import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CTAButtonsProps {
  variant?: "default" | "hero";
  showText?: boolean;
}

export const CTAButtons = ({
  variant = "default",
  showText = true,
}: CTAButtonsProps) => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    // First check if we're on the home page
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    
    // Otherwise navigate to home page and then scroll
    navigate("/");
    // Need to wait for navigation to complete
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className={`flex ${variant === "hero" ? "flex-col sm:flex-row" : "flex-row"} gap-4`}>
      <Button 
        size="lg" 
        className="gap-2 bg-blue-600 hover:bg-blue-700"
        onClick={scrollToContact}
      >
        {showText ? "Get a Free Quote" : null}
      </Button>
      
      <Button asChild size="lg" variant={variant === "hero" ? "outline" : "default"} className="gap-2">
        <a href="tel:02034888344">
          <Phone className="h-4 w-4" />
          {showText ? "02034888344" : null}
        </a>
      </Button>
    </div>
  );
};
