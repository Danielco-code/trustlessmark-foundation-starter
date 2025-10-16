import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Shield, AlertCircle } from "lucide-react";
import { useState } from "react";

const Verify = () => {
  const [credentialId, setCredentialId] = useState("");
  const [verificationResult, setVerificationResult] = useState<null | "success" | "error">(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a placeholder - in a real implementation, this would call a verification API
    if (credentialId.length > 10) {
      setVerificationResult("success");
    } else {
      setVerificationResult("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20 border-b">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Check a Certificate
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Scan a code or enter a verification ID.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Form */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <p className="text-center text-foreground/80 mb-8">
              Enter a TrustlessMark certificate ID or scan the QR code printed on your product package. You'll receive a live verification result confirming the authenticity, lab issuer, and verification status of that batch.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Verify Now</CardTitle>
                <CardDescription>
                  Enter the certificate ID from your product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVerify} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="credential-id">TrustlessMark Certificate ID</Label>
                    <Input
                      id="credential-id"
                      type="text"
                      placeholder="TM-2025-XXXXXX"
                      value={credentialId}
                      onChange={(e) => setCredentialId(e.target.value)}
                      className="font-mono text-sm"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Search className="mr-2 h-5 w-5" />
                    Verify Credential
                  </Button>
                </form>

                {verificationResult === "success" && (
                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-900 dark:text-green-100">Valid Credential</h3>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          This credential was issued by an accredited TrustlessMark issuer and has been 
                          cryptographically verified on-chain.
                        </p>
                        <div className="mt-3 text-sm text-green-700 dark:text-green-300">
                          <p><strong>Issuer:</strong> Example Organization (did:ethr:0x1234...)</p>
                          <p><strong>Issued:</strong> January 15, 2025</p>
                          <p><strong>Status:</strong> Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {verificationResult === "error" && (
                  <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-red-900 dark:text-red-100">Verification Failed</h3>
                        <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                          This credential could not be verified. It may be invalid, revoked, or not yet 
                          registered on the network.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How Verification Works */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">How Verification Works</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                TrustlessMark verification is a multi-step cryptographic process that ensures the 
                authenticity and integrity of credentials:
              </p>
              <ol className="space-y-3">
                <li>
                  <strong className="text-foreground">Signature Verification:</strong> The credential's 
                  digital signature is validated against the issuer's public key.
                </li>
                <li>
                  <strong className="text-foreground">On-Chain Anchor Check:</strong> The credential hash 
                  is verified against the blockchain record to confirm it hasn't been tampered with.
                </li>
                <li>
                  <strong className="text-foreground">Issuer Status:</strong> The issuer's accreditation 
                  status is checked in the TrustlessMark registry.
                </li>
                <li>
                  <strong className="text-foreground">Revocation Check:</strong> The credential is verified 
                  against revocation lists to ensure it's still valid.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;
