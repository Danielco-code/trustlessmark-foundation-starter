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
};

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-primary">TrustlessMark</span>
            <p className="text-sm text-muted-foreground max-w-xs">
              An open standard for decentralized verification and attestation.
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
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} TrustlessMark Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
