import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, Book } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 border-b">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Publications and Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Technical specs, press releases, and adoption reports.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Access the TrustlessMark Charter, Executive Summary, Press Releases, and annual transparency reports. All documents are available in PDF format for open reference.
            </p>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Available Documents</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <FileText className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Foundation Charter</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    The governing document of the TrustlessMark Foundation, including mission, governance structure, and operating principles.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <Book className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Executive Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    A concise overview of TrustlessMark for stakeholders, media, and potential partners.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Technical Specification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Complete technical documentation of the TrustlessMark Protocol and implementation guidelines.
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Industry Use Cases</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              TrustlessMark is being adopted across diverse product categories
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Specialty Coffee</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Laboratory verification of origin, processing method, and chemical composition for premium coffee products.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Natural Supplements</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Third-party testing and certification of ingredient purity, potency, and absence of contaminants.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Organic Foods</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Verification of organic certification claims and pesticide residue testing results.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ethical Textiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Supply chain transparency and labor practice verification for apparel manufacturers.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Developer Resources</h2>
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>GitHub Repository</CardTitle>
                  <CardDescription>
                    Open-source reference implementations, SDKs, and code examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">
                    <Code className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Developer Community</CardTitle>
                  <CardDescription>
                    Join discussions, get support, and collaborate with other implementers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Join Discord</Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Testnet Environment</CardTitle>
                  <CardDescription>
                    Sandbox environment for testing integrations before production deployment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Access Testnet</Button>
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

export default Resources;
