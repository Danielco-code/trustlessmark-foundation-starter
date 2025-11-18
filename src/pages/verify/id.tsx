import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent } from "@/components/ui/card";
import VerificationBadge from "@/components/VerificationBadge";

interface ProofData {
  [key: string]: any;
}

export default function VerifyPage() {
  const [proof, setProof] = useState<ProofData | null>(null);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Capture the current path (e.g. /verify/genetic-origin/pacamara-genetic-proof)
  const path = window.location.pathname;

  // Normalize to fetch JSON
  const proofPath = path.endsWith(".json") ? path : `${path}.json`;
  const cleanPath = proofPath.replace(/^\/verify/, "/verify");
  const fetchPath = import.meta.env.DEV ? `${cleanPath}` : `${cleanPath}`;

  // Compute AI markdown path
  const aiPath = proofPath.replace(".json", ".md");

  useEffect(() => {
    async function fetchProof() {
      try {
        const res = await fetch(fetchPath);
        if (!res.ok)
          throw new Error(
            `Could not fetch proof (${res.status} ${res.statusText})`
          );

        const json = await res.json();
        setProof(json);
      } catch (err: any) {
        setError(err.message);
      }
    }

    async function fetchAiSummary() {
      try {
        const res = await fetch(aiPath, { cache: "no-store" });
        if (!res.ok) return;

        const text = await res.text();

        // 🧠 Detect if AdGuard or proxy injected HTML
        if (text.trimStart().toLowerCase().startsWith("<!doctype")) {
          console.warn(
            "[TrustlessMark] AI summary fetch blocked or replaced by HTML. Ignoring content."
          );
          return;
        }

        // ✅ Only accept valid markdown
        if (/^title:/m.test(text) || /# /m.test(text) || /\*\*/m.test(text)) {
          setAiSummary(text);
        } else {
          console.warn(
            "[TrustlessMark] AI summary doesn't appear to be valid markdown."
          );
        }
      } catch (err) {
        console.error("[TrustlessMark] Failed to fetch AI summary:", err);
      }
    }

    fetchProof();
    fetchAiSummary();
  }, [fetchPath, aiPath]);

  if (error) {
    return (
      <div className="p-8 text-red-600 font-semibold">
        ❌ Verification Error
        <br />
        <span className="text-sm text-gray-600">{error}</span>
      </div>
    );
  }

  if (!proof) {
    return (
      <div className="p-8 text-gray-500">Loading verification data...</div>
    );
  }

  // --- ✅ Clean, collapsible layout (summary first) ---
  return (
    <div className="max-w-4xl mx-auto py-10">
      <Card className="shadow-lg border-copper-400">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-3 text-copper-700">
            🔒 TrustlessMark Verification
          <VerificationBadge />
          </h1>

          {aiSummary && (
    <div className="mb-6 border-b border-copper-300 pb-6">
    <h2 className="text-lg font-semibold text-copper-700 mb-3">
      🧠 What This Means
    </h2>
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {aiSummary}
      </ReactMarkdown>
    </div>
  </div>
)}


          <details className="mt-4">
            <summary className="cursor-pointer text-copper-700 font-semibold hover:text-copper-500 transition">
              View Full Verification JSON
            </summary>
            <pre className="bg-gray-50 text-sm p-4 rounded-lg overflow-x-auto text-gray-800 mt-2">
              {JSON.stringify(proof, null, 2)}
            </pre>
          </details>
        </CardContent>
      </Card>
    </div>
  );
}

