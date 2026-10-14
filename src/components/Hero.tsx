import Link from "next/link";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#991b1b]/15 bg-white px-4 py-2 text-sm font-medium text-[#991b1b] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Built for Indian brands, but premium enough for global clients
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Premium websites that help Indian businesses look world-class.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-700">
            We design and build fast, polished, conversion-focused websites for
            service businesses, agencies, startups, and local brands that want
            serious trust online.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#991b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-black/20"
            >
              View Services
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
            {[
              ["Fast Delivery", "Launch in days"],
              ["India-first", "Built for local market"],
              ["Real backend", "Leads & admin"],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="font-semibold text-black">{title}</p>
                <p className="mt-1 text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#991b1b]/10 via-white to-[#111111]/5 blur-2xl" />
          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5">
            <div className="rounded-[1.5rem] bg-[#111111] p-6 text-white">
              <p className="text-sm text-white/60">Featured outcome</p>
              <h2 className="mt-2 text-2xl font-semibold">
                A premium presence that converts visitors into leads.
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <Globe className="h-5 w-5 text-[#fca5a5]" />
                  <p className="mt-3 text-sm text-white/70">Responsive design</p>
                  <p className="mt-1 font-semibold">Mobile-first, polished UI</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <Sparkles className="h-5 w-5 text-[#fca5a5]" />
                  <p className="mt-3 text-sm text-white/70">Conversion focus</p>
                  <p className="mt-1 font-semibold">Clear CTA and lead flow</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/5 bg-[#f8f7f4] p-4">
                <p className="text-sm text-neutral-500">Trust</p>
                <p className="mt-1 text-lg font-semibold">Professional credibility</p>
              </div>
              <div className="rounded-2xl border border-black/5 bg-[#f8f7f4] p-4">
                <p className="text-sm text-neutral-500">Speed</p>
                <p className="mt-1 text-lg font-semibold">Quick, efficient build</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}