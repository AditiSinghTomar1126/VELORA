import { Check } from "lucide-react";
import { packages } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Packages() {
  return (
    <section className="section-pad bg-accent">
      <div className="page-shell">
        <SectionHeading eyebrow="Curated packages" title="Make a ritual of it." description="A little more time, a little more care." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <article key={item.id} className={`rounded-[2rem] p-8 ${item.featured ? "bg-text text-light" : "bg-light"}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-3xl">{item.name}</h3>
                {item.featured && <span className="rounded-full bg-button px-3 py-1 text-[10px] uppercase tracking-wider">Favourite</span>}
              </div>
              <p className={`mt-3 text-sm ${item.featured ? "text-light/60" : "text-muted"}`}>{item.description}</p>
              <p className="mt-8 font-serif text-4xl">{item.price}</p>
              <ul className={`mt-8 space-y-3 text-sm ${item.featured ? "text-light/75" : "text-muted"}`}>
                {item.items.map((x) => <li key={x} className="flex gap-2"><Check size={16} />{x}</li>)}
              </ul>
              <Button to="/contact" variant={item.featured ? "primary" : "outline"} className="mt-8 w-full">Choose package</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}