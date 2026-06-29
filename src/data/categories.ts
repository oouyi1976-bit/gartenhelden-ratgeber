export type CategorySlug =
  | "gartengeraete"
  | "rasenpflege"
  | "hochbeet"
  | "bewaesserung"
  | "gartenmoebel"
  | "balkon-garten"
  | "pflanzenpflege"
  | "ordnung-aufbewahrung";

export interface GardenCategory {
  slug: CategorySlug;
  title: string;
  description: string;
  intro: string;
  image: string;
  highlights: string[];
}

export const categories: GardenCategory[] = [
  {
    slug: "gartengeraete",
    title: "Gartengeräte",
    description: "Scheren, Handschuhe, Schaufeln, Harken, Gartensäcke und kleine Helfer für den Alltag im Garten.",
    intro:
      "Gute Gartengeräte müssen nicht spektakulär wirken. Wichtig sind eine angenehme Handhabung, robuste Materialien und eine Auswahl, die zu Beet, Balkon und Rasen passt.",
    image: "/garden-product-images/tools-01.jpg",
    highlights: ["Schneiden & Pflanzen", "Handschuhe & Schutz", "Praktische Helfer"],
  },
  {
    slug: "rasenpflege",
    title: "Rasenpflege",
    description: "Rasensamen, Dünger, Vertikutierer, Rasenkanten und Pflegezubehör für dichten, belastbaren Rasen.",
    intro:
      "Rasen wirkt am besten, wenn die Pflege in ruhigen Schritten geplant wird: messen, nachsäen, düngen, wässern und nur bei Bedarf vertikutieren.",
    image: "/garden-product-images/lawn-water-01.jpg",
    highlights: ["Nachsäen", "Düngen", "Kanten & Boden"],
  },
  {
    slug: "hochbeet",
    title: "Hochbeet",
    description: "Hochbeete, Erde, Pflanzvlies, Schneckenschutz und Zubehör für Gemüse, Kräuter und Blumen.",
    intro:
      "Ein Hochbeet bringt Ordnung in kleine und große Gärten. Entscheidend sind Standort, Füllung, Schutz vor Austrocknung und eine sinnvolle Fruchtfolge.",
    image: "/garden-product-images/raised-balcony-01.jpg",
    highlights: ["Beete & Rahmen", "Erde & Vlies", "Schneckenschutz"],
  },
  {
    slug: "bewaesserung",
    title: "Bewässerung",
    description: "Gartenschläuche, Schlauchwagen, Tropfbewässerung, Sprinkler und Bewässerungsuhren.",
    intro:
      "Eine gute Bewässerung spart Zeit und hilft Pflanzen durch trockene Phasen. Je nach Fläche sind Schlauch, Sprinkler oder Tropfsystem sinnvoll.",
    image: "/garden-product-images/lawn-water-06.jpg",
    highlights: ["Schlauchsysteme", "Sprinkler", "Automatisierung"],
  },
  {
    slug: "gartenmoebel",
    title: "Gartenmöbel",
    description: "Gartenstühle, Tische, Auflagenboxen, Sonnenschutz und kleine Balkonmöbel für entspannte Außenbereiche.",
    intro:
      "Möbel für draußen sollen bequem, pflegeleicht und platzsparend sein. Material, Stauraum und Wetterschutz zählen mehr als kurzfristige Trends.",
    image: "/garden-product-images/furniture-storage-03.jpg",
    highlights: ["Sitzplätze", "Sonnenschutz", "Aufbewahrung"],
  },
  {
    slug: "balkon-garten",
    title: "Balkon-Garten",
    description: "Balkonkästen, kleine Hochbeete, Rankhilfen, Kräuter und Pflanzgefäße für wenig Platz.",
    intro:
      "Auch ein kleiner Balkon kann ein produktiver Garten werden. Wichtig sind stabile Gefäße, passende Erde, Wasserführung und windfeste Rankhilfen.",
    image: "/garden-product-images/raised-balcony-07.jpg",
    highlights: ["Kästen & Töpfe", "Kräuter", "Rankhilfen"],
  },
  {
    slug: "pflanzenpflege",
    title: "Pflanzenpflege",
    description: "Dünger, Erde, Pflanzenschutz, Rankhilfen und Handsprüher für gesunde Pflanzen.",
    intro:
      "Pflanzenpflege wird leichter, wenn Erde, Nährstoffe und Wasser zusammen betrachtet werden. Kleine Werkzeuge helfen, Probleme früh zu erkennen.",
    image: "/garden-product-images/raised-balcony-12.jpg",
    highlights: ["Düngen", "Stützen", "Sprühpflege"],
  },
  {
    slug: "ordnung-aufbewahrung",
    title: "Ordnung & Aufbewahrung",
    description: "Körbe, Schränke, Regale, Abdeckungen und Taschen für mehr Ruhe im Gartenalltag.",
    intro:
      "Wer Werkzeug und Zubehör trocken, griffbereit und gut sortiert lagert, spart bei jeder Gartenrunde Zeit und schützt die Anschaffungen.",
    image: "/garden-product-images/furniture-storage-11.jpg",
    highlights: ["Schränke", "Regale", "Schutzhüllen"],
  },
];

export const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
