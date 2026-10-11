import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function About() {
  return (
    <section className="section-pad bg-bg">
      <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
       
          <img src="/images/about.png" alt="VELORA" className="h-full w-full  object-cover" />
        
        <div>
          <SectionHeading
            eyebrow="The VELORA story"
            title="Beauty should feel like coming home."
            description="VELORA was created around a simple belief: the most beautiful experiences are the ones that leave space to breathe. Every detail is designed to make your time here feel considered, personal and unhurried."
          />
          <p className="mt-7 max-w-2xl text-sm leading-7 text-muted">
            From the first consultation to the final touch, our team focuses on the little things that make a ritual feel entirely yours.
          </p>
          <Button to="/about" variant="outline" className="mt-8">Our story</Button>
        </div>
      </div>
    </section>
  );
}