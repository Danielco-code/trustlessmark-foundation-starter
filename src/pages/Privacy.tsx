import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20 border-b">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last Updated: October 2025
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                The TrustlessMark Foundation ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard information when you visit 
                trustlessmark.org (the "Site").
              </p>

              <h2>Information We Collect</h2>
              <h3>Information You Provide</h3>
              <p>
                When you contact us through our forms, we collect:
              </p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Organization name (optional)</li>
                <li>Message content</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                We may collect certain information automatically when you visit our Site, including:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (anonymized)</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Respond to your inquiries and contact requests</li>
                <li>Process accreditation applications</li>
                <li>Improve our website and services</li>
                <li>Send updates about the Foundation (only with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Data Storage and Security</h2>
              <p>
                <strong>No Data Stored on Our Servers:</strong> Form submissions are transmitted securely 
                via encrypted HTTPS connection to our email service provider. We do not store personal data 
                on our web servers.
              </p>
              <p>
                We implement industry-standard security measures including:
              </p>
              <ul>
                <li>TLS 1.3 encryption for all web traffic</li>
                <li>Secure form handling through trusted third-party services</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements for administrative functions</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>
                Our Site uses the following third-party services:
              </p>
              <ul>
                <li><strong>Form Processing:</strong> Contact form submissions are handled by Formspree, 
                which securely transmits messages to our email address without storing data on our servers.</li>
                <li><strong>Bot Prevention:</strong> We use Google reCAPTCHA to prevent spam and automated abuse. 
                reCAPTCHA is subject to Google's Privacy Policy and Terms of Service.</li>
                <li><strong>Analytics:</strong> We may use privacy-focused analytics to understand site usage 
                (anonymized data only).</li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                Our Site uses minimal cookies:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>reCAPTCHA Cookies:</strong> Used solely for spam prevention</li>
              </ul>
              <p>
                We do not use advertising cookies or third-party tracking pixels.
              </p>

              <h2>Data Retention</h2>
              <p>
                Email communications are retained in accordance with our records management policy. 
                We retain messages only as long as necessary to respond to your inquiry or fulfill 
                legal requirements.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:hello@trustlessmark.org">hello@trustlessmark.org</a>.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our Site is not intended for children under 13. We do not knowingly collect personal 
                information from children.
              </p>

              <h2>International Users</h2>
              <p>
                The TrustlessMark Foundation operates from the United States. By using our Site, 
                you consent to the transfer of your information to the United States.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be posted on this page 
                with an updated "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                For questions about this Privacy Policy, please contact:
              </p>
              <p>
                <strong>TrustlessMark Foundation</strong><br />
                13101 Preston Rd. #110534<br />
                Dallas, TX 75240<br />
                Email: <a href="mailto:hello@trustlessmark.org">hello@trustlessmark.org</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
