import Button from "../ui/Button";
import FloatingPetals from "../effects/FloatingPetals";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-10 bg-light">
      <div className="page-shell relative grid min-h-[calc(100vh-80px)] items-center gap-10 py-2 lg:grid-cols-[1fr_.9fr]">
        <FloatingPetals />
        <div className="relative z-10 max-w-3xl animate-fade-up lg:px-25">
          <p className="mb-6 text-xs uppercase tracking-[.28em] text-muted">Beauty · Wellness · Ritual</p>
          <h1 className="display text-[18vw] text-text sm:text-8xl lg:text-[8.4vw]">
            Care for
            <br />
            your <i>self.</i>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-muted">
            A modern salon experience rooted in thoughtful beauty, quiet confidence and the art of feeling like yourself.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact">Book an appointment</Button>
            <Button to="/services" variant="outline">Explore services</Button>
          </div>
        </div>

        <div className="relative z-10 mx-auto aspect-[.82] w-full max-w-[560px] overflow-hidden rounded-[48%] bg-bg">
          <img
            src="/images/hero-woman.jpg"
            alt="VELORA beauty experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-4 rounded-[48%] border border-white/60" />
        </div>
      </div>
    </section>
  );
}