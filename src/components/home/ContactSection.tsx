
import { CTAButtons } from "../CTAButtons";

interface ContactSectionProps {
  title?: string;
}

export const ContactSection = ({ title = "Ready to Revitalize Your Rugs?" }: ContactSectionProps) => {
  return (
    <section id="contact-section" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots-md"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Book your free collection today and experience the difference of professional rug cleaning.
            We serve all of London with 7-day availability.
          </p>
          <div className="flex justify-center">
            <CTAButtons variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900" />
          </div>
        </div>
      </div>
    </section>
  );
};
