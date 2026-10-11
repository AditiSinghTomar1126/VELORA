import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";

const links = [
  ["/services", "Services"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-text/10 bg-light/90 backdrop-blur-xl">
      <div className="page-shell flex h-20 px-10 items-center justify-between">
        <Link to="/" className="font-serif text-3xl tracking-[-.06em]">VELORA</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-xs uppercase tracking-[.15em] transition-opacity ${isActive ? "opacity-100" : "opacity-55 hover:opacity-100"}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button to="/contact" className="px-5 py-2.5">Book now</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-text/10 bg-light px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[.15em]">
                {label}
              </NavLink>
            ))}
            <Button to="/contact" onClick={() => setOpen(false)}>Book now</Button>
          </nav>
        </div>
      )}
    </header>
  );
}