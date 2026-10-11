import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "outline" | "soft";
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Button({ children, to, variant = "primary", className = "", ...props }: Props) {
  const styles = {
    primary: "bg-button text-white hover:-translate-y-0.5 hover:text-light",
    outline: "border border-text/25 bg-transparent text-text hover:bg-button hover:text-light",
    soft: "bg-accent text-text hover:bg-button hover:text-light",
  }[variant];

  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${styles} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  return <button {...props} className={classes}>{children}</button>;
}