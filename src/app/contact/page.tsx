import ContactForm from "@/components/ContactForm";
import { ArrowRight, Mail, MapPin, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@ethixweb.in",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 99999 99999",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-black/5 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
              CONTACT
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Tell us about your project.
            </h1>

            <p className="mt-5 text-lg leading-8 text-neutral-700">
              Share what you need. We will store the enquiry in the database and
              manage it from admin. Clean process, fast response, and a serious
              business-first approach.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-[#991b1b] hover:text-[#991b1b]"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#991b1b]/10 px-5 py-3 text-sm font-semibold text-[#991b1b]">
                <Sparkles className="h-4 w-4" />
                Fast response
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-[#991b1b]/10 p-3 text-[#991b1b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-xl shadow-black/5">
            <div className="rounded-[1.5rem] bg-[#111111] p-6 text-white">
              <p className="text-sm font-medium text-white/60">What happens next</p>
              <h2 className="mt-2 text-2xl font-semibold">
                We review your message and get back with a clear next step.
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/60">Step 1</p>
                  <p className="mt-1 font-semibold">You send the brief</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-sm text-white/60">Step 2</p>
                  <p className="mt-1 font-semibold">We check the fit</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-black/5 bg-[#f8f7f4] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
                  SIMPLE. CLEAN. PROFESSIONAL.
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black">
                  Perfect for serious brands that want a stronger web presence.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
                  Whether it is a redesign, a new launch, or a lead-focused business
                  website, Ethixweb is built to keep things premium and practical.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#991b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f1d1d]"
              >
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}