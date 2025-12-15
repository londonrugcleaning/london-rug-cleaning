import { Button } from "@/components/ui/button";
import { X, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteModal = ({ open, onOpenChange }: QuoteModalProps) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => onOpenChange(false)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 transition-colors opacity-70 hover:opacity-100"
              onClick={() => onOpenChange(false)}
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Get a Free Quote</h2>
              <p className="text-slate-600 mt-2">
                Fill out the form below and we'll get back to you with a competitive price for your rug cleaning.
              </p>
            </div>

            <ContactForm onSuccess={() => onOpenChange(false)} />

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500 mb-3">Prefer to talk?</p>
              <Button asChild variant="outline" className="w-full gap-2 text-blue-700 hover:text-blue-800 hover:bg-blue-50 border-blue-200">
                <a href="tel:02034888344" aria-label="Call us at 020 3488 8344">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>Call us: 020 3488 8344</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
