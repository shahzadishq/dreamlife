/**
 * Single source of truth for all customer-facing content.
 * All copy is in German and sourced verbatim (or lightly condensed without
 * changing meaning) from dreamlifenow.de. No testimonials, statistics,
 * certifications or promises have been invented or strengthened.
 */

export const CTA = {
  // Preserve existing working conversion destinations.
  strategy: "https://erstgespraech.dreamlifenow.de/", // Kostenloses Strategiegespräch
  video: "https://dein.dreamlifenow.de/video/", // Kostenloses Videotraining
  caseStudies:
    "https://expertenmarkt.de/experte/dreamlife-now-cape-coral/fallstudien",
  email: "mailto:info@dreamlifenow.de",
} as const;

// Trustmarkt case-study widget — the exact [trustmarkt] shortcode embed used on
// the reference page (widget.trustmarkt.de embed render URL).
export const TRUSTMARKT_EMBED =
  "https://widget.trustmarkt.de/embed/v1/render/8MWNYgzwvjxYw9pX1J6x/ZKBaQmgP2Xbjv7OM1VWA";

// "Bereits über 150+ Teilnehmer" social-proof strip (brand asset from reference).
export const SOCIAL_PROOF_IMG = "/brand/social-proof.webp";

export const NAV_LINKS = [
  { label: "Erfolgsgeschichten", href: "#erfolgsgeschichten" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Vergleich", href: "#vergleich" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Coaches", href: "#coaches" },
  { label: "FAQ", href: "#faq" },
] as const;

/* ------------------------------------------------------------------ Hero */
export const HERO = {
  eyebrow: "Dein ortsunabhängiges Online-Business",
  title: "Lerne ein sicheres Online-Geschäftsmodell kennen",
  titleAccent: "und mach die ersten Schritte zu 5.000 € oder mehr pro Monat",
  subtitle:
    "Mit der DreamLife Now-Methode legst du in 6–8 Wochen die Grundlage für deine Unabhängigkeit – mit klaren Strategien, bewährten Vorlagen und persönlicher Begleitung.",
  bullets: [
    "Auch ohne Vorkenntnisse einfach starten",
    "Persönliche Unterstützung bei deinen ersten Schritten",
    "100 % remote – arbeite von überall auf der Welt",
  ],
  primaryCta: { label: "Erstgespräch sichern", href: CTA.strategy },
  secondaryCta: { label: "Kostenloses Videotraining ansehen", href: CTA.video },
};

/* ------------------------------------------------------ Trust / logos row */
export const TRUST_BADGES = [
  { src: "/brand/badge-trustpilot.jpeg", alt: "Trustpilot Bewertung" },
  { src: "/brand/badge-provenexpert.jpeg", alt: "ProvenExpert ausgezeichnet" },
  { src: "/brand/badge-meta.jpeg", alt: "Meta Business Partner" },
  {
    src: "/brand/badge-verbraucherschutz.webp",
    alt: "Vom Verbraucherschutz geprüft",
  },
];

/* ---------------------------------------------------------- Value props */
export const VALUE_PROPS = {
  eyebrow: "Dein Weg zu mehr Freiheit & Einkommen",
  title: "Ein Business, das sich deinem Leben anpasst",
  intro:
    "Starte nebenbei als Freelancer oder mit eigener Agentur – mit 250 Stunden Live-Calls, 500+ Videolektionen und WhatsApp-Support bist du nie allein.",
  items: [
    {
      icon: "trending",
      title: "Skalierbares Einkommensmodell",
      body: "Entwickle ein Einkommen von 2.500 €–5.000 €+ monatlich durch wiederkehrende Dienstleistungen mit hoher Nachfrage.",
    },
    {
      icon: "repeat",
      title: "Nachhaltige Einkommensstruktur",
      body: "Setze auf planbare monatliche Umsätze statt einmaliger Projekte. Unser Fokus liegt auf stabilen, wiederkehrenden Einnahmen.",
    },
    {
      icon: "live",
      title: "Live-Coaching & Praxis-Feedback",
      body: "Regelmäßige Live-Calls, Q&A-Sessions und individuelles Feedback sorgen dafür, dass du nicht nur lernst, sondern wirklich umsetzt.",
    },
    {
      icon: "network",
      title: "Zugang zu echten Unternehmen",
      body: "Profitiere von unserem Netzwerk aus Partnerunternehmen und echten Praxisprojekten – kein reines Theorie-Training.",
    },
    {
      icon: "globe",
      title: "100 % Remote & ortsunabhängig",
      body: "Baue dir dein digitales Geschäftsmodell komplett online auf – flexibel von überall auf der Welt.",
    },
    {
      icon: "chat",
      title: "Direkter WhatsApp-Support",
      body: "Du bist nie allein. Bei Fragen erhältst du schnelle Unterstützung direkt per WhatsApp – persönlich und unkompliziert.",
    },
  ],
};

/* --------------------------------------------------------- Success stories */
export type Story = {
  name: string;
  role: string;
  body: string;
};

export const SUCCESS_STORIES: Story[] = [
  {
    name: "Patreas",
    role: "Unternehmer & Quereinsteiger",
    body: "Patreas arbeitete über 15 Jahre im Stahl- und Metallbereich und wollte aus seinem Alltag ausbrechen. Mit DreamLife verändert er sein Mindset, baut sein eigenes Business auf und ist heute bereit für seinen ersten Testkunden.",
  },
  {
    name: "Felix",
    role: "Geschäftsführer von Grüneich Media",
    body: "Felix gründete mit DreamLife seine eigene Agentur. Heute hilft er Unternehmen mit Social Recruiting und Online-Marketing und setzt erfolgreiche Kampagnen für Kunden um.",
  },
  {
    name: "Sara",
    role: "Volljuristin & Unternehmerin",
    body: "Sara war Volljuristin und wollte endlich ortsunabhängig arbeiten. Durch DreamLife hat sie ein eigenes Business aufgebaut, mehr Freiheit gewonnen und entscheidet heute selbst, wann, wo und für wen sie arbeitet.",
  },
  {
    name: "Jan",
    role: "Unternehmer & Familienvater",
    body: "Jan war Bauleiter und wollte mehr Zeit für seine Familie. Mit DreamLife baute er sich ein eigenes Business auf, gewann schnell seinen ersten Kunden und kann heute seinen Alltag freier gestalten.",
  },
  {
    name: "Kassandra",
    role: "Geschäftsführerin & Social-Media-Expertin",
    body: "Kassandra wurde mit DreamLife selbstständig, arbeitet remote und erzielte im ersten Jahr 70.000 € Umsatz. Der Support gab ihr dabei Sicherheit.",
  },
  {
    name: "Kevin",
    role: "Unternehmer & Auswanderer",
    body: "Kevin arbeitete im Metallbau und wollte mehr Freiheit. Durch DreamLife lernt er Schritt für Schritt, sein eigenes Business aufzubauen und ortsunabhängiger zu werden, um mehr zu reisen.",
  },
  {
    name: "Irene",
    role: "Geschäftsleitung bei Mundi Recruiting",
    body: "Irene gewann mehr Zeit für ihre Kinder, Selbstvertrauen und finanzielle Freiheit. Ihr Jahresziel erreichte sie bereits nach drei Wochen.",
  },
  {
    name: "Joel",
    role: "Altenpfleger & Gründer",
    body: "Als Altenpfleger wollte Joel mehr Freiheit und ein eigenes Business. Mit Unterstützung gewann er seinen ersten Kunden und arbeitet heute an seinem Traum vom Leben in Thailand.",
  },
  {
    name: "Martina",
    role: "Wirtschaftsingenieurin",
    body: "Martina ist alleinerziehende Mutter von zwei Kindern. Mit dem DreamLife-Mentoring baute sie ihr Online-Business auf, kündigte bereits nach 6 Monaten ihren Job und ist heute 100 % selbstständig.",
  },
];

export const STORIES_META = {
  eyebrow: "Diese Ergebnisse sind möglich",
  title: "Echte Menschen, echte Wege in die Freiheit",
  note: "Eine Auswahl aus über 150 Teilnehmerinnen und Teilnehmern. Einzelergebnisse sind individuell und hängen von Einsatz und Umsetzung ab.",
  cta: { label: "Weitere Fallstudien ansehen", href: CTA.caseStudies },
};

/* ------------------------------------------------------------ Founder story */
export const FOUNDER = {
  eyebrow: "Über Nico & Viktoria",
  title: "Die Zeit für digitale Nomaden ist jetzt",
  paragraphs: [
    "2020 hat alles verändert. Die Digitalisierung eröffnet dir neue Chancen. Möchtest du frei und unabhängig arbeiten? Dann starte jetzt dein Online-Business – der richtige Zeitpunkt ist jetzt.",
    "Starte dein ortsunabhängiges Online-Business und genieße die Freiheit, dein Leben selbst zu gestalten. Ob auf einer tropischen Insel, in den Bergen oder im gemütlichen Homeoffice – die Welt steht dir offen.",
    "Jeder verdient es, ein selbstbestimmtes Leben zu führen. Mit unserer bewährten Strategie begleiten wir dich Schritt für Schritt auf dem Weg in deine finanzielle und örtliche Unabhängigkeit.",
  ],
  pillars: [
    { title: "Freiheit leben", body: "Arbeite, wo und wann du willst." },
    { title: "In 6–8 Wochen", body: "Lege die Grundlage für deine Unabhängigkeit." },
    { title: "Mit System", body: "Klare Strategien, bewährte Vorlagen, echte Begleitung." },
  ],
};

/* ---------------------------------------------------------------- Income */
export const INCOME = {
  eyebrow: "Skalierbares Einkommensmodell",
  title: "So realistisch ist dein Einkommen",
  body: "In dieser Branche erzielen erfolgreiche Agenturen Umsätze von 20.000 €+ bis hin zu mehrfach sechsstelligen Beträgen – oft im Team. Doch es geht nicht nur um große Zahlen.",
  highlight:
    "Realistisch sind 2.500 € bis 5.000 € im Monat – auch ohne großes Team. Schon 3 bis 5 Kunden, die jeweils etwa 1.000 € monatlich zahlen, können dieses Ziel ermöglichen.",
  footnote:
    "Mit klaren Strategien, bewährten Vorlagen und persönlicher Anleitung kannst du dieses Einkommen Schritt für Schritt erreichen. Ergebnisse sind individuell.",
  stats: [
    { value: "2.500–5.000 €", label: "Realistisches Monatsziel" },
    { value: "3–5", label: "Kunden genügen dafür" },
    { value: "6–8 Wochen", label: "Bis zur Grundlage" },
  ],
};

/* ---------------------------------------------------------- Comparison */
export const COMPARISON = {
  eyebrow: "Vergleich",
  title: "Mehr Freiheit bei gleichem Verdienst",
  intro:
    "Ein Anwalt verdient durchschnittlich 5.258 € brutto im Monat und arbeitet dafür etwa 55 Stunden pro Woche – rund 247 Stunden monatlich (Quelle: Stepstone).",
  conclusion:
    "Um denselben Betrag zu erzielen, benötigst du als digitaler Nomade bei 80 % Gewinn einen Umsatz von 6.572,50 €. Das entspricht bei einem durchschnittlichen Kundenwert von 1.314 € genau fünf Kunden – und einem effektiven Aufwand von nur 15 Stunden pro Kunde im Monat.",
  kicker: "Weniger Arbeit, mehr Freiheit – und ein Leben nach deinen Regeln.",
  columns: [
    {
      label: "Anwalt",
      tone: "muted" as const,
      rows: [
        { k: "Verdienst (brutto)", v: "≈ 5.258 € / Monat" },
        { k: "Arbeitszeit", v: "≈ 247 Std. / Monat" },
        { k: "Ortsgebunden", v: "Kanzlei & Termine" },
        { k: "Flexibilität", v: "Gering" },
      ],
    },
    {
      label: "Digitaler Nomade",
      sub: "mit 3–4 Kunden",
      tone: "brand" as const,
      rows: [
        { k: "Umsatz", v: "≈ 6.572,50 € / Monat" },
        { k: "Arbeitszeit", v: "≈ 15 Std. / Kunde" },
        { k: "Ortsunabhängig", v: "100 % remote" },
        { k: "Flexibilität", v: "Maximal" },
      ],
    },
  ],
};

/* --------------------------------------------------------- Testimonials */
export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  link?: string;
  image?: string; // real photo from the reference page, when available
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Letzten Monat hatte ich meinen besten Monat – da habe ich über 20.000 € Umsatz gemacht, nebenberuflich.",
    name: "Jonathan Chavannes",
    meta: "28 Jahre",
    image: "/brand/people/jonathan.webp",
  },
  {
    quote:
      "Ich war sehr unglücklich in meinem Job und wollte endlich weg. Ich brach meine Ausbildung ab und verdiene jetzt viel mehr als je zuvor. Ich bin unendlich dankbar und kann es jedem nur empfehlen.",
    name: "Irina Beier",
    meta: "23 Jahre",
    link: "https://www.instagram.com/irinaxmira",
    image: "/brand/people/irina.webp",
  },
  {
    quote:
      "Mit 27 Jahren, als zweifache Mutter aus Gießen, unterstütze ich Unternehmen erfolgreich im Recruiting von Pflegepersonal. Heute muss ich mir keine finanziellen Sorgen mehr machen.",
    name: "Ploy Boonmeeprasert",
    meta: "27 Jahre",
    link: "https://www.instagram.com/boonmee.marketing",
    image: "/brand/people/ploy.webp",
  },
  {
    quote:
      "Cedric war schon selbstständig, kam aber nicht richtig voran. Mit dem System machte er in den ersten 12 Tagen 3.500 € und insgesamt 15.000 € in drei Monaten.",
    name: "Cedric Hartmann",
    meta: "31 Jahre",
  },
  {
    quote:
      "Felix knackte bereits in den ersten drei Monaten die 10.000-€-Umsatzmarke und baute sich danach ein stabiles, langfristiges Online-Business auf.",
    name: "Felix",
    meta: "Versicherungskaufmann",
  },
  {
    quote:
      "Cassandra hatte keinerlei Erfahrung im Bereich Social Media. Trotzdem gewann sie innerhalb weniger Wochen ihre ersten Pilotprojekte und machte daraus zahlende Kunden.",
    name: "Cassandra",
    meta: "29 Jahre",
  },
];

