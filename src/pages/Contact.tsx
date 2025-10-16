import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Users } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { z } from "zod";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(100, "Organization name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

const contactInfo = {
  email: "hello@trustlessmark.org",
  address: {
    name: "TrustlessMark Foundation",
    street: "13101 Preston Rd. #110534",
    city: "Dallas, TX 75240",
  },
};

const Contact = () => {
  const { toast } = useToast();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Formspree endpoint - replace with your actual Formspree form ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
  // reCAPTCHA site key - to be provided by user
  const RECAPTCHA_SITE_KEY = "YOUR_RECAPTCHA_SITE_KEY";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    try {
      contactFormSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form fields and try again.",
          variant: "destructive",
        });
        return;
      }
    }

    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": recaptchaValue,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", organization: "", message: "" });
        recaptchaRef.current?.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20 border-b">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Connect With the Foundation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For membership, accreditation, or media inquiries, please reach out to our team.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-border bg-card">
                <CardHeader>
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg text-primary hover:underline font-medium"
                  >
                    {contactInfo.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Mailing Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">{contactInfo.address.name}</p>
                    <p>{contactInfo.address.street}</p>
                    <p>{contactInfo.address.city}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-border bg-card">
                <CardHeader>
                  <MessageSquare className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Send Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          maxLength={255}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        maxLength={100}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className={errors.organization ? "border-destructive" : ""}
                      />
                      {errors.organization && (
                        <p className="text-sm text-destructive">{errors.organization}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        maxLength={2000}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>
                    
                    {/* reCAPTCHA */}
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
