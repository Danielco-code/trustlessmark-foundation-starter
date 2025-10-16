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
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Accreditation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Become an authorized issuer in the TrustlessMark network. Our accreditation process 
              ensures that only qualified, trustworthy organizations can issue verified credentials.
            </p>
          </div>
        </section>

        {/* Why Get Accredited */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Why Get Accredited?</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Accredited issuers are recognized members of the TrustlessMark ecosystem with the authority 
                to issue verifiable credentials that are trusted across the network. Benefits include:
              </p>
              <ul className="space-y-2 mb-6">
                <li>Authority to issue cryptographically verifiable attestations</li>
                <li>Recognition by relying parties across the ecosystem</li>
                <li>Access to reference implementations and developer tools</li>
                <li>Participation in governance and standards development</li>
                <li>Listing in the official TrustlessMark registry</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Accreditation Requirements</h2>
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
                <CardDescription>
                  Organizations must meet the following requirements to become accredited issuers:
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
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Accreditation Process</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {process.map((item) => (
                <Card key={item.step}>
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start your accreditation application today
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us to Apply</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accreditation;