export const TESTIMONIALS_META = {
  eyebrow: "Was unsere Kunden sagen",
  title: "Kundenfeedback und Bewertungen",
  cta: { label: "Weitere Fallstudien auf Expertenmarkt", href: CTA.caseStudies },
};

/* ------------------------------------------------------------ Eligibility */
export const ELIGIBILITY = {
  eyebrow: "Passt das zu dir?",
  title: "Unsere idealen Teilnehmer",
  intro:
    "Wir arbeiten ausschließlich mit Menschen, die entschlossen sind, ihre Träume zu verwirklichen und echte Ergebnisse zu erzielen.",
  items: [
    "Bereit, in ihren eigenen Erfolg zu investieren",
    "Ehrgeizig, lernbereit und motiviert, sich ständig weiterzuentwickeln",
    "Voller Energie und entschlossen, ihre Unabhängigkeit zu erreichen",
  ],
  closing:
    "Wenn du dich in diesen Werten wiedererkennst, bist du bei unserem Mentoring genau richtig.",
  cta: { label: "Für ein Strategiegespräch bewerben", href: CTA.strategy },
};

/* ------------------------------------------------------------ Verification */
export const VERIFICATION = {
  eyebrow: "Geprüft & ausgezeichnet",
  title: "Für maximale Sicherheit",
  body: "Wir haben unser Mentoring freiwillig vom Verbraucherschutz prüfen lassen – mit dem Ergebnis: ein bestätigtes Serviceversprechen ohne versteckte Mängel. Das bedeutet für dich: klare Abläufe, faire Zusammenarbeit und echte Verbindlichkeit.",
  meaning:
    "Du arbeitest mit einem Anbieter, der Verantwortung übernimmt und für seine Aussagen einsteht. Keine leeren Versprechen – sondern ein System, auf das du dich verlassen kannst.",
};

