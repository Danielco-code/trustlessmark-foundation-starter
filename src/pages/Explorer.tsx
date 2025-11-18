import { useEffect, useState } from "react";
import { ProofCard } from "@/components/ProofCard";

interface Discovery {
  entities: {
    code: string;
    name: string;
    categories: {
      type: string;
      products: {
        code: string;
        claim_type: string;
        verification_url: string;
        verifier?: string;
        integrity?: { hash: string };
      }[];
    }[];
  }[];
}

export default function Explorer() {
  const [data, setData] = useState<Discovery | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetch("https://verify.trustlessmark.org/.well-known/trustlessmark.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching discovery:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8 text-center">Loading proofs...</div>;
  if (!data) return <div className="p-8 text-center">No proofs found.</div>;

  // collect unique claim types for filter menu
  const claimTypes = Array.from(
    new Set(
      data.entities.flatMap((e) =>
        e.categories.flatMap((c) => c.products.map((p) => p.claim_type))
      )
    )
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">TrustlessMark Proof Explorer</h1>
      <p className="mb-6 text-gray-700 max-w-2xl">
        Explore verified claims registered on the TrustlessMark Foundation ledger.
        Filter by claim type or validate any proof locally in your browser.
      </p>

      <div className="mb-8">
        <label className="mr-3 text-sm font-medium text-gray-700">Filter by Claim Type:</label>
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          {claimTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.entities.flatMap((entity) =>
          entity.categories.flatMap((cat) =>
            cat.products
              .filter((p) => filter === "all" || p.claim_type === filter)
              .map((prod) => (
                <ProofCard
                  key={`${entity.code}-${prod.code}-${prod.claim_type}`}
                  brand={prod.code}
                  claim={prod.claim_type}
                  verifier={entity.name}
                  verificationUrl={prod.verification_url}
                  expectedHash={prod.integrity?.hash}
                />
              ))
          )
        )}
      </div>
    </div>
  );
}

