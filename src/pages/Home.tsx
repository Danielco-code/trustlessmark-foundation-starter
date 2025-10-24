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
        <section className="py-20 px-4 text-center border-b animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Public proof for the physical world.
            </h1>
            <p className="text-xl text-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              TrustlessMark is an open verification protocol for honest product claims.
              We publish cryptographically signed proof files — like 'USDA Organic,' 'Low PUFA Eggs,' or 'PFAS-Free Fabric' — so anyone can verify them instantly.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://verify.trustlessmark.org/" target="_blank" rel="noopener noreferrer">
                  Explore the Live Registry
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 px-4 bg-surface">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">🧪</div>
                <h3 className="text-xl font-semibold mb-3">Lab Result / Certification</h3>
                <p className="text-muted-foreground">
                  A lab, auditor, or certification body issues a claim, like 'Glyphosate-Free' or 'Texas Veteran-Owned Business.'
                </p>
              </Card>

              <Card className="p-8 text-center border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold mb-3">Cryptographic Proof</h3>
                <p className="text-muted-foreground">
                  That claim becomes a signed .json + .sig pair under the TrustlessMark Open Certification Protocol (OCP-v1).
                </p>
              </Card>

              <Card className="p-8 text-center border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Public Registry</h3>
                <p className="text-muted-foreground">
                  We host those proof files at verify.trustlessmark.org, where anyone — customers, buyers, inspectors, search engines — can inspect them.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-4xl">
            <Card className="p-8 bg-cream border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-4">Why this matters</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Consumers shouldn't have to 'just trust the label.'
                Retail buyers shouldn't have to guess.
                TrustlessMark makes claims checkable — instantly, by anyone — without calling the brand first.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-3xl text-center">
            <FileCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Want your claims published?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you're a lab, roaster, farm co-op, apparel brand, or regenerative producer, we'll help you issue verifiable claims in under an hour.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/accreditation">Apply for Accreditation</Link>
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
