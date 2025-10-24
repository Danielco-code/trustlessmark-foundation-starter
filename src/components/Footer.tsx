import { Link } from "react-router-dom";

const footerNavigation = {
  about: [
    { name: "About Us", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Accreditation", href: "/accreditation" },
  ],
  resources: [
    { name: "Resources", href: "/resources" },
    { name: "Verify", href: "/verify" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-primary">TrustlessMark</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Public proof for the physical world
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@trustlessmark.org" className="hover:text-primary transition-colors">
                hello@trustlessmark.org
              </a>
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6">About</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6">Resources</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6">Legal</h3>
              <ul role="list" className="mt-4 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/20 pt-8">
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} TrustlessMark Foundation
            </p>
            <p className="text-xs text-muted-foreground">
              Open Certification Protocol (OCP-v1)
            </p>
            <p className="text-xs text-muted-foreground">
              <a 
                href="https://verify.trustlessmark.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Verification Registry → verify.trustlessmark.org
              </a>
            </p>
            <p className="text-xs text-muted-foreground opacity-70">
              Hosted via Cloudflare Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
