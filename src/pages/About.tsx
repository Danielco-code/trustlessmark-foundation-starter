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
              TrustlessMark Foundation exists to make real-world product claims publicly checkable.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <Card className="p-8 border-l-4 border-l-primary">
              <h2 className="text-2xl font-bold mb-4">Who we are</h2>
              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                TrustlessMark Foundation is an independent standards initiative focused on
                verifiable product integrity. We publish signed proofs of physical-world claims —
                from “PFAS-free coffee packaging” to “pesticide-free lots” — so that anyone can
                examine the evidence behind a claim instead of taking it on faith.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                We are early and intentionally small. The project is being developed by founders
                with backgrounds in technology, specialty coffee, and ethics-driven brand building.
                Our goal is simple: reduce unverifiable marketing and increase transparent,
                testable truth.
              </p>
            </Card>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Why now</h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              Shoppers are asking tougher questions. Retailers are demanding supplier proof.
              Regulators are looking for traceability. At the same time, AI systems scrape product
              pages and repeat claims as if they were facts.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              We believe that what a label claims should match what the lab can prove — and that
              those proofs should be easy for humans and machines to inspect. TrustlessMark exists
              to make that proof layer open, durable, and independent.
            </p>
          </div>
        </section>

        {/* How We Operate */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">How we operate</h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              We maintain open JSON schemas for each category — beginning with specialty coffee and
              related products. We cryptographically sign and timestamp submitted claims, then
              publish them to a public registry that can be queried by people, apps, and
              verification tools.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              We do not ask anyone to “trust” us as an authority. Instead, we make the underlying
              evidence visible: which lab, which test, which lot, which date, which threshold.
            </p>
            <Card className="p-6 bg-cream border-l-4 border-l-primary">
              <h3 className="text-xl font-semibold mb-3">Governance (early stage)</h3>
              <p className="text-foreground/80 mb-3">
                Today, the project is governed by a small founding group who maintain the schemas,
                registries, and signing tools. As the protocol matures, governance is intended to
                expand to include independent laboratories, technical contributors, and
                consumer-protection voices.
              </p>
              <p className="text-foreground/80">
                All changes to schemas and proofs are versioned and auditable. Our long-term aim is
                a governance model that is transparent, documented, and open to external review.
              </p>
            </Card>
          </div>
        </section>

        {/* What We Do vs. What We Don’t */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">What we do — and what we don’t</h2>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                <span className="font-semibold">We do:</span> publish structured, signed proofs of
                product-integrity claims (for example, “this lot was tested for PFAS by lab X on
                date Y, using method Z, with result R”).
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">We do:</span> design open schemas so that multiple
                brands, labs, and tools can interoperate on neutral ground.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">We do not:</span> provide legal services,
                trademark-registration services, or “official certificates” for trademarks or
                business registrations.
              </p>
              <p className="leading-relaxed">
                <span className="font-semibold">We do not:</span> request or store sensitive
                financial information, crypto private keys, or customer payment data.
              </p>
              <p className="leading-relaxed">
                TrustlessMark is about verifiable product claims, not about legal filings or
                trademark paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center border-border bg-card">
                <Scale className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Independence</h3>
                <p className="text-sm text-muted-foreground">
                  We operate as an independent standards initiative, not as a house brand or
                  marketing department.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Open Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Our schemas and protocols are published openly so they can be implemented,
                  critiqued, or extended by others.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Verifiability</h3>
                <p className="text-sm text-muted-foreground">
                  Claims should be backed by evidence that can be checked by humans, machines, and
                  independent third parties.
                </p>
              </Card>

              <Card className="p-6 text-center border-border bg-card">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Multi-Stakeholder</h3>
                <p className="text-sm text-muted-foreground">
                  Over time, governance is intended to include labs, brands, technologists, and
                  consumer advocates — not just one voice.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8">Our origins</h2>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                TrustlessMark began as an “Open Coffee Proof” experiment: could we tie laboratory
                test results for specialty coffee directly to the packaging that shoppers scan in
                the grocery aisle?
              </p>
              <p className="leading-relaxed">
                That experiment showed us something important: once you can reliably connect a
                physical lot to a digital proof, you can start to reduce confusion and increase
                accountability. From there, the project expanded into a broader framework for
                food-adjacent and consumer-goods claims.
              </p>
              <p className="leading-relaxed">
                The work is ongoing, and the system is still evolving — but the north star is
                stable: make product claims measurable, auditable, and publicly inspectable.
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
