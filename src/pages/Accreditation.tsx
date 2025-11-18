import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const requirements = [
  "Demonstrated technical capability to issue and manage cryptographic credentials",
  "Compliance with data protection and privacy regulations (GDPR, CCPA, etc.)",
  "Transparent governance and operational policies",
  "Financial stability and insurance coverage for liability",
  "Participation in TrustlessMark Foundation governance (for institutional members)",
];

const process = [
  {
    step: "1",
    title: "Application",
    description: "Submit your accreditation application with required documentation and technical specifications.",
  },
  {
    step: "2",
    title: "Technical Review",
    description: "Our technical committee evaluates your implementation and security practices.",
  },
  {
    step: "3",
    title: "Compliance Audit",
    description: "Independent audit of your operational and legal compliance frameworks.",
  },
  {
    step: "4",
    title: "Approval & Onboarding",
    description: "Upon approval, receive your issuer credentials and access to the network.",
  },
];

const Accreditation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20 border-b animate-fade-in">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Become an accredited issuer
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For labs, auditors, certifiers, and qualified brands.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="border-l-4 border-l-primary pl-6 mb-8">
              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                We work with labs, auditors, certifiers, and qualified brands to publish verifiable claims into the TrustlessMark registry.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Food labs offering nutrient density and PUFA testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Textile labs offering PFAS-free / organic cotton verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Coffee roasters documenting USDA Organic / Fair Trade / Rainforest Alliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regenerative / soil-carbon audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ownership / identity proofs (e.g. Texas Veteran-Owned Business)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-cream border-t">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Requirements</h2>
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>Eligibility</CardTitle>
                <CardDescription>
                  Organizations must meet the following to become accredited issuers:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-background border-t">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">The Process</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {process.map((item) => (
                <Card key={item.step} className="hover-scale transition-all hover:shadow-lg hover:border-primary/30">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                We are building a public standard. We take accuracy seriously and we're here to help you ship real proof, not marketing spin.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Request Accreditation Packet</h2>
            <p className="text-lg mb-8 opacity-90">
              Get started with TrustlessMark verification
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accreditation;

