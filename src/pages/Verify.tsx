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
        <section className="bg-background py-20 border-b animate-fade-in">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                How to verify a claim
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Check any TrustlessMark product claim yourself
              </p>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Card className="p-8 border-l-4 border-l-primary mb-8">
              <h2 className="text-2xl font-bold mb-6">Verification Steps</h2>
              <ol className="space-y-4 text-foreground/80">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Pick a product-level claim (for example: 'Low PUFA Eggs').</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <div>
                    Open the proof URL for that claim. Example:{" "}
                    <a 
                      href="https://verify.trustlessmark.org/food/certifications/low-pufa-eggs.json" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      https://verify.trustlessmark.org/food/certifications/low-pufa-eggs.json
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Check the issuer. Who ran the test or audit?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Check the method. Was it a lab method, an audit, a sourcing record?</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>Check the .sig. This is the TrustlessMark Foundation signature.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">6.</span>
                  <span>Check the timestamp. Old claims expire annually.</span>
                </li>
              </ol>
            </Card>

            <Card className="p-8 bg-surface">
              <h3 className="text-xl font-semibold mb-4">Quick test from terminal</h3>
              <pre className="bg-card p-4 rounded-lg overflow-x-auto text-sm border">
{`curl -I https://verify.trustlessmark.org/food/certifications/low-pufa-eggs.json
curl https://verify.trustlessmark.org/food/certifications/low-pufa-eggs.json | jq .`}
              </pre>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://verify.trustlessmark.org/" target="_blank" rel="noopener noreferrer">
                  Open the Registry
                </a>
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Anyone in the world can do this.<br />
              No NDAs. No logins. No API keys. Public truth should be public.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;