/* ----------------------------------------------------------------- Press */
export const PRESS = {
  eyebrow: "Presse",
  title: "DreamLife.now in den Medien",
  items: [
    {
      outlet: "fair-news.de",
      headline:
        "Der große Auswander-Guide: So startest du mit DreamLife.now in dein neues, freies Leben",
    },
    {
      outlet: "newsfenster.de",
      headline:
        "Interview mit Nico und Viktoria von DreamLife.now: So entstand das Erfolgsmodell",
    },
    {
      outlet: "artikel-auf-blogs.de",
      headline:
        "Wie junge Menschen mit DreamLife.now finanzielle und persönliche Freiheit erreichen",
    },
    {
      outlet: "business-presse.de",
      headline:
        "Interview mit Nico und Viktoria von DreamLife.now – So entstand das Erfolgsmodell",
    },
    {
      outlet: "newsnomade.de",
      headline:
        "Träume von Freiheit: ortsunabhängig arbeiten, Einkommen sichern, Alltag hinter sich lassen",
    },
    {
      outlet: "newsnomade.de",
      headline:
        "Zwei Wege, ein Ziel: Wie Cedric und Cassandra mit DreamLife.now ihr Leben verändert haben",
    },
  ],
};

/* ---------------------------------------------------------------- Coaches */
export const COACHES = {
  eyebrow: "Lerne unsere Coaches kennen",
  title: "Unsere Coaches & Experten",
  people: [
    { name: "Nico", role: "Founder", image: "/brand/people/nico.webp" },
    { name: "Viktoria", role: "Co-Founder", image: "/brand/people/viktoria.webp" },
    { name: "Felix Huber", role: "Marketingexperte", image: "/brand/people/felix-huber.webp" },
    { name: "Ploy", role: "Kundensupport", image: "/brand/people/ploy-coach.webp" },
    { name: "Irina Beier", role: "Kundensupport", image: "/brand/people/irina.webp" },
    { name: "Philipp", role: "Strategieberater", image: "/brand/people/philipp.webp" },
  ],
};

