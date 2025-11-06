import React, { useEffect, useState } from "react";

interface RegistryData {
  product_id: string;
  product_name: string;
  claims: Record<string, boolean>;
}

export default function VerificationBadge() {
  const [registry, setRegistry] = useState<RegistryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRegistry() {
      try {
        const res = await fetch("/verify/product/proof-registry.json");
        if (!res.ok) throw new Error(`Failed to load registry: ${res.statusText}`);
        const json = await res.json();
        setRegistry(json);
      } catch (err: any) {
        setError(err.message);
      }
    }
    loadRegistry();
  }, []);

  if (error)
    return <div className="text-red-600 text-sm font-semibold">❌ {error}</div>;

  if (!registry)
    return <div className="text-gray-500 text-sm">Loading verification registry...</div>;

  const claims = registry.claims || {};
  const totalClaims = Object.keys(claims).length;
  const verifiedCount = Object.values(claims).filter(Boolean).length;
  const allVerified = verifiedCount === totalClaims;

  const pendingClaims = Object.entries(claims)
    .filter(([_, verified]) => !verified)
    .map(([claim]) => claim);

  return (
    <div className="my-4">
      {allVerified ? (
        <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-green-50 text-green-700 border border-green-200">
          ✅ All {totalClaims} Claims Verified
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200">
          ⚠️ Partial Verification — {verifiedCount} of {totalClaims} claims verified
        </div>
      )}

      {!allVerified && (
        <ul className="mt-2 text-sm text-gray-600 list-disc ml-5">
          {pendingClaims.map((claim) => (
            <li key={claim}>Pending or Unverified: {claim}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
