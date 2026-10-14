import { ArrowRight, Globe, Sparkles, Users, ShieldCheck, Gauge } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Globe,
    title: "India-first thinking",
    text: "We design for Indian businesses, Indian buyers, and the way local trust is actually built online.",
  },
  {
    icon: Gauge,
    title: "Fast execution",
    text: "We keep the process lean so projects move quickly without losing quality or polish.",
  },
  {
    icon: ShieldCheck,
    title: "Real systems",
    text: "We care about functionality just as much as visuals, so the site works, captures leads, and stays reliable.",
  },
  {
    icon: Users,
    title: "Built for growth",
    text: "Every page is shaped to support trust, clarity, and conversion instead of just looking good.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-black/5 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
              ABOUT
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Our India story.
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Ethixweb was shaped around a simple idea: many Indian businesses do not
              need loud websites, they need sharper ones. Sites that feel premium,
              build trust fast, and make a visitor actually want to enquire.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Origin", "Built for Indian businesses"],
              ["Style", "Premium, clean, practical"],
              ["Goal", "Turn visitors into leads"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {label}
                </p>
                <p className="mt-2 text-base font-semibold text-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
              THE STORY
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              From generic websites to something that actually feels credible.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-neutral-700">
              <p>
                Ethixweb came from watching too many business websites look unfinished,
                confusing, or too template-like to inspire confidence. A lot of companies
                had a good service, but the website was weakening the first impression.
              </p>
              <p>
                The goal here is different. We want a brand presence that feels clear,
                modern, and professionally built — the kind of site that tells a visitor
                this business is serious before they even speak to anyone.
              </p>
              <p>
                That is why the design leans premium, the copy stays direct, and the
                backend is real. Nothing decorative for the sake of it. Just a clean,
                useful system that supports the business.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="rounded-3xl bg-[#111111] p-6 text-white">
              <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                <Sparkles className="mr-2 h-4 w-4" />
                Ethixweb approach
              </div>
              <h3 className="mt-5 text-2xl font-semibold">
                Clean design. Clear message. Real backend.
              </h3>
              <p className="mt-3 leading-7 text-white/70">
                A business website should not just be attractive. It should support trust,
                explain the offer clearly, and actually work when someone tries to contact you.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/5 bg-[#f8f7f4] p-4"
                  >
                    <Icon className="h-5 w-5 text-[#991b1b]" />
                    <h4 className="mt-3 text-base font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-[#fca5a5]">
                WHAT WE BELIEVE
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A strong website should feel trusted in the first five seconds.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
                That is the standard Ethixweb is built around: a premium first impression,
                a clear business story, and a working system behind it.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f8f7f4]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}