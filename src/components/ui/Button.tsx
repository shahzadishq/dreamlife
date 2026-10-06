import Link from "next/link";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-premium focus-visible:outline-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white shadow-soft hover:bg-indigo-brand hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-lime text-ink shadow-glow hover:bg-indigo-brand hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-ink ring-1 ring-ink/15 hover:ring-ink/40 hover:bg-ink/[0.03]",
  light:
    "bg-white/95 text-ink ring-1 ring-white/50 backdrop-blur hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
  external,
}: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-1" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
