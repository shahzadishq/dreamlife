"use client";

import { useState } from "react";
import { ArrowRight } from "../ui/Icons";

/**
 * Newsletter sign-up. To avoid fabricating a backend submission or a fake
 * success state, this opens the visitor's email client addressed to
 * info@dreamlifenow.de with their address prefilled. Swap `handleSubmit`
 * for a real ESP endpoint (Mailchimp, Brevo, etc.) once credentials exist.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter-Anmeldung");
    const body = encodeURIComponent(
      `Bitte nimm folgende E-Mail-Adresse in den Newsletter auf: ${email}`,
    );
    window.location.href = `mailto:info@dreamlifenow.de?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        E-Mail-Adresse
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Deine E-Mail-Adresse"
        className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-lime/60 focus:outline-none"
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 ease-premium hover:bg-lime-300"
      >
        Anmelden
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
