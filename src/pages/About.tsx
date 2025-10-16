import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Open Standards",
    description: "TrustlessMark is built on open, transparent specifications governed by the community.",
  },
  {
    title: "Decentralization",
    description: "No single authority controls the network. Trust is distributed across the ecosystem.",
  },
  {
    title: "Interoperability",
    description: "Works seamlessly across different blockchain networks and verification systems.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              About TrustlessMark
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The TrustlessMark Foundation is a public non-profit organization dedicated to advancing 
              open standards for decentralized verification and digital attestation.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                In an increasingly digital world, the need for trusted, verifiable credentials has never been greater. 
                Traditional verification systems rely on centralized authorities, creating single points of failure 
                and limiting accessibility.
              </p>
              <p className="mb-4">
                TrustlessMark provides an alternative: a cryptographically secure, decentralized standard for 
                attestations that anyone can verify independently. By anchoring credentials on-chain and using 
                open cryptographic protocols, we enable trustless verification at scale.
              </p>
              <p>
                Our mission is to make digital trust accessible, transparent, and interoperable across the 
                entire Web3 ecosystem and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Governance</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                The TrustlessMark Foundation operates as a member-based organization. Technical standards 
                are developed collaboratively through working groups composed of industry experts, 
                developers, and institutional stakeholders.
              </p>
              <p>
                All specifications and reference implementations are published under open-source licenses, 
                ensuring transparency and community participation in the evolution of the standard.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
