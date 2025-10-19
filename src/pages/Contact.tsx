import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  // ✅ Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqayjeqk";

  // ✅ Replace with your Google reCAPTCHA v2 Site Key
  const RECAPTCHA_SITE_KEY = "6LfmT-8rAAAAAH5dwyRMK10OkMM2lodTjHiO0_Y0";

  // ✅ Change this for each campaign
  const CAMPAIGN_ID = "general-inquiry";

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const token = await recaptchaRef.current?.executeAsync();
      recaptchaRef.current?.reset();

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          campaign: CAMPAIGN_ID,          // 🧩 added context tag
          "g-recaptcha-response": token,  // required for reCAPTCHA verification
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Send Message</h2>
      <p className="text-gray-600 mb-8 text-center">
        Fill out the form below and we'll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="flex flex-col">
          Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col">
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col">
          Organization
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col">
          Message *
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 h-32 resize-none"
          />
        </label>

        {/* 🧩 hidden field so Formspree stores puzzle/campaign info */}
        <input type="hidden" name="campaign" value={CAMPAIGN_ID} />

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white rounded-md py-2 hover:bg-gray-800 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {/* reCAPTCHA invisible widget */}
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef} />
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-4 text-center">
          ✅ Message sent successfully! We’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4 text-center">
          ⚠️ There was an error sending your message. Please try again.
        </p>
      )}
    </section>
  );
};

export default Contact;
