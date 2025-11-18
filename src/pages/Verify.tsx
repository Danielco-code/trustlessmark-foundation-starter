import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { QrCode, Search } from "lucide-react";

export default function VerifyLanding() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = input.trim().replace(/^https?:\/\/[^/]+\/verify\//, "");
    if (!trimmed) {
      setError("Please enter a valid proof ID or URL.");
      return;
    }

    navigate(`/verify/${trimmed.replace(/\.json$/, "")}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] px-4">
      <Card className="max-w-lg w-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-xl rounded-2xl p-6">
        <CardContent className="p-0">
          <h1 className="text-3xl font-bold text-[hsl(var(--copper))] mb-3 text-center">
            🔒 Verify a TrustlessMark Proof
          </h1>
          <p className="text-sm text-center text-muted-foreground mb-6">
            Enter a proof ID, paste a link, or scan a QR code to verify authenticity.
          </p>

          <form onSubmit={handleVerify} className="flex flex-col gap-3">
            <Input
              placeholder="e.g. industry-mapping or https://trustlessmark.org/verify/industry-mapping"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-[hsl(var(--border))] focus-visible:ring-[hsl(var(--copper))]"
            />
            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}
            <div className="flex gap-2">
              <Button
                type="submit"
                className="flex-1 bg-[hsl(var(--copper))] text-white hover:opacity-90"
              >
                <Search className="mr-2 h-4 w-4" /> Verify
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2 border-[hsl(var(--border))]"
                onClick={() =>
                  alert("🔜 QR scanning coming soon — connect camera or mobile device.")
                }
              >
                <QrCode className="h-4 w-4" /> Scan
              </Button>
            </div>
          </form>

          <Separator className="my-6" />

          <p className="text-center text-sm text-muted-foreground">
            Powered by <span className="text-[hsl(var(--copper))] font-semibold">TrustlessMark™</span> Foundation
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

