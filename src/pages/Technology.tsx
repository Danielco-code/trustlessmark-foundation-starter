import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 border-b animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How verification works</h1>
            <p className="text-xl text-muted-foreground mb-8">
              From data proof generation to consumer verification
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              The TrustlessMark verification process starts when a lab or auditor generates a data proof. That proof is cryptographically signed and published to the public registry. When a consumer scans the product, they can instantly verify the claim against the signed proof file.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://verify.trustlessmark.org/schemas/" target="_blank" rel="noopener noreferrer">
                Read the Schemas
              </a>
            </Button>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Core Technology</h2>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📜</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Open Certification Protocol (OCP-v1)</h3>
                    <p className="text-foreground/80">
                      Every claim we publish ships as two files: A machine-readable .json manifest (who issued the claim, what was tested, what method was used). A .sig file — a detached digital signature and timestamp. Anyone can download and verify.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Public Registry</h3>
                    <p className="text-foreground/80 mb-3">
                      All proofs live under the TrustlessMark Verification Registry:
                    </p>
                    <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
                      <li>Coffee and roasting claims live under /fcc</li>
                      <li>Food claims (like Low PUFA Eggs, Glyphosate-Free) live under /food</li>
                      <li>Textile claims (like PFAS-Free Fabric, Organic Cotton) live under /textiles</li>
                      <li>Schemas live under /schemas</li>
                    </ul>
                    <p className="text-foreground/80 mt-3">
                      See them live at{" "}
                      <a href="https://verify.trustlessmark.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        verify.trustlessmark.org
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔎</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Structured Data & Search</h3>
                    <p className="text-foreground/80">
                      Brands can link these proof URLs directly into their product pages using JSON-LD. Search engines (and AI systems that crawl product pages) can see not just 'this is organic,' but 'this is organic and here's the third-party proof.'
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🔏</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Why cryptographic signing matters</h3>
                    <p className="text-foreground/80">
                      Screenshots can be faked. PDFs can be altered. TrustlessMark proofs are signed and timestamped. A brand can't quietly move the goalposts later.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;

