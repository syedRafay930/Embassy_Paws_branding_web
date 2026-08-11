import Image from "next/image";

const VALUES = [
  {
    number: "01",
    title: "Compassion First",
    description:
      "Every plan starts with what the animal needs, not just the logistics.",
  },
  {
    number: "02",
    title: "Full Compliance",
    description:
      "Every document checked against destination-country rules — no surprises at customs.",
  },
  {
    number: "03",
    title: "One Coordinator",
    description:
      "A single point of contact from booking to touchdown never passed departments.",
  },
  {
    number: "04",
    title: "Always Reachable",
    description:
      "Real-time updates and a human on the phone, any hour your pet is in transit.",
  },
] as const;

export function ValuesSection() {
  return (
    <section className="bg-[#f7f3ea] py-10 sm:py-12 lg:py-16">
      <div className="relative mx-2 overflow-visible rounded-[2rem] bg-[#d1a961] px-5 py-14 sm:mx-4 sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:mx-6 lg:mx-8 lg:px-12 lg:py-20 xl:mx-10">
        {/* Cartoon dog — top left, hanging off edge */}
        <Image
          src="/know-us-cartoon-dog.png"
          alt=""
          width={160}
          height={120}
          className="pointer-events-none absolute -left-4 -top-8 z-20 h-auto w-24 object-contain sm:-left-6 sm:-top-10 sm:w-28 lg:-left-8 lg:-top-12 lg:w-36"
          aria-hidden
        />

        {/* Bone — bottom right, faint */}
        <Image
          src="/services-header-bone.png"
          alt=""
          width={180}
          height={140}
          className="pointer-events-none absolute -bottom-6 -right-4 z-0 h-auto w-28 rotate-12 object-contain opacity-70 brightness-0 invert-[0.45] sm:-bottom-8 sm:-right-6 sm:w-36 lg:-bottom-10 lg:-right-8 lg:w-44"
          aria-hidden
        />

        {/* Header */}
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#112239]/80">
            What We Stand For
          </p>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-[#112239] sm:text-4xl">
              The Values Behind Every Journey
            </h2>
        </div>

        {/* Cards */}
        <ul className="relative z-10 mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {VALUES.map((value) => (
            <li key={value.number}>
              <article className="h-full rounded-2xl bg-[#f7f3ea] p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d1a961] font-serif text-xs font-bold text-[#112239]">
                  {value.number}
                </div>
                <h3 className="mt-4 mb-2 font-serif text-lg font-bold text-[#112239] sm:text-xl">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#112239]/65">
                  {value.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
