import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-blue-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch for a free quote or expert advice on your rug cleaning needs.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid py-12 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Opening Hours
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium text-slate-900">8am - 8pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium text-slate-900">9am - 6pm</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium text-slate-900">10am - 4pm</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    <a href="tel:02034888344" className="flex items-start gap-4 group hover:bg-slate-50 p-3 -mx-3 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Phone className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Call Us</p>
                        <p className="text-slate-600 group-hover:text-blue-700 transition-colors">020 3488 8344</p>
                      </div>
                    </a>

                    <a href="mailto:info@londonrugcleaning.co.uk" className="flex items-start gap-4 group hover:bg-slate-50 p-3 -mx-3 rounded-lg transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Mail className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Email Us</p>
                        <p className="text-slate-600 group-hover:text-blue-700 transition-colors break-all">info@londonrugcleaning.co.uk</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 p-3 -mx-3">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Visit Us</p>
                        <p className="text-slate-600">4 Maddison Court<br />145 Great North Way<br />London, NW4 1PW</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl h-full">
                <CardHeader className="p-8 pb-0">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900">Get a Free Quote</CardTitle>
                  <CardDescription className="text-lg mt-2 text-slate-600">
                    Fill out the form below and we'll get back to you with a competitive price for your rug cleaning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
