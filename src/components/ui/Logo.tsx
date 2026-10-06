import Image from "next/image";
import Link from "next/link";
// Light-background logo = the real blue-swoosh wordmark from dreamlifenow.de.
import logoDark from "../../../public/brand/logo-blue.png";
import logoWhite from "../../../public/brand/logo-white.png";

export function Logo({
  variant = "dark",
  className = "",
  priority = false,
}: {
  variant?: "dark" | "white";
  className?: string;
  priority?: boolean;
}) {
  const src = variant === "white" ? logoWhite : logoDark;
  return (
    <Link
      href="#hauptinhalt"
      aria-label="DreamLife Now – zur Startseite"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src={src}
        alt="DreamLife Now"
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
