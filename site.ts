/* ==========================================================================
   MADE.BYAZKA — SITE CONTENT
   --------------------------------------------------------------------------
   This is the only file you need to edit for day-to-day updates.
   • Swap text, links and project details here.
   • Add a photo or artwork by putting a file in /public/images and setting
     its path on `image`. The artwork frames keep their crop and dimensions.
   • Colours and fonts live in src/index.css under "DESIGN TOKENS".
   ========================================================================== */

export const brand = {
  designer: "Azka",
  name: "made.byazka",
  handle: "@made.byazka",
  instagram: "https://www.instagram.com/made.byazka/",
  email: "aaazkafarhan0412@gmail.com",
  location: "Bahawalpur · Faisalabad, Pakistan",
  workingNote: "Working with kind humans worldwide",
  availability: "Open for select projects · 2026",
  logo: {
    /* Optional custom logo image, e.g. "/images/logo.svg". Leave blank to use the built-in logo. */
    image: "",
    wordmark: "made.byazka",
    tagline: "Graphic design & visual storytelling",
  },
  /* Add e.g. "/images/profile.jpg" to replace the monogram portrait. */
  profileImage: "",
  profileImageAlt: "Portrait of Azka, graphic designer and founder of made.byazka",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
  icon: "instagram" | "behance" | "linkedin" | "pinterest" | "mail";
};

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/made.byazka/",
    handle: "@made.byazka",
    icon: "instagram",
  },
  { label: "Behance", href: "https://www.behance.net/madebyazka", icon: "behance" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/madebyazka/", icon: "linkedin" },
  { label: "Pinterest", href: "https://www.pinterest.com/madebyazka/", icon: "pinterest" },
];

export const hero = {
  eyebrow: "Independent graphic designer · Pakistan",
  headlineTop: "Designing brands",
  headlineMiddle: "with a little more",
  headlineAccent: "soul.",
  intro:
    "I’m Azka — a graphic designer and visual storyteller creating thoughtful identities, packaging and digital moments for brands that want to feel as good as they look.",
  primaryCta: { label: "Explore my work", href: "#work" },
  secondaryCta: { label: "Start a project", href: "#contact" },
  instagramLabel: "Follow the studio",
  portraitNote: "Made with care, always.",
  signature: "Azka",
};

export const marqueeItems = [
  "Brand identity",
  "Graphic design",
  "Packaging",
  "Illustration",
  "Social media design",
  "UI/UX",
  "Art direction",
];

export const about = {
  eyebrow: "The person behind the pixels",
  titleLead: "A designer’s eye, a storyteller’s heart, and an",
  titleAccent: "obsession with the little things.",
  paragraphs: [
    "I’m Azka, the designer behind made.byazka. I believe the most memorable brands don’t just look beautiful — they feel human. My work sits at the intersection of strategy and soul, translating ideas into identities people want to hold, wear and share.",
    "From the first sketch to the final file, I bring curiosity, care and a healthy dose of colour. Based in Pakistan and collaborating with kind humans worldwide — one considered detail at a time.",
  ],
  /* Optional: "/images/about.jpg" — falls back to the studio collage artwork. */
  image: "",
  imageAlt: "A glimpse inside the made.byazka studio and its collection of brand work",
  imageCaption: "A little window into the studio",
  imageNote: "Behind the brand",
  stats: [
    { value: "30+", label: "Projects shaped" },
    { value: "12", label: "Brands launched" },
    { value: "Since 2026", label: "Designing with love" },
  ],
  values: ["Intentional", "Warm", "Detail-obsessed"],
};

export const services = {
  eyebrow: "What I do",
  titleLead: "A thoughtful mix of",
  titleAccent: "strategy, style & soul.",
  intro:
    "Whether you’re starting from a blank page or ready for a refresh, each project is shaped around your story — never a template.",
  items: [
    {
      icon: "brand" as const,
      title: "Brand identity & strategy",
      description:
        "Positioning, moodboards, visual identity and brand guidelines that give your business a clear, confident voice.",
      tags: ["Brand strategy", "Logo systems", "Guidelines"],
    },
    {
      icon: "design" as const,
      title: "Graphic design",
      description:
        "Editorial layouts, print collateral, posters and campaign visuals with an editorial eye for rhythm and type.",
      tags: ["Editorial", "Print", "Campaigns"],
    },
    {
      icon: "social" as const,
      title: "Social media design",
      description:
        "Scroll-stopping content systems, launch campaigns and templates that keep your feed feeling intentional.",
      tags: ["Content systems", "Campaigns", "Templates"],
    },
    {
      icon: "illustration" as const,
      title: "Illustration & art direction",
      description:
        "Custom illustration, patterns and visual worlds that make your brand impossible to confuse with anyone else.",
      tags: ["Illustration", "Pattern", "Art direction"],
    },
    {
      icon: "ui" as const,
      title: "UI/UX design",
      description:
        "Landing pages, mobile screens and design systems where the beauty is matched by clarity and ease.",
      tags: ["Web design", "Mobile UI", "Prototypes"],
    },
    {
      icon: "package" as const,
      title: "Packaging & print",
      description:
        "Tactile brand moments — from labels and boxes to stationery — designed to be noticed, held and remembered.",
      tags: ["Packaging", "Labels", "Stationery"],
    },
  ],
  tools: [
    { name: "Figma", short: "Fi" },
    { name: "Adobe Illustrator", short: "Ai" },
    { name: "Adobe Photoshop", short: "Ps" },
    { name: "Adobe InDesign", short: "Id" },
    { name: "After Effects", short: "Ae" },
    { name: "Canva", short: "C" },
  ],
};

