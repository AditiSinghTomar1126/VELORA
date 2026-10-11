import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

export default function Services({ preview = false }: { preview?: boolean }) {
  const visible = preview ? services.slice(0, 4) : services;
  return (
    <section className="section-pad bg-light">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Our services"
          title="Rituals made for you."
          description="Thoughtful beauty services, delivered with precision and a softer pace."
        />
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((service) => (
            <article key={service.id} className="group">
              <div className="aspect-[.82] overflow-hidden rounded-[45%] bg-bg">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between gap-4 pt-5">
                <div className="px-18">
                  <p className="text-[10px] uppercase tracking-[.2em] text-muted">{service.category}</p>
                  <h3 className="mt-2 font-serif text-2xl">{service.title}</h3>
    
                  <p className="mt-3 text-xs">{service.price} · {service.duration}</p>
                </div>
                  </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}