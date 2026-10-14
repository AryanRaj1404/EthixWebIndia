const steps = [
  {
    title: "Understand the business",
    description: "We map the audience, the offer, and the message that needs to land.",
  },
  {
    title: "Design the experience",
    description: "We build a premium layout with a clear structure and strong visual hierarchy.",
  },
  {
    title: "Develop the system",
    description: "We connect the frontend, backend, and form handling so it actually works.",
  },
  {
    title: "Launch and refine",
    description: "We deploy, test, and polish the final version so it is ready for review.",
  },
];

export default function Process() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
            PROCESS
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Simple process. Clean execution.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}