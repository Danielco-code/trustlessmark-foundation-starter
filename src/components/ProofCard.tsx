import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, QrCode, ShieldCheck } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

export interface ProofCardProps {
  brand: string;
  claim: string;
  verifier: string;
  verificationUrl: string;
  certificateUrl?: string;
  expectedHash?: string;
}

export const ProofCard = ({
  brand,
  claim,
  verifier,
  verificationUrl,
  certificateUrl,
  expectedHash,
}: ProofCardProps) => {
  const [showQR, setShowQR] = useState(false);
  const [verifyResult, setVerifyResult] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);

  async function validateProof() {
    setVerifying(true);
    try {
      const res = await fetch(verificationUrl);
      const text = await res.text();
      const buf = new TextEncoder().encode(text);
      const hashBuffer = await crypto.subtle.digest("SHA3-256", buf).catch(async () => {
        // fallback to SHA-256 if browser doesn't support SHA3
        return crypto.subtle.digest("SHA-256", buf);
      });
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

      if (expectedHash && hashHex === expectedHash) {
        setVerifyResult("✅ Verified: hash matches discovery record");
      } else if (expectedHash) {
        setVerifyResult(`❌ Mismatch! Expected ${expectedHash.slice(0,8)}..., got ${hashHex.slice(0,8)}...`);
      } else {
        setVerifyResult(`ℹ️ Calculated hash: ${hashHex}`);
      }
    } catch (err) {
      setVerifyResult("⚠️ Error validating proof");
      console.error(err);
    } finally {
      setVerifying(false);
    }
  }

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {brand}
          <BadgeCheck className="text-green-600" />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-gray-700">
          <strong>Claim:</strong> {claim}
        </p>
        <p className="text-sm text-gray-700 mb-3">
          <strong>Verified by:</strong> {verifier}
        </p>

        <div className="flex flex-wrap gap-3 mb-3">
          <button
            onClick={() => setShowQR(!showQR)}
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 flex items-center gap-1"
          >
            <QrCode size={16} /> QR Code
          </button>
          <button
            onClick={validateProof}
            disabled={verifying}
            className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 flex items-center gap-1"
          >
            <ShieldCheck size={16} /> {verifying ? "Validating..." : "Validate Proof"}
          </button>
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            View JSON
          </a>
          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Certificate
            </a>
          )}
        </div>

        {showQR && (
          <div className="flex justify-center my-3">
            <QRCodeCanvas value={verificationUrl} size={100} />
          </div>
        )}

        {verifyResult && (
          <p className="mt-2 text-sm font-medium text-gray-800">{verifyResult}</p>
        )}
      </CardContent>
    </Card>
  );
};