/* -------------------------------------------------------------------- FAQ */
export const FAQ = {
  eyebrow: "Häufig gestellte Fragen",
  title: "Alles, was du wissen musst",
  items: [
    {
      q: "Was ist die DreamLife Now-Methode?",
      a: "Die DreamLife Now-Methode ist ein Schritt-für-Schritt-Coaching-Programm, das dir zeigt, wie du ein ortsunabhängiges Online-Business aufbaust und dir ein stabiles Einkommen von 2.500 € bis 5.000 € oder mehr pro Monat aufbaust.",
    },
    {
      q: "Brauche ich Vorerfahrung im Online-Business?",
      a: "Nein. Unser Programm ist speziell für Anfänger konzipiert. Du erhältst Vorlagen, Strategien und persönliche Unterstützung – auch ohne Vorkenntnisse.",
    },
    {
      q: "Wie lange dauert es, bis ich erste Ergebnisse sehe?",
      a: "Viele Teilnehmer erzielen bereits innerhalb von 6–8 Wochen erste Ergebnisse. Dein Erfolg hängt jedoch von deinem Einsatz und deiner Umsetzung ab.",
    },
    {
      q: "Wie viel kann ich realistisch verdienen?",
      a: "Realistisch sind 2.500 € bis 5.000 € monatlich mit 3–5 Kunden. Einige Teilnehmer erzielen sogar deutlich höhere Umsätze – abhängig von Strategie und Engagement.",
    },
    {
      q: "Wie viel Zeit muss ich investieren?",
      a: "Je nach Ziel reichen oft 10–20 Stunden pro Woche. Viele starten nebenberuflich und skalieren später auf Vollzeit.",
    },
    {
      q: "Welche Tools benötige ich für das Online-Business?",
      a: "Du brauchst keine teuren oder komplizierten Tools. Wir zeigen dir Schritt für Schritt, welche Plattformen für Kundengewinnung, Marketing, Buchhaltung und Automatisierung wirklich sinnvoll sind – die meisten sind sogar kostenlos nutzbar.",
    },
    {
      q: "Kann ich das Programm neben meinem aktuellen Job machen?",
      a: "Ja, das Mentoring ist so aufgebaut, dass du es flexibel neben deinem Job, Studium oder anderen Verpflichtungen absolvieren kannst. Viele unserer Teilnehmer starten erfolgreich nebenbei, bevor sie den vollständigen Schritt in die Selbstständigkeit wagen.",
    },
    {
      q: "Muss ich Kunden selbst gewinnen oder werden sie vermittelt?",
      a: "Wir bringen dir das komplette System bei, wie du eigenständig Kunden findest und gewinnst. Dabei unterstützen wir dich mit Vorlagen, Strategien und praxisnahen Übungen. Kundenvermittlung erfolgt nicht direkt, aber du erhältst Zugang zu echten Praxisprojekten und Partnernetzwerken.",
    },
    {
      q: "Gibt es eine Erfolgsgarantie?",
      a: "Wir geben keine unrealistischen Versprechen, aber wir garantieren, dass du Schritt für Schritt alles erlernst, um ein ortsunabhängiges Online-Business aufzubauen. Dein Erfolg hängt von der Umsetzung ab, aber du bist nie allein auf diesem Weg.",
    },
    {
      q: "Ist das Geschäftsmodell wirklich ortsunabhängig?",
      a: "Ja. Du kannst von überall arbeiten – ob im Homeoffice, unterwegs auf Reisen oder im Ausland. Alles, was du brauchst, ist ein Laptop, Internet und die Motivation, dein Online-Business flexibel und erfolgreich zu gestalten.",
    },
    {
      q: "Wie funktioniert das kostenlose Strategiegespräch?",
      a: "Im Strategiegespräch analysieren wir deine aktuelle Situation, deine Ziele und prüfen, ob unser Mentoring zu dir passt. Das Gespräch ist kostenlos und unverbindlich.",
    },
    {
      q: "Welche Unterstützung erhalte ich im Programm?",
      a: "Du erhältst klare Schritt-für-Schritt-Anleitungen, bewährte Vorlagen & Systeme, persönliches Coaching sowie Strategien zur Kundengewinnung.",
    },
    {
      q: "Wie lange habe ich Zugriff auf die Lerninhalte?",
      a: "Du hast unbegrenzten Zugriff auf alle Videos, Vorlagen und Materialien – auch nach Abschluss des Programms. So kannst du jederzeit zurückgehen, auffrischen und weiterlernen.",
    },
    {
      q: "Was passiert, wenn ich einmal nicht live teilnehmen kann?",
      a: "Alle Live-Sessions werden aufgezeichnet. Du kannst die Aufzeichnungen jederzeit ansehen, sodass du keine Inhalte verpasst.",
    },
  ],
};

