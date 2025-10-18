// components/ContactForm.tsx
"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setMessage("");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    // Basic client-side validation
    const email = String(payload.email || "").trim();
    const name = String(payload.name || "").trim();
    const body = String(payload.message || "").trim();
    if (!name || !email || !body) {
      setState("error");
      setMessage("Please complete all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      setState("success");
      setMessage("Thanks! We’ll get back to you shortly.");
      e.currentTarget.reset();
    } catch (error: unknown) {
     const errMsg =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setState("error");
      setMessage(errMsg);

      
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            placeholder="Ada Lovelace"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Work email *
         </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-900">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            placeholder="Company Inc."
          />
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-900">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a topic
            </option>
            <option>Product demo</option>
            <option>QuickBooks / Xero integration</option>
            <option>Pricing & billing</option>
            <option>Security / Compliance</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          placeholder="Tell us a bit about your workflow, systems (QuickBooks, Xero), and volume."
        />
      </div>

      {/* Honeypot (spam trap) */}
      <input
        type="text"
        name="company_website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between gap-4">
        <p
          role={state === "error" || state === "success" ? "status" : undefined}
          className={`text-sm ${
            state === "error" ? "text-rose-600" : state === "success" ? "text-emerald-600" : "text-gray-500"
          }`}
        >
          {message || "We typically respond within 1 business day."}
        </p>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
