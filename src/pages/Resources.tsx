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
        <section className="py-20 px-4 border-b animate-fade-in">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Documentation, schemas, and developer tools
            </p>
          </div>
        </section>

        {/* Foundation Documents */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6">Foundation Documents</h2>
            <p className="text-foreground/80 mb-8">
              Key documents describing the TrustlessMark Foundation's mission, governance, and technical architecture.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <FileText className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>TrustlessMark Proof Deployment Dossier</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    FCC Certification Framework v1
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <FileText className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Cloudflare Deployment Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Version 1 deployment guide
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <FileText className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Quick Reference Sheet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Essential information at a glance
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Schemas */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Schemas</h2>
            <p className="text-foreground/80 mb-8">
              OCP-Food v1 defines how to represent food claims like 'Low PUFA Eggs', 'Glyphosate-Free', 'Regenerative Farming'.
              OCP-Textile v1 defines how to represent textile claims like 'PFAS-Free Fabric', 'Organic Cotton Certified', and 'Recycled Material %'.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>OCP-Food v1 Schema</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    JSON schema for food and agricultural claims
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://verify.trustlessmark.org/schemas/food/ocp-food-v1.json" target="_blank" rel="noopener noreferrer">
                      View Schema
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>OCP-Textile v1 Schema</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    JSON schema for textile and fabric claims
                  </CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://verify.trustlessmark.org/schemas/textile/ocp-textile-v1.json" target="_blank" rel="noopener noreferrer">
                      View Schema
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">For Developers</h2>
            <Card className="p-6 bg-card mb-6">
              <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
              <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm border">
{`# Discover registry endpoints
curl https://verify.trustlessmark.org/.well-known/ocp.json | jq .

# Fetch a claim
curl https://verify.trustlessmark.org/textiles/certifications/pfas-free-fabric.json`}
              </pre>
            </Card>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>GitHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Open-source code and examples
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    View Repository
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Discord</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Developer community
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    Join Discord
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Code className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>Testnet</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Sandbox environment
                  </CardDescription>
                  <Button variant="outline" size="sm" disabled>
                    Access Testnet
                  </Button>
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

