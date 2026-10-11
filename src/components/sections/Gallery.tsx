import { galleryImages } from "../../data/siteData";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Gallery({ preview = false }: { preview?: boolean }) {
  const images = preview ? galleryImages.slice(0, 4) : galleryImages;
  return (
    <section className="section-pad bg-light">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The VELORA world" title="A little beauty, everywhere." />
          {preview && <Button to="/gallery" variant="outline">View gallery</Button>}
        </div>
        <div className="mt-12 columns-2 gap-4 lg:columns-3">
          {images.map((image, i) => (
            <div key={image} className={`mb-4 overflow-hidden rounded-[2rem] ${i % 3 === 0 ? "aspect-[.8]" : "aspect-square"}`}>
              <img src={image} alt={`VELORA gallery ${i + 1}`} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}