import type { Metadata, Viewport } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

// Prefix for static assets when deployed under a subpath (GitHub Pages).
const bp = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://dreamlifenow.de"),
  title: {
    default: "DreamLife Now – Dein ortsunabhängiges Online-Business",
    template: "%s · DreamLife Now",
  },
  description:
    "Lerne ein sicheres Online-Geschäftsmodell kennen und mach mit der DreamLife Now-Methode die ersten Schritte zu 5.000 € oder mehr pro Monat – ortsunabhängig, mit System und persönlicher Begleitung.",
  keywords: [
    "DreamLife Now",
    "Online-Business",
    "ortsunabhängig arbeiten",
    "digitaler Nomade",
    "Mentoring",
    "Social Recruiting",
  ],
  icons: { icon: `${bp}/brand/favicon.png`, apple: `${bp}/brand/favicon.png` },
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "DreamLife Now – Dein ortsunabhängiges Online-Business",
    description:
      "In 6–8 Wochen die Grundlage für deine finanzielle und örtliche Unabhängigkeit – mit klaren Strategien, bewährten Vorlagen und persönlicher Begleitung.",
    siteName: "DreamLife Now",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101d45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${nunito.variable}`}>
      <body>
        {/* Mark the document ready so scroll-reveal pre-states apply only
            when JS runs; without JS everything stays fully visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js-ready');",
          }}
        />
        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