export const work = {
  eyebrow: "Selected work",
  titleLead: "A few stories",
  titleAccent: "I’ve helped tell.",
  intro:
    "A small collection of identities, illustrations and campaigns made with curiosity, colour and a whole lot of care.",
  viewAll: "Browse the full showcase",
};

export type ArtworkKey =
  | "cholistan"
  | "desi"
  | "bedazzled"
  | "purpleReverie"
  | "be"
  | "collection";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  shortDescription: string;
  overview: string;
  services: string[];
  deliverables: string[];
  artwork: ArtworkKey;
  image?: string;
  imageAlt: string;
  categories: string[];
  palette: string[];
  ratio: "portrait" | "landscape" | "square";
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "cholistan-the-desert-deck",
    title: "Cholistan",
    subtitle: "The Desert Deck",
    category: "Brand identity · Packaging · Illustration",
    year: "2025",
    client: "Self-initiated",
    shortDescription:
      "A visual love letter to the dunes, forts and stories of Bahawalpur — translated into a collectible card deck.",
    overview:
      "Cholistan: The Desert Deck is an exploration of place through illustration. The identity draws on the warm palette of the Thar desert, the geometry of historic forts and the quiet charm of local wildlife, bringing them together in a set of twelve illustrated cards.",
    services: ["Art direction", "Identity design", "Illustration", "Packaging"],
    deliverables: ["Logo & type treatment", "Card system", "Packaging artwork", "Colour direction"],
    artwork: "cholistan",
    imageAlt:
      "Cholistan: The Desert Deck — illustrated card artwork in warm terracotta, sand and chocolate tones with camels, a historic fort and a decorative border.",
    categories: ["Branding", "Packaging", "Illustration"],
    palette: ["#f2dfb8", "#b65c3b", "#3a2115", "#e6c99e"],
    ratio: "portrait",
    featured: true,
  },
  {
    id: "desi-five-personalities",
    title: "Desi",
    subtitle: "Five personalities, one word",
    category: "Social media · Art direction",
    year: "2025",
    client: "Self-initiated",
    shortDescription:
      "A seven-slide social campaign exploring the many personalities hidden inside one very familiar word.",
    overview:
      "How can one word hold so many ways of being? This editorial social series leans into playful typography, candy-pink gloss and honest, relatable copy to celebrate the layered identity of being ‘desi’ today.",
    services: ["Creative direction", "Social media design", "Typography", "Copy direction"],
    deliverables: ["7-slide carousel", "Story templates", "Motion prompts", "Caption direction"],
    artwork: "desi",
    imageAlt:
      "Desi social media poster with the headline ‘Can one word have 5 personalities?’ and glossy candy-pink three-dimensional lettering.",
    categories: ["Social", "Posters"],
    palette: ["#f5f0e4", "#e9427b", "#74153d", "#2d2226"],
    ratio: "portrait",
    featured: true,
  },
  {
    id: "bedazzled-rickshaw",
    title: "Desi, but make it Bedazzled",
    subtitle: "A love letter to street art",
    category: "Poster · Illustration",
    year: "2024",
    client: "Self-initiated",
    shortDescription:
      "A maximalist celebration of Pakistani truck art, rhinestone sparkle and the joyful freedom of doing the most.",
    overview:
      "A poster that refuses to whisper. Inspired by the brilliant ornamentation of South Asian transport art, this piece layers gem-like details, acid-bright colour and bold typography into a love letter to expressive design.",
    services: ["Illustration", "Poster design", "Art direction", "Typography"],
    deliverables: ["A2 poster", "Digital artwork", "Print colourway"],
    artwork: "bedazzled",
    imageAlt:
      "Colourful poster illustration of a bedazzled rickshaw in fuchsia and navy with rhinestones, stars and bold pink typography.",
    categories: ["Posters", "Illustration"],
    palette: ["#efe7cf", "#b01d69", "#25326b", "#f1a11b"],
    ratio: "portrait",
    featured: false,
  },
  {
    id: "purple-reverie",
    title: "Purple Reverie",
    subtitle: "A paper-cut landscape",
    category: "Illustration · Print",
    year: "2025",
    client: "Self-initiated",
    shortDescription:
      "A hand-cut paper landscape where quiet forests and a curious deer live in layers of lavender and plum.",
    overview:
      "An experiment in depth and stillness. Cut-paper layers create a dreamlike forest scene, each shade of mauve revealing a little more of the story. Created as an art print and a flexible visual world for editorial use.",
    services: ["Paper-cut illustration", "Colour study", "Print design"],
    deliverables: ["Art print", "Digital illustration", "Editorial crops"],
    artwork: "purpleReverie",
    imageAlt:
      "Purple paper-cut illustration of a layered forest landscape with trees and a deer framed by an organic lilac shape.",
    categories: ["Illustration", "Print"],
    palette: ["#f2f0ee", "#ddb8e4", "#a560b8", "#58135f"],
    ratio: "portrait",
    featured: true,
  },
  {
    id: "be-type-study",
    title: "Be",
    subtitle: "A study in volume & voice",
    category: "Typography · Poster",
    year: "2024",
    client: "Typographic study",
    shortDescription:
      "A study in volume, colour and confidence — because sometimes the simplest word makes the loudest statement.",
    overview:
      "Be is a typographic investigation into how dimension and colour change the way we read a word. Acid teal, navy and warm yellow collide in two sculptural letters, turning a quiet verb into a full-volume declaration.",
    services: ["Lettering", "3D type study", "Poster design"],
    deliverables: ["Poster artwork", "Social crops", "Type exploration sheet"],
    artwork: "be",
    imageAlt:
      "Yellow three-dimensional typography reading ‘BE’ on a deep navy panel with a bright teal border.",
    categories: ["Posters", "Typography"],
    palette: ["#16cdb5", "#101c5c", "#f3ce3b", "#a3870f"],
    ratio: "portrait",
    featured: false,
  },
  {
    id: "atelier-collection",
    title: "Atelier Collection",
    subtitle: "Identity in every touchpoint",
    category: "Brand identity · Packaging · UI/UX",
    year: "2025",
    client: "Studio capsule",
    shortDescription:
      "A curated studio capsule showing how one visual language can move beautifully from print to product to screen.",
    overview:
      "A collection of identity systems, packaging concepts and digital products from the studio — brought together to show how considered design creates a consistent, tactile world across every touchpoint.",
    services: ["Identity systems", "Packaging", "Editorial", "UI design"],
    deliverables: ["Brand board", "Business stationery", "Packaging concept", "Mobile UI concept"],
    artwork: "collection",
    imageAlt:
      "Studio collection collage of brand cards, a Cholistan card, a pink DESI card, a lilac business card and a mobile finance app mockup.",
    categories: ["Branding", "Packaging", "UI/UX"],
    palette: ["#e8ddd0", "#462536", "#b88975", "#f4c0cf"],
    ratio: "portrait",
    featured: true,
  },
];

