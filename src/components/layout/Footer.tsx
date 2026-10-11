import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-text px-6 py-16 text-light">
      <div className="page-shell grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-4xl">VELORA</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-light/60">
            A refined space for beauty, self-care and slow rituals. Designed around you.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-light/50">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-light/75">
            <Link to="/services">Services</Link>
            <Link to="/packages">Packages</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[.2em] text-light/50">Visit</p>
          <div className="space-y-3 text-sm text-light/75">
            <p className="flex gap-2"><MapPin size={17} /> 24 Rose Avenue</p>
            <p className="flex gap-2"><Phone size={17} /> +1 000 000 0000</p>
            <p className="flex gap-2"><Mail size={17} /> hello@velora.com</p>
            <p className="flex gap-2"><Instagram size={17} /> @velorasalon</p>
          </div>
        </div>
      </div>
      <div className="page-shell mt-14 border-t border-light/15 pt-6 text-xs text-light/45">
        © {new Date().getFullYear()} VELORA. All rights reserved.
      </div>
    </footer>
  );
}