import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Phone, AlertCircle } from "lucide-react";

interface ContactFormProps {
    className?: string;
    onSuccess?: () => void;
}

export const ContactForm = ({ className, onSuccess }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                let errorMessage = `Server error: ${response.status}`;
                try {
                    const text = await response.text();
                    if (text && text.trim()) {
                        const errorData = JSON.parse(text);
                        errorMessage = errorData.error || errorData.message || errorMessage;
                    }
                } catch (parseError) { }
                throw new Error(errorMessage);
            }

            let data;
            try {
                const text = await response.text();
                data = text ? JSON.parse(text) : {};
            } catch (parseError) {
                throw new Error("Invalid response from server");
            }

            if (data.success) {
                toast({
                    title: "Message Sent Successfully!",
                    description: "We'll get back to you within 24 hours.",
                });
                setFormData({ name: "", email: "", phone: "", message: "" });
                if (onSuccess) onSuccess();
            } else {
                throw new Error(data.message || data.error || "Failed to send message");
            }
        } catch (error) {
            console.error("Submission error:", error);
            const errorMessage = error instanceof Error
                ? error.message
                : "Our email system is currently unavailable. Please call us directly.";
            setError(errorMessage);
            toast({
                title: "Error sending message",
                description: errorMessage,
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={className}>
            {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg flex items-start gap-3">
                    <div className="mt-1"><AlertCircle className="h-4 w-4" /></div>
                    <div>
                        <p className="font-medium">Something went wrong.</p>
                        <p className="text-sm mt-1">{error}</p>
                        <Button asChild variant="link" size="sm" className="h-auto p-0 text-red-700 hover:text-red-800 mt-2">
                            <a href="tel:02034888344" className="flex items-center gap-1">
                                <Phone className="h-3 w-3" /> Call us instead: 020 3488 8344
                            </a>
                        </Button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-10 sm:h-12 bg-white border-slate-200 focus:border-blue-500 transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-10 sm:h-12 bg-white border-slate-200 focus:border-blue-500 transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="07799 123456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-10 sm:h-12 bg-white border-slate-200 focus:border-blue-500 transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                    <Textarea
                        id="message"
                        placeholder="Tell us about your rugs (size, type, condition)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="min-h-[120px] bg-white border-slate-200 focus:border-blue-500 transition-colors resize-none text-base"
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 text-base transition-all duration-300"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                        <span className="flex items-center gap-2">Send Message <CheckCircle2 className="w-5 h-5" /></span>
                    )}
                </Button>
                <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form, you agree to our privacy policy.
                </p>
            </form>
        </div>
    );
};