export const showcase = {
  eyebrow: "The showcase",
  titleLead: "Fragments from",
  titleAccent: "the studio.",
  intro: "Posters, packaging, identities, little experiments and everything in between.",
  filters: ["All", "Branding", "Social", "Illustration", "Posters", "Packaging", "UI/UX"],
};

export const process = {
  eyebrow: "The process",
  titleLead: "Good work takes",
  titleAccent: "a little patience.",
  intro:
    "No mysterious leaps, no last-minute surprises. Just a considered, collaborative journey from the first conversation to the final files.",
  steps: [
    {
      number: "01",
      title: "Listen & research",
      tag: "The discovery",
      description:
        "We begin with the why. Your audience, your ambition, your world — I listen carefully before I draw anything.",
    },
    {
      number: "02",
      title: "Find the concept",
      tag: "The direction",
      description:
        "A clear creative strategy and visual direction, built around a story only your brand can tell.",
    },
    {
      number: "03",
      title: "Design & explore",
      tag: "The making",
      description:
        "Type, colour and form come together through generous exploration and one or two happy accidents.",
    },
    {
      number: "04",
      title: "Refine together",
      tag: "The polish",
      description:
        "We shape every detail until it feels effortless, intentional and completely, unmistakably yours.",
    },
    {
      number: "05",
      title: "Launch beautifully",
      tag: "The handover",
      description:
        "Final files, practical guidelines and a brand ready to show up beautifully in the world.",
    },
  ],
  note: "Thoughtful by design",
  footerNote: "Every project begins with a conversation. Yours can start here.",
};

export const contact = {
  eyebrow: "Let’s work together",
  titleTop: "Have a beautiful idea?",
  titleAccent: "Let’s make it real.",
  intro:
    "Whether you need a brand that finally feels like you, a launch worth remembering, or simply a second pair of design eyes — I’d love to hear about it.",
  primaryCta: { label: "Start a conversation", href: "mailto:aaazkafarhan0412@gmail.com" },
  secondaryCta: { label: "Message me on Instagram", href: "https://www.instagram.com/made.byazka/" },
  emailLabel: "Prefer email?",
  note: "Kindly note: I take on a limited number of projects each month so every brand gets the attention it deserves.",
  responseNote: "Usually replies within 2–3 working days",
};

export const footer = {
  blurb:
    "A small design studio with a big soft spot for thoughtful brands, beautiful paper and stories worth telling.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Selected work", href: "#work" },
        { label: "About Azka", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Brand identity", href: "#services" },
        { label: "Packaging design", href: "#services" },
        { label: "Illustration", href: "#services" },
        { label: "Social design", href: "#services" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} made.byazka. All rights reserved.`,
  credit: "Designed & built with care.",
};
