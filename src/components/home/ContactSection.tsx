
import { CTAButtons } from "../CTAButtons";

interface ContactSectionProps {
  title?: string;
}

export const ContactSection = ({ title = "Get a Free Quote" }: ContactSectionProps) => {
  return (
    <section id="contact-section" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            Request a quote or ask us any questions
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
};
