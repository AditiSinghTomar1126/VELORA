import type { Package, Service } from "../types";

export const services: Service[] = [
  { id: "hair", title: "Hair Rituals", category: "Hair", description: "Cut, styling and restorative care tailored to you.", price: "From $65", duration: "45–90 min", image: "/images/service-hair.jpeg" },
  { id: "skin", title: "Skin Therapy", category: "Skin", description: "Slow beauty rituals designed to restore a healthy glow.", price: "From $80", duration: "50–75 min", image: "/images/service-skin.jpeg" },
  { id: "nails", title: "Nail Atelier", category: "Nails", description: "Refined manicures and detail-focused finishing.", price: "From $45", duration: "45–70 min", image: "/images/service-nails.jpeg" },
  { id: "makeup", title: "Makeup", category: "Makeup", description: "Soft, polished looks for everyday and special moments.", price: "From $75", duration: "45–90 min", image: "/images/service-makeup.jpeg" },
  { id: "wellness", title: "Wellness Rituals", category: "Wellness", description: "Quiet treatments that leave you feeling renewed.", price: "From $90", duration: "60–90 min", image: "/images/service-wellness.jpeg" },
  { id: "bridal", title: "Bridal", category: "Occasions", description: "Personalized beauty planning for your most meaningful day.", price: "From $250", duration: "2–4 hrs", image: "/images/service-bridal.jpeg" },
];

export const packages: Package[] = [
  { id: "signature", name: "Signature", description: "A considered introduction to VELORA.", price: "$145", items: ["Hair ritual", "Glow facial", "Finishing style ", "Self Care"] },
  { id: "ritual", name: "The Ritual", description: "Our most complete slow-beauty experience.", price: "$225", items: ["Hair ritual", "Skin therapy", "Nail atelier", "Tea & finishing ritual"], featured: true },
  { id: "bridal", name: "Bridal Edit", description: "A calm, beautifully planned bridal preparation.", price: "$390", items: ["Consultation", "Hair & makeup trial", "Event styling", "Touch-up kit"] },
];

export const galleryImages = [
  "/images/gallery-01.jpeg",
  "/images/gallery-02.jpeg",
  "/images/gallery-03.jpeg",
  "/images/gallery-04.jpeg",
  "/images/gallery-05.jpeg",
  "/images/gallery-06.jpeg",
];

export const team = [
  { name: "Elena Hart", role: "Founder & Creative Director", image: "/images/team-01.jpeg" },
  { name: "Mia Rose", role: "Senior Stylist", image: "/images/team-02.jpeg" },
  { name: "Sofia Lane", role: "Skin Therapist", image: "/images/team-03.jpeg" },
  { name: "Nora Vale", role: "Makeup Artist", image: "/images/team-04.jpeg" },
];