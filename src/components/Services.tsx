import { Code2, LayoutDashboard, Megaphone, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Website Strategy",
    description:
      "A clear structure, messaging, and user flow that makes the business feel premium and trustworthy.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Responsive production-ready websites with clean code, fast performance, and practical backend logic.",
  },
  {
    icon: Megaphone,
    title: "Lead Generation",
    description:
      "Strong calls to action, enquiry flows, and conversion-focused sections built for real inquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Systems",
    description:
      "Protected admin access, validation, spam protection, and safer handling of business data.",
  },
];

export default function Services() {
  return (
    <section className="bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
            SERVICES
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Everything needed for a modern business website.
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            Designed for Indian businesses that need a serious brand presence, not a generic template.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex rounded-2xl bg-[#991b1b]/10 p-3 text-[#991b1b]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}