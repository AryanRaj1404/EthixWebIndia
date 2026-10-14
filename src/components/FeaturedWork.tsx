const work = [
  {
    title: "Consulting brand homepage",
    description:
      "A clear premium landing page for a service business that needs trust and high-quality leads.",
  },
  {
    title: "Local agency redesign",
    description:
      "Stronger positioning, better storytelling, and a layout built for modern mobile users.",
  },
  {
    title: "Conversion-focused brochure site",
    description:
      "Minimal friction, fast load, and a layout that pushes users toward enquiry actions.",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#fca5a5]">
            FEATURED WORK
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The style: modern, premium, and built for trust.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            The goal is not decoration. The goal is to make the business look credible and professional immediately.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-white/50">Project sample</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}