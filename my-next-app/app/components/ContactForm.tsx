"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [additionalContact, setAdditionalContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp || !message) {
      setStatus("Please fill all required fields.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          additionalContact,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setWhatsapp("");
        setAdditionalContact("");
        setMessage("");
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          placeholder="you@example.com"
          type="email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">WhatsApp Contact <span className="text-red-500">*</span></label>
        <input
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          placeholder="+91 98765 43210"
          type="tel"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Contact (Optional)</label>
        <input
          value={additionalContact}
          onChange={(e) => setAdditionalContact(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          placeholder="+91 98765 43210 (optional)"
          type="tel"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          rows={4}
          placeholder="Tell us about what you're looking for"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="rounded bg-blue-600 px-4 py-2 text-white">Send</button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </div>
    </form>
  );
}
