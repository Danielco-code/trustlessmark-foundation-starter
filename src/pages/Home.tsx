import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, CheckCircle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center border-b">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Verifiable Integrity for Honest Products.
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Every claim should be provable.
            </p>
            <p className="text-lg text-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              TrustlessMark is an independent global framework for proving product authenticity, purity, and ethical sourcing. Every verified product carries a digital signature linking it to laboratory‑tested data stored on the TrustlessMark ledger. Our mission is simple: make truth measurable.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about">Read the Charter</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Join the Foundation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-surface">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-border bg-card">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Laboratory Verified</h3>
                <p className="text-muted-foreground">
                  Every certification is backed by independent laboratory testing and analysis.
                </p>
              </Card>

              <Card className="p-8 text-center border-border bg-card">
                <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Cryptographically Secured</h3>
                <p className="text-muted-foreground">
                  Data proofs are hashed and timestamped on the TrustlessMark Ledger for immutable verification.
                </p>
              </Card>

              <Card className="p-8 text-center border-border bg-card">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Publicly Verifiable</h3>
                <p className="text-muted-foreground">
                  Consumers can verify any product claim instantly using simple QR codes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Laboratory Testing</h3>
                  <p className="text-muted-foreground">
                    Accredited laboratories test products for purity, authenticity, and quality metrics.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Proof Creation</h3>
                  <p className="text-muted-foreground">
                    Test results are converted into structured JSON-LD records and cryptographically signed.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ledger Anchoring</h3>
                  <p className="text-muted-foreground">
                    Proof hashes are timestamped on the TrustlessMark Ledger for permanent verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consumer Verification</h3>
                  <p className="text-muted-foreground">
                    Anyone can verify product claims by scanning QR codes or entering certificate IDs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl text-center">
            <FileCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join laboratories, retailers, and verification partners in the TrustlessMark network.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/accreditation">Apply for Accreditation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/verify">Verify a Product</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
