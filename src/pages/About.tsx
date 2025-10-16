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
        <section className="py-20 px-4 border-b">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-muted-foreground mb-8">
              An independent standards body for verifiable transparency.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              The TrustlessMark Foundation is a nonprofit organization that maintains the TrustlessMark Protocol — an open standard for cryptographically verifiable certification data. Founded in 2025, it emerged from the Open Coffee Proof project and now spans food, beverage, and consumer goods industries. The Foundation operates with multi‑stakeholder governance, representing laboratories, retailers, and academic experts.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Download the Charter
            </Button>
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
