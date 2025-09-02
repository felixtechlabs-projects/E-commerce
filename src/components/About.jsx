// About.jsx
import React from "react";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "myshop",
    image: "/logo.png",
    telephone: "+919890989098",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viman Nagar",
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: "411014",
      addressCountry: "IN",
    },
    url: typeof window !== "undefined" ? window.location.href : "https://example.com/about",
  };

  return (
    <main className="bg-white text-slate-800">
      {/* SEO (safe on CSR; for frameworks like Next.js, move to <Head>) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 opacity-10" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
            About us
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            We’re <span className="text-indigo-600">myshop</span> — Pune’s friendly e-commerce store
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            Based in Viman Nagar, we curate quality products at honest prices. Fast delivery,
            secure payments, and customer-first service—because shopping should feel effortless.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/products"
              className="inline-flex items-center rounded-2xl px-5 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-sm"
            >
              Shop now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl px-5 py-3 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Started in Pune, <span className="font-medium">myshop</span> was built on a simple idea:
              make great products easy to find and delightful to receive. We partner with trusted
              brands and local suppliers to keep quality high and prices fair—backed by responsive
              support from real people.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <CheckIcon />
                Curated catalog with transparent pricing
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                Same/next-day dispatch on most orders
              </li>
              <li className="flex gap-3">
                <CheckIcon />
                Easy 7-day returns on eligible items
              </li>
            </ul>
          </div>

          {/* Value props */}
          <div className="grid gap-4 sm:grid-cols-2">
            <ValueCard
              title="Secure Payments"
              desc="Razorpay / UPI / Cards with SSL encryption."
              icon={<ShieldIcon />}
            />
            <ValueCard
              title="Fast Shipping"
              desc="Smart logistics for reliable, speedy delivery."
              icon={<TruckIcon />}
            />
            <ValueCard
              title="Easy Returns"
              desc="Hassle-free returns on eligible products."
              icon={<ReturnIcon />}
            />
            <ValueCard
              title="Support that cares"
              desc="Talk to humans, not bots—whenever you need."
              icon={<ChatIcon />}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Products curated" value="1,500+" />
            <Stat label="Happy customers" value="10,000+" />
            <Stat label="Avg. rating" value="4.8/5" />
            <Stat label="Cities served" value="120+" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Visit or reach us</h2>
            <p className="mt-3 text-slate-600">
              Drop by our Viman Nagar location or get in touch—we’re here to help with sizing,
              recommendations, order issues, and everything in between.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-wider text-slate-500">Address</p>
                <p className="mt-1 font-medium">Viman Nagar, Pune, Maharashtra 411014</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Viman+Nagar+Pune+411014"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
                >
                  Open in Google Maps <ArrowIcon />
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm uppercase tracking-wider text-slate-500">Phone</p>
                <a
                  href="tel:+919890989098"
                  className="mt-1 block text-lg font-semibold hover:underline"
                >
                  9890989098
                </a>
                <p className="mt-2 text-sm text-slate-600">
                  Mon–Sat, 10:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Map preview (static link-friendly) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Viman+Nagar+Pune+411014"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-200 overflow-hidden group"
            aria-label="Open Viman Nagar, Pune on Google Maps"
          >
            <div className="aspect-[4/3] w-full bg-slate-100">
              {/* Replace with your map/image if desired */}
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Viman+Nagar,Pune&zoom=14&size=800x600&scale=2&maptype=roadmap&markers=color:red%7CViman+Nagar,Pune&key=YOUR_GOOGLE_MAPS_API_KEY"
                alt="Map preview of Viman Nagar, Pune"
                className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

/* ——— UI helpers ——— */

function ValueCard({ title, desc, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
      <div className="flex items-start gap-3">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

/* ——— Inline Icons (no external libs) ——— */

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 flex-none text-green-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.333a1 1 0 0 1-1.44.01L3.29 9.017a1 1 0 1 1 1.42-1.406l3.003 3.037 6.53-6.601a1 1 0 0 1 1.461.243Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5h11v8h7l-2-5h-5V5H3v11h1a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h1v-3H14V7h4l3 7v3h-1a3 3 0 0 1-6 0H10a3 3 0 0 1-6 0H3V5z" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 7V4L3 10l7 6v-3h4a5 5 0 0 0 0-10h-2v2h2a3 3 0 0 1 0 6h-4z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4h16v10H7l-3 3V4zm2 3h12v2H6V7zm0 4h8v2H6v-2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" />
    </svg>
  );
}
