const points = [
  "India-specific storytelling instead of generic western agency language",
  "Premium visual system with strong red branding",
  "Real backend support for leads and admin usage",
  "Fast, clean, mobile-first experience",
];

export default function WhyEthixweb() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-[#991b1b]">
            WHY ETHIXWEB
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Made to feel local, but still premium enough to compete globally.
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            The design uses a refined red-led brand language, Indian business context,
            and a no-nonsense conversion flow.
          </p>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-2xl bg-[#f8f7f4] px-4 py-4 text-sm font-medium text-neutral-800"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}