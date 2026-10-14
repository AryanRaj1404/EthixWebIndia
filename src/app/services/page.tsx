import {
  Code2,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  SearchCheck,
  Gauge,
  Palette,
  Layers3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Brand & Website Design",
    description:
      "Premium visual direction, clean layouts, and strong messaging that make the business feel established and trustworthy.",
    points: ["UI systems", "Landing pages", "Responsive design"],
  },
  {
    icon: Code2,
    title: "Next.js Web Development",
    description:
      "Fast, modern websites built with clean code, reusable components, and production-ready structure.",
    points: ["Next.js", "Tailwind CSS", "API routes"],
  },
  {
    icon: Megaphone,
    title: "Lead Generation Pages",
    description:
      "High-converting enquiry pages with strong calls to action, forms, and business-focused content flow.",
    points: ["Contact funnels", "CTA strategy", "Conversion copy"],
  },
  {
    icon: SearchCheck,
    title: "SEO-Ready Structure",
    description:
      "Pages designed with search visibility, clean metadata, and proper content hierarchy from day one.",
    points: ["Metadata", "Headings", "Indexing support"],
  },
  {
    icon: Gauge,
    title: "Speed & Performance",
    description:
      "Optimized build quality, light frontend behavior, and a smooth experience across desktop and mobile.",
    points: ["Performance tuning", "Mobile-first", "Core Web Vitals"],
  },
  {
    icon: ShieldCheck,
    title: "Secure Backend Systems",
    description:
      "Protected admin flows, validation, spam protection, and reliable lead storage in a real database.",
    points: ["Admin login", "Lead database", "Form security"],
  },
];

const process = [
  {
    step: "01",
    title: "Understand the business",
    text: "We study the offer, audience, and goals before designing anything.",
  },
  {
    step: "02",
    title: "Design the experience",
    text: "We create a premium visual system and a clean page structure.",
  },
  {
    step: "03",
    title: "Build the system",
    text: "We develop the site, form flow, and backend logic.",
  },
  {
    step: "04",
    title: "Launch and refine",
    text: "We test the final result and polish the details before delivery.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="border-b border-black/5 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
              SERVICES
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Everything a serious business website needs.
            </h1>
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Ethixweb focuses on premium design, clean development, and practical systems
              that help Indian businesses look credible and generate leads.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Delivery style", "Fast, premium, practical"],
              ["Best for", "Startups, local businesses, agencies"],
              ["Focus", "Trust, speed, conversions"],
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
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
                CORE OFFERINGS
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Built to make the business look premium and get real inquiries.
              </h2>
            </div>

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-[#991b1b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d] lg:inline-flex"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl bg-[#991b1b]/10 p-3 text-[#991b1b] transition group-hover:bg-[#991b1b] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-[#f8f7f4] px-3 py-1 text-xs font-medium text-neutral-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#fca5a5]">
              PROCESS
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple process. Clean execution.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              The goal is not decoration. The goal is a website that looks premium,
              works properly, and brings in enquiries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold tracking-[0.25em] text-[#fca5a5]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/5 bg-[#f8f7f4] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
                  READY TO BUILD
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black">
                  Let’s make your business look serious online.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
                  Whether it is a new website, a redesign, or a lead-focused business page,
                  Ethixweb is built to deliver a sharp result without the fluff.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#991b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}