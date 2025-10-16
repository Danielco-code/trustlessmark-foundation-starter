import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, Book, Download } from "lucide-react";

const documentationSections = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Introduction to TrustlessMark concepts and quick start tutorials",
    link: "#",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation for developers and integrators",
    link: "#",
  },
  {
    icon: FileText,
    title: "Technical Specification",
    description: "Detailed specification of the TrustlessMark standard and protocols",
    link: "#",
  },
  {
    icon: Download,
    title: "Reference Implementation",
    description: "Open-source reference implementation and SDK libraries",
    link: "#",
  },
];

const useCases = [
  {
    title: "Academic Credentials",
    description: "Universities and educational institutions issuing verifiable degrees and certificates.",
  },
  {
    title: "Professional Certifications",
    description: "Industry bodies and professional organizations certifying skills and qualifications.",
  },
  {
    title: "Supply Chain Verification",
    description: "Manufacturers and suppliers attesting to product authenticity and provenance.",
  },
  {
    title: "Identity Verification",
    description: "Know Your Customer (KYC) and identity attestations for Web3 services.",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Documentation, tools, and resources for developers, implementers, and organizations 
              working with the TrustlessMark standard.
            </p>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Documentation</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {documentationSections.map((doc) => (
                <Card key={doc.title} className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <doc.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{doc.description}</CardDescription>
                    <Button variant="outline" size="sm">
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Use Cases</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              TrustlessMark is being used across diverse industries to enable verifiable credentials 
              and attestations
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Developer Resources</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Repository</CardTitle>
                  <CardDescription>
                    Access our open-source reference implementations, tools, and libraries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">
                    <Code className="mr-2 h-4 w-4" />
                    Visit GitHub
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Developer Community</CardTitle>
                  <CardDescription>
                    Join our Discord and forum to connect with other developers and get support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Join Community</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testnet Sandbox</CardTitle>
                  <CardDescription>
                    Experiment with TrustlessMark on our testnet environment before deploying to production
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
