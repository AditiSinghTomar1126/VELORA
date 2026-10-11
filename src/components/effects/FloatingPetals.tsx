type Petal = { src: string; className: string; delay?: string };

const petals: Petal[] = [
  { src: "/images/petal-a.png", className: "left-[0%] top-[82%]  w-30 rotate-22", delay: "0s" },
  { src: "/images/petal-b.png", className: "left-[60%] lg:left-[25%] top-[6%] w-34 -rotate-22", delay: "-2s" },
  { src: "/images/petal-b.png", className: " hidden lg:block left-[0%] top-[52%] w-30 -rotate-90", delay: "0s" },
  { src: "/images/petal-b.png", className: "left-[60%] top-[60%] lg:top-[32%] w-30 rotate-90", delay: "-2s" },
  { src: "/images/petal-b.png", className: "hidden lg:block left-[25%] top-[75%] w-35 -rotate-0", delay: "-2s" },
  { src: "/images/petal-a.png", className: "left-[35%] lg:left-[0%] top-[90%] lg:top-[85%] w-35 -rotate-60", delay: "-2s" },
];

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      {petals.map((petal, index) => (
        <img
          key={index}
          src={petal.src}
          alt=""
          style={{ animationDelay: petal.delay }}
          className={`absolute select-none object-contain animate-petal-float ${petal.className}`}
        />
      ))}
    </div>
  );
}