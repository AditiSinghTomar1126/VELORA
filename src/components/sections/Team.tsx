import { team } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";

export default function Team() {
  return (
    <section className="section-pad bg-bg">
      <div className="page-shell">
        <SectionHeading eyebrow="Meet the team" title="People who care about the details." />
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name}>
              <div className="aspect-[.78] overflow-hidden rounded-[45%] bg-light">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{member.name}</h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}