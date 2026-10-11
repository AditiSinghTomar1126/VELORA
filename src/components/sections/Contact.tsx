import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section-pad bg-light">
      <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Contact VELORA" title="Let's make time for you." description="Tell us a little about what you're looking for and our team will get back to you." />
          <div className="mt-10 space-y-5 text-sm text-muted">
            <p className="flex gap-3"><MapPin /> 24 Rose Avenue, Your City</p>
            <p className="flex gap-3"><Phone /> +1 000 000 0000</p>
            <p className="flex gap-3"><Mail /> hello@velora.com</p>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] bg-bg p-7 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">Name<input required name="name" className="mt-2 w-full rounded-xl border border-text/15 bg-light px-4 py-3 outline-none focus:border-button" /></label>
            <label className="text-sm">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-text/15 bg-light px-4 py-3 outline-none focus:border-button" /></label>
            <label className="text-sm sm:col-span-2">Service<select name="service" className="mt-2 w-full rounded-xl border border-text/15 bg-light px-4 py-3 outline-none"><option>Choose a service</option><option>Hair Rituals</option><option>Skin Therapy</option><option>Nail Atelier</option><option>Makeup</option><option>Bridal</option></select></label>
            <label className="text-sm sm:col-span-2">Message<textarea name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-text/15 bg-light px-4 py-3 outline-none focus:border-button" /></label>
          </div>
          <Button type="submit" className="mt-6 w-full">{sent ? "Request received" : "Send request"}</Button>
        </form>
      </div>
    </section>
  );
}