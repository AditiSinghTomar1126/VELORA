import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, children, align = "left" }: Props) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[.22em] text-muted">{eyebrow}</p>}
      <h2 className="display text-5xl text-text sm:text-6xl lg:text-7xl">{title}</h2>
      {description && <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{description}</p>}
      {children}
    </div>
  );
}