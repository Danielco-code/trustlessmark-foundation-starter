import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Database, Code, Link2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 border-b">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Verification Works</h1>
            <p className="text-xl text-muted-foreground mb-8">
              From laboratory data to public proof.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Each verified product generates a structured data proof — a JSON‑LD record containing laboratory results, origin metadata, and certification details. This record is hashed and timestamped on the TrustlessMark Ledger. When a consumer scans a code, the verification engine checks the hash against the ledger to confirm authenticity.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Technical Specification
            </Button>
          </div>
        </section>

        {/* Technical Components */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-border bg-card">
                <Lock className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Cryptographic Signatures</h3>
                <p className="text-muted-foreground mb-4">
                  All certification data is signed using EIP-712 structured data signatures, ensuring tamper-proof records.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Secp256k1 elliptic curve cryptography</li>
                  <li>Ethereum-compatible wallet signatures</li>
                  <li>Verifiable by anyone with the public key</li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Database className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">On-Chain Anchoring</h3>
                <p className="text-muted-foreground mb-4">
                  Proof hashes are timestamped on public blockchains for immutable verification history.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Multi-chain support (Ethereum, Polygon, Base)</li>
                  <li>Merkle tree batching for efficiency</li>
                  <li>Permanent, decentralized audit trail</li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Code className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">JSON-LD Data Format</h3>
                <p className="text-muted-foreground mb-4">
                  Structured certification data uses JSON-LD for semantic interoperability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Schema.org vocabulary</li>
                  <li>Machine-readable and human-readable</li>
                  <li>Extensible for industry-specific metadata</li>
                </ul>
              </Card>

              <Card className="p-6 border-border bg-card">
                <Link2 className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Decentralized Identifiers</h3>
                <p className="text-muted-foreground mb-4">
                  Laboratories and issuers are identified using W3C DID standard.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Self-sovereign identity management</li>
                  <li>No central authority required</li>
                  <li>Cryptographically verifiable credentials</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 px-4 border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Standards Compliance</h2>
            <div className="space-y-6">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-lg font-semibold mb-2">W3C Verifiable Credentials</h3>
                <p className="text-muted-foreground">
                  Our certification format follows the W3C Verifiable Credentials Data Model for standardized, machine-verifiable claims.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-lg font-semibold mb-2">Decentralized Identifiers (DIDs)</h3>
                <p className="text-muted-foreground">
                  Laboratory and issuer identities use the W3C DID specification for self-sovereign, cryptographically secure identity.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-lg font-semibold mb-2">EIP-712 Typed Data</h3>
                <p className="text-muted-foreground">
                  Ethereum Improvement Proposal 712 ensures human-readable and secure message signing for all certification data.
                </p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <h3 className="text-lg font-semibold mb-2">Schema.org Vocabulary</h3>
                <p className="text-muted-foreground">
                  Product and certification metadata uses Schema.org standards for maximum interoperability across systems.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Verification Flow */}
        <section className="py-16 px-4 bg-surface border-t">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Verification Workflow</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Consumer Scans QR Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Product packaging includes a TrustlessMark QR code linking to the certificate ID.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Verification Engine Retrieves Proof</h3>
                  <p className="text-sm text-muted-foreground">
                    The system fetches the JSON-LD proof data and cryptographic signature.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hash Validation</h3>
                  <p className="text-sm text-muted-foreground">
                    The proof hash is checked against the timestamp recorded on the TrustlessMark Ledger.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Result Display</h3>
                  <p className="text-sm text-muted-foreground">
                    Consumer receives verification status, laboratory details, and certification metadata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;