/* --------------------------------------------------------------- Final CTA */
export const FINAL_CTA = {
  eyebrow: "Dein Strategiegespräch",
  title: "Beginne noch heute deine Reise in ein freies Leben",
  body: "Mit der DreamLife Now-Methode in 6–8 Wochen Schritt für Schritt zur Freiheit. Im kostenlosen Strategiegespräch prüfen wir gemeinsam und unverbindlich, ob das Mentoring zu dir passt.",
  primaryCta: { label: "Kostenloses Strategiegespräch sichern", href: CTA.strategy },
  secondaryCta: { label: "Erst das Videotraining ansehen", href: CTA.video },
};

/* ----------------------------------------------------------------- Footer */
export const FOOTER = {
  tagline: "Wir bauen die Brücke zu deinem freien Leben.",
  columns: [
    {
      title: "Entdecken",
      links: [
        { label: "Erfolgsgeschichten", href: "#erfolgsgeschichten" },
        { label: "Über Nico & Viktoria", href: "#ueber-uns" },
        { label: "Kundenbewertungen", href: "#bewertungen" },
        { label: "Coaching & Mentoring", href: "#coaches" },
        { label: "Häufig gestellte Fragen", href: "#faq" },
      ],
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Startseite", href: "https://dreamlifenow.de/" },
        { label: "Business Plan", href: "https://businessplan.dreamlifenow.de" },
        { label: "Presse", href: "https://dreamlifenow.de/presse/" },
        { label: "Kontakt", href: CTA.email },
      ],
    },
  ],
  legal: [
    { label: "Impressum", href: "https://dreamlifenow.de/impressum/" },
    { label: "Datenschutz", href: "https://dreamlifenow.de/datenschutz/" },
    { label: "Barrierefreiheit", href: "https://dreamlifenow.de/barrierefreiheit/" },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/dreamlife.now/" },
    { label: "Facebook", href: "https://www.facebook.com/dreamlifenow.official/" },
    { label: "TikTok", href: "https://www.tiktok.com/@dreamlife.now_" },
    { label: "YouTube", href: "https://www.youtube.com/@auswanderguide" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nicolas-meining-b8602b217/",
    },
  ],
  address: [
    "1242 SW Pine Island Rd STE 42-348",
    "Cape Coral, Florida (FL) 33991",
    "Vereinigte Staaten von Amerika",
  ],
  email: "info@dreamlifenow.de",
};
