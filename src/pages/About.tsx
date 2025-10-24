import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Globe, BookOpen, Scale } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 border-b animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who we are</h1>
            <p className="text-xl text-muted-foreground mb-8">
              TrustlessMark Foundation makes claims checkable.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-8 border-l-4 border-l-primary">
              <h2 className="text-2xl font-bold mb-4">Who we are</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                TrustlessMark Foundation is an independent standards initiative.
                We publish signed proofs of physical-world claims — from 'USDA Organic' to 'PFAS-Free Fabric' to 'Low PUFA Eggs.'
                Our goal is simple: eliminate unverifiable marketing fluff.
              </p>
            </Card>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Why now</h2>
            <p className="text-lg leading-relaxed text-foreground/80">
              We're watching shoppers demand radical honesty.
              We're watching retailers demand supplier proof.
              We're watching regulators ask for traceability.
              And we're watching AI systems scrape claims and repeat them as fact.
              We believe claimed reality should match physical reality — and be publicly checkable.
            </p>
          </div>
        </section>

        {/* How We Operate */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">How we operate</h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              We maintain open JSON schemas for each category — coffee, food, textiles.
              We cryptographically sign and timestamp submitted claims.
              We publish them to a public registry at verify.trustlessmark.org.
              We don't sell 'trust.' We make proof public.
            </p>
            <Card className="p-6 bg-cream border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-3">Governance</h3>
              <p className="text-foreground/80">
                Published under the Open Certification Protocol (OCP-v1).
                Annual renewal of proofs prevents stale or abandoned claims.
                Change control is logged and auditable.
              </p>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center border-border bg-card">
                <Scale className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Independence</h3>
                <p className="text-sm text-muted-foreground">
                  We operate as a neutral, nonprofit standards body free from commercial influence.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Open Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Our protocol is open-source and publicly documented for universal access.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Decentralization</h3>
                <p className="text-sm text-muted-foreground">
                  No single entity controls the verification infrastructure or data.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Multi-Stakeholder</h3>
                <p className="text-sm text-muted-foreground">
                  Governance includes labs, retailers, technologists, and consumer advocates.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Governance Structure</h2>
            <div className="space-y-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Founding Council</h3>
                <p className="text-muted-foreground">
                  A multi-stakeholder board representing laboratory science, digital commerce, blockchain technology, and consumer advocacy. The Council guides strategic direction and maintains protocol integrity.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Technical Committee</h3>
                <p className="text-muted-foreground">
                  Engineers and cryptographers responsible for protocol development, security audits, and technical standards maintenance.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Accreditation Board</h3>
                <p className="text-muted-foreground">
                  Reviews and approves laboratories and verification partners seeking to issue TrustlessMark certifications.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                TrustlessMark began as the Open Coffee Proof project in 2024, a grassroots initiative to bring laboratory-verified transparency to specialty coffee. The project demonstrated that cryptographic verification could make product claims measurable and accountable.
              </p>
              <p className="leading-relaxed">
                In 2025, the project evolved into the TrustlessMark Foundation to expand the framework beyond coffee into broader food, beverage, and consumer goods categories. The Foundation now serves as the neutral custodian of the open standard.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
