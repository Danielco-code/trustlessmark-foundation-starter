import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Lock, GitBranch } from "lucide-react";

const techSpecs = [
  {
    icon: Lock,
    title: "Cryptographic Signatures",
    description: "Uses Ed25519 and secp256k1 elliptic curve signatures for attestation signing and verification.",
  },
  {
    icon: Database,
    title: "On-Chain Anchoring",
    description: "Attestations are cryptographically anchored on multiple blockchain networks for immutable verification.",
  },
  {
    icon: Code,
    title: "JSON-LD Format",
    description: "Credentials follow W3C Verifiable Credentials data model with standardized JSON-LD schemas.",
  },
  {
    icon: GitBranch,
    title: "Multi-Chain Support",
    description: "Compatible with Ethereum, Polygon, Arbitrum, and other EVM-compatible networks.",
  },
];

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Technology
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TrustlessMark leverages battle-tested cryptographic primitives and open blockchain 
              infrastructure to enable verifiable, tamper-proof attestations.
            </p>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {techSpecs.map((spec) => (
                <Card key={spec.title}>
                  <CardHeader>
                    <spec.icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{spec.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Architecture Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Attestation Lifecycle</h3>
              <ol className="space-y-3">
                <li>
                  <strong className="text-foreground">Issuance:</strong> An accredited issuer creates a verifiable credential 
                  containing claims about a subject, signs it with their private key.
                </li>
                <li>
                  <strong className="text-foreground">Anchoring:</strong> The credential hash is committed to one or more 
                  blockchain networks via smart contract.
                </li>
                <li>
                  <strong className="text-foreground">Distribution:</strong> The credential is provided to the holder, who 
                  can store it in a digital wallet or decentralized storage.
                </li>
                <li>
                  <strong className="text-foreground">Verification:</strong> Any relying party can verify the credential by 
                  checking the signature and on-chain anchor.
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Security Model</h3>
              <p className="mb-4">
                TrustlessMark security relies on public-key cryptography and blockchain immutability. 
                Each issuer maintains a public DID (Decentralized Identifier) that maps to their verification keys.
              </p>
              <p>
                Credentials are signed with the issuer's private key and can be verified by anyone using the 
                public key. The on-chain anchor provides a timestamped, tamper-evident record of issuance.
              </p>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Standards Compliance</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>W3C Verifiable Credentials</CardTitle>
                  <CardDescription>
                    Full compatibility with the W3C Verifiable Credentials Data Model 1.1 specification
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Decentralized Identifiers (DIDs)</CardTitle>
                  <CardDescription>
                    Support for did:ethr, did:web, and other DID methods for issuer identification
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>EIP-712 Typed Signatures</CardTitle>
                  <CardDescription>
                    Ethereum structured data signing for enhanced security and user clarity
                  </CardDescription>
                </CardHeader>
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
