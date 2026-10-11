import Button from "../ui/Button";

const petals = [
  {
    src: "/images/petal-a.png",
    className: "left-[5%] top-[50%] w-30 -rotate-42",
    delay: "0s",
  },
  {
    src: "/images/petal-b.png",
    className: "left-[18%] bottom-[12%] w-35 rotate-45",
    delay: "1s",
  },
  {
    src: "/images/petal-a.png",
    className: "right-[10%] top-[12%] w-36 rotate-45",
    delay: "2s",
  },
  {
    src: "/images/petal-b.png",
    className: "right-[20%] bottom-[15%] w-32 -rotate-12",
    delay: "0.5s",
  },
  {
    src: "/images/petal-a.png",
    className: "right-[6%] top-[55%] w-29 rotate-90",
    delay: "1.5s",
  },
];

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-light px-6 py-20 text-text">
      {/* Floating petals */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {petals.map((petal, index) => (
          <img
            key={index}
            src={petal.src}
            alt=""
            className={`absolute hidden animate-petal-float opacity-70 sm:block ${petal.className}`}
            style={{ animationDelay: petal.delay }}
          />
        ))}
      </div>

      {/* CTA content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[.25em] text-text/50">
          Your next ritual
        </p>

        <h2 className="display mt-5 text-5xl sm:text-7xl">
          Make time for yourself.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-text/60">
          Choose a treatment, tell us what you need and let us take care of the
          rest.
        </p>

        <Button to="/contact" variant="primary" className="mt-8">
          Book an appointment
        </Button>
      </div>
    </section>
  );
}