import type { ProductCategory } from "./gardenProducts";

export interface ArticleSection {
  heading: string;
  body: string[];
}

export interface GardenArticle {
  slug: string;
  title: string;
  description: string;
  category: ProductCategory;
  image: string;
  readingTime: string;
  updatedAt: string;
  sections: ArticleSection[];
}

export const articles: GardenArticle[] = [
  {
    slug: "garten-fuer-anfaenger",
    title: "Garten für Anfänger: ruhig starten statt alles auf einmal",
    description:
      "Ein verständlicher Einstieg für neue Gartenbesitzer: Standort beobachten, passende Werkzeuge wählen und die ersten Beete planen.",
    category: "Gartengeräte",
    image: "/images/hero-garden-workbench.png",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Erst beobachten, dann kaufen",
        body: [
          "Ein neuer Garten wirkt am Anfang oft größer als die eigene Erfahrung. Der beste erste Schritt ist deshalb nicht der Großeinkauf, sondern eine kurze Bestandsaufnahme: Wo ist morgens Sonne, wo bleibt der Boden lange feucht und welche Bereiche werden wirklich genutzt?",
          "Notiere für zwei Wochen, welche Wege du gehst und welche Ecken dich stören. Daraus entsteht meist eine deutlich bessere Einkaufsliste als aus spontanen Wunschbildern.",
        ],
      },
      {
        heading: "Die sinnvolle Grundausstattung",
        body: [
          "Für den Start reichen meist Handschuhe, Handkelle, kleine Harke, Gartenschere, Gießkanne und ein stabiler Gartensack. Größere Geräte kommen erst dazu, wenn klar ist, ob du viel Rasen, mehrere Beete oder eher Kübelpflanzen pflegst.",
          "Achte auf angenehme Griffe und einfache Reinigung. Ein Werkzeug, das gut in der Hand liegt, wird häufiger benutzt und hält den Gartenalltag leichter.",
        ],
      },
      {
        heading: "Kleine Routinen helfen mehr als große Aktionen",
        body: [
          "Zehn Minuten Jäten, regelmäßiges Gießen am Morgen und ein wöchentlicher Blick auf Blätter, Erde und Schädlinge bringen oft mehr als seltene Kraftakte. So erkennst du Probleme früh und musst weniger retten.",
        ],
      },
    ],
  },
  {
    slug: "hochbeet-richtig-befuellen",
    title: "Hochbeet richtig befüllen: Schichten, Erde und Timing",
    description:
      "So wird ein Hochbeet sinnvoll aufgebaut: von grobem Schnittgut über Kompost bis zur oberen Pflanzschicht.",
    category: "Hochbeet",
    image: "/garden-product-images/raised-balcony-01.jpg",
    readingTime: "7 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Warum Schichten im Hochbeet sinnvoll sind",
        body: [
          "Ein Hochbeet funktioniert besonders gut, wenn Wasser ablaufen kann und organisches Material langsam verrottet. Grobes Material unten schafft Luft, feinere Erde oben gibt den Wurzeln Halt.",
          "Typisch ist unten eine Drainageschicht aus Ästen und grobem Schnittgut, darüber Laub oder Häcksel, dann Kompost und zum Schluss hochwertige Pflanzerde.",
        ],
      },
      {
        heading: "Nicht jede Pflanze braucht die gleiche Mischung",
        body: [
          "Starkzehrer wie Tomaten, Zucchini oder Kürbis mögen nährstoffreiche Erde. Kräuter wie Rosmarin und Thymian stehen lieber magerer und durchlässiger. Plane deshalb die Bepflanzung, bevor du große Mengen Erde kaufst.",
        ],
      },
      {
        heading: "Nachfüllen gehört dazu",
        body: [
          "Die Füllung sackt in den ersten Monaten sichtbar ab. Das ist normal. Fülle im Frühjahr frische Erde oder Kompost nach und prüfe, ob die Oberfläche noch locker bleibt.",
        ],
      },
    ],
  },
  {
    slug: "rasen-im-fruehjahr-pflegen",
    title: "Rasen im Frühjahr pflegen: Schritt für Schritt zu mehr Dichte",
    description:
      "Frühjahrspflege für den Rasen ohne Hektik: aufräumen, mähen, nachsäen, düngen und passend wässern.",
    category: "Rasenpflege",
    image: "/garden-product-images/lawn-water-16.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Warte auf aktives Wachstum",
        body: [
          "Zu frühe Pflege kann mehr schaden als helfen. Beginne erst, wenn der Boden nicht mehr nass-kalt ist und der Rasen sichtbar wächst. Dann lassen sich Moos, Laub und abgestorbene Halme leichter entfernen.",
        ],
      },
      {
        heading: "Nachsaat braucht Bodenkontakt",
        body: [
          "Kahle Stellen sollten leicht angeraut werden, damit Samen nicht nur oben liegen. Danach dünn abdecken, andrücken und gleichmäßig feucht halten. Ein feiner Sprühstrahl ist besser als ein harter Wasserstoß.",
        ],
      },
      {
        heading: "Düngen mit Maß",
        body: [
          "Rasendünger wirkt am gleichmäßigsten, wenn er sauber verteilt und anschließend eingeregnet wird. Ein Streuwagen kann helfen, Überlappungen und helle Streifen zu vermeiden.",
        ],
      },
    ],
  },
  {
    slug: "bewaesserung-im-sommer",
    title: "Bewässerung im Sommer: seltener, dafür gründlicher gießen",
    description:
      "Praktische Hinweise für heiße Wochen: richtige Tageszeit, Tropfbewässerung, Mulch und Wassermenge.",
    category: "Bewässerung",
    image: "/garden-product-images/lawn-water-08.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Morgens ist meist die beste Zeit",
        body: [
          "In den frühen Morgenstunden verdunstet weniger Wasser und Blätter trocknen im Laufe des Tages ab. Abends bleibt Feuchtigkeit länger stehen, was bei empfindlichen Pflanzen Pilzprobleme begünstigen kann.",
        ],
      },
      {
        heading: "Tief gießen statt Oberfläche befeuchten",
        body: [
          "Kurzes tägliches Sprenkeln erreicht oft nur die obere Bodenschicht. Gründliches Gießen in größeren Abständen motiviert Wurzeln, tiefer zu wachsen. Bei Kübeln ist die Kontrolle mit dem Finger oder Feuchtemesser sinnvoll.",
        ],
      },
      {
        heading: "Systeme passend zur Fläche wählen",
        body: [
          "Für Gemüsebeete und Hecken ist Tropfbewässerung oft effizient. Rasenflächen lassen sich mit einem passenden Sprinkler versorgen, sollten aber nicht bei starkem Wind beregnet werden.",
        ],
      },
    ],
  },
  {
    slug: "balkon-garten-anlegen",
    title: "Balkon-Garten anlegen: viel Grün auf wenig Fläche",
    description:
      "So werden Kästen, Töpfe, Kräuter und Rankhilfen auf dem Balkon sinnvoll kombiniert.",
    category: "Balkon-Garten",
    image: "/garden-product-images/raised-balcony-07.jpg",
    readingTime: "5 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Traglast und Wind zuerst prüfen",
        body: [
          "Bevor viele große Kübel einziehen, lohnt ein Blick auf Balkonstatik, Windrichtung und Wasserabfluss. Nasse Erde ist schwer, und hohe Rankhilfen brauchen einen sicheren Stand.",
        ],
      },
      {
        heading: "Mit wenigen Pflanztypen starten",
        body: [
          "Kräuter, robuste Sommerblumen und ein bis zwei Naschpflanzen reichen für den Anfang. Zu viele verschiedene Ansprüche machen Gießen und Düngen unnötig kompliziert.",
        ],
      },
      {
        heading: "Höhe nutzen",
        body: [
          "Regale, Rankgitter und hängende Kästen vergrößern die Pflanzfläche, ohne den Boden komplett zuzustellen. Achte darauf, dass du alle Pflanzen noch gut erreichst.",
        ],
      },
    ],
  },
  {
    slug: "welche-gartengeraete-braucht-man-wirklich",
    title: "Welche Gartengeräte braucht man wirklich?",
    description:
      "Eine ehrliche Grundausstattung für Beet, Balkon und Rasen, ohne überflüssige Spezialgeräte.",
    category: "Gartengeräte",
    image: "/garden-product-images/tools-15.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Die Basis für fast alle Gärten",
        body: [
          "Handschuhe, Gartenschere, Handkelle, kleine Harke, Gießkanne und ein Sammelbehälter lösen erstaunlich viele Aufgaben. Erst wenn eine Arbeit regelmäßig nervt, lohnt ein Spezialgerät.",
        ],
      },
      {
        heading: "Rasen braucht andere Helfer als Hochbeet",
        body: [
          "Bei Rasenflächen kommen Kantenstecher, Streuwagen oder Vertikutierer dazu. Im Hochbeet sind eher Pflanzschilder, Vlies, kleine Schaufeln und Rankhilfen nützlich.",
        ],
      },
      {
        heading: "Qualität zeigt sich im Alltag",
        body: [
          "Glatte Kanten, feste Verbindungen und gut zu reinigende Oberflächen sind wichtiger als ein großer Lieferumfang. Ein kleines, solides Set schlägt eine volle Kiste schwacher Werkzeuge.",
        ],
      },
    ],
  },
  {
    slug: "kraeuter-auf-dem-balkon",
    title: "Kräuter auf dem Balkon: Standort, Erde und Pflege",
    description:
      "Basilikum, Petersilie, Rosmarin und Co. richtig kombinieren und pflegen.",
    category: "Balkon-Garten",
    image: "/garden-product-images/raised-balcony-09.jpg",
    readingTime: "5 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Kräuter haben unterschiedliche Ansprüche",
        body: [
          "Mediterrane Kräuter wie Rosmarin, Thymian und Oregano mögen viel Sonne und eher magere, durchlässige Erde. Basilikum, Schnittlauch und Petersilie brauchen meist gleichmäßigere Feuchtigkeit.",
        ],
      },
      {
        heading: "Nicht alles in einen Topf setzen",
        body: [
          "Kräuter mit ähnlichen Bedürfnissen können zusammenstehen. Gegensätze sollten getrennt wachsen, damit beim Gießen nicht eine Pflanze austrocknet und die andere dauerhaft zu nass bleibt.",
        ],
      },
      {
        heading: "Regelmäßig ernten",
        body: [
          "Häufiges Schneiden hält viele Kräuter kompakt und aromatisch. Schneide nicht nur einzelne Blätter ab, sondern kürze Triebe so, dass die Pflanze buschiger nachwächst.",
        ],
      },
    ],
  },
  {
    slug: "schnecken-im-hochbeet-vermeiden",
    title: "Schnecken im Hochbeet vermeiden: vorbeugen statt verzweifeln",
    description:
      "Mechanische Barrieren, kluge Pflanzung und tägliche Kontrolle helfen bei Schneckenproblemen.",
    category: "Hochbeet",
    image: "/garden-product-images/raised-balcony-05.jpg",
    readingTime: "5 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Jungpflanzen sind besonders gefährdet",
        body: [
          "Frisch gesetzte Salate, Kohlrabi und Kräuter sind für Schnecken leicht erreichbar. In den ersten Wochen lohnt die tägliche Kontrolle am Abend oder frühen Morgen.",
        ],
      },
      {
        heading: "Barrieren richtig einsetzen",
        body: [
          "Kupferbänder, Schneckenzäune oder Schutzringe können helfen, wenn sie lückenlos sitzen und keine Pflanzen darüber hängen. Auch Wege aus trockenem, offenem Material bremsen Schnecken eher als feuchte Verstecke.",
        ],
      },
      {
        heading: "Das Hochbeet trocken und übersichtlich halten",
        body: [
          "Mulch ist nützlich, kann aber Verstecke bieten. Halte die Beetkante frei und gieße morgens, damit die Oberfläche abends nicht unnötig feucht ist.",
        ],
      },
    ],
  },
  {
    slug: "garten-kindersicher-machen",
    title: "Garten kindersicher machen: Risiken ruhig reduzieren",
    description:
      "Wie Werkzeuge, Wasserstellen, Pflanzen und Möbel im Familiengarten sicherer werden.",
    category: "Ordnung & Aufbewahrung",
    image: "/garden-product-images/furniture-storage-11.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Werkzeuge gehören weggeräumt",
        body: [
          "Scharfe Geräte, Dünger, Pflanzenschutzmittel und lange Schläuche sollten nicht offen herumliegen. Ein abschließbarer Schrank oder eine hohe, trockene Ablage reduziert viele Alltagssituationen.",
        ],
      },
      {
        heading: "Wasserstellen ernst nehmen",
        body: [
          "Teiche, Regentonnen und Planschbecken brauchen besondere Aufmerksamkeit. Abdeckungen, sichere Deckel und klare Regeln sind wichtiger als jede schöne Gestaltungsidee.",
        ],
      },
      {
        heading: "Giftige Pflanzen kennen",
        body: [
          "Viele beliebte Gartenpflanzen sind nicht zum Essen geeignet. Wer kleine Kinder im Garten hat, sollte Pflanzenlisten prüfen und besonders auffällige Beeren oder Samenstände bewusst platzieren.",
        ],
      },
    ],
  },
  {
    slug: "kleine-gaerten-schoen-gestalten",
    title: "Kleine Gärten schön gestalten: Ordnung, Höhe und klare Linien",
    description:
      "Gestaltungsideen für kleine Flächen, damit Garten, Terrasse oder Innenhof ruhig und größer wirken.",
    category: "Gartenmöbel",
    image: "/garden-product-images/furniture-storage-09.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Weniger Materialien wirken ruhiger",
        body: [
          "Kleine Gärten profitieren von einer begrenzten Auswahl an Belägen, Töpfen und Farben. Wiederholungen schaffen Ruhe und lassen die Fläche geplanter wirken.",
        ],
      },
      {
        heading: "Stauraum ist Gestaltung",
        body: [
          "Kisten, Regale und Geräteschränke wirken nicht nur praktisch. Sie verhindern, dass jedes Werkzeug sichtbar bleibt und die Fläche kleiner erscheinen lässt.",
        ],
      },
      {
        heading: "Sitzplatz bewusst platzieren",
        body: [
          "Ein kleiner Tisch oder eine Bank sollte dort stehen, wo du gern hinschaust. Schon eine Ecke mit Schatten, Kräutern und klarer Kante kann sich wie ein eigener Gartenraum anfühlen.",
        ],
      },
    ],
  },
  {
    slug: "gartenmoebel-richtig-lagern",
    title: "Gartenmöbel richtig lagern: sauber, trocken und gut geschützt",
    description:
      "So bleiben Stühle, Tische, Auflagen und Sonnenschutz länger schön.",
    category: "Gartenmöbel",
    image: "/garden-product-images/furniture-storage-04.jpg",
    readingTime: "5 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Vor dem Einlagern reinigen",
        body: [
          "Erde, Pollen und feuchte Blätter greifen Oberflächen an und fördern Stockflecken. Möbel sollten trocken und sauber eingelagert werden, bevor sie länger abgedeckt stehen.",
        ],
      },
      {
        heading: "Auflagen brauchen Luft",
        body: [
          "Kissen und Polster gehören trocken in eine Box, einen Schrank oder einen Innenraum. Dauerhafte Feuchtigkeit ist der häufigste Grund für unangenehme Gerüche.",
        ],
      },
      {
        heading: "Abdeckungen nicht luftdicht nutzen",
        body: [
          "Eine Schutzhülle ist hilfreich, sollte aber nicht wie eine Plastiktüte anliegen. Kleine Luftwege verhindern Kondenswasser und schützen Materialien besser.",
        ],
      },
    ],
  },
  {
    slug: "kompost-einfach-erklaert",
    title: "Kompost einfach erklärt: aus Gartenresten wird Bodenleben",
    description:
      "Was auf den Kompost darf, warum Luft wichtig ist und wann Kompost reif genug für Beete ist.",
    category: "Hochbeet",
    image: "/garden-product-images/raised-balcony-13.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Die Mischung macht den Unterschied",
        body: [
          "Kompost braucht grüne, feuchte Materialien und trockenere, strukturreiche Bestandteile. Rasenschnitt sollte deshalb dünn verteilt und mit Zweigen, Laub oder Häcksel gemischt werden.",
        ],
      },
      {
        heading: "Luft ist wichtiger als Druck",
        body: [
          "Ein zu stark verdichteter Kompost fault leichter. Grobes Material und gelegentliches Umsetzen bringen Sauerstoff hinein und unterstützen die Zersetzung.",
        ],
      },
      {
        heading: "Reifen Kompost sparsam nutzen",
        body: [
          "Fertiger Kompost riecht erdig und ist krümelig. Er verbessert Beete, ersetzt aber nicht automatisch jede Erde. Für Jungpflanzen sollte er gut ausgereift und fein gesiebt sein.",
        ],
      },
    ],
  },
  {
    slug: "pflanzen-richtig-duengen",
    title: "Pflanzen richtig düngen: Nährstoffe ohne Übertreibung",
    description:
      "Wie du Dünger passend zu Pflanze, Saison und Substrat einsetzt.",
    category: "Pflanzenpflege",
    image: "/garden-product-images/lawn-water-02.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Erst Bedarf verstehen",
        body: [
          "Nicht jede Pflanze braucht viel Dünger. Kräuter, Stauden und Kübelpflanzen unterscheiden sich deutlich. Gelbe Blätter können Nährstoffmangel bedeuten, aber auch durch zu viel Wasser, Kälte oder Standortstress entstehen.",
        ],
      },
      {
        heading: "Dosierung ernst nehmen",
        body: [
          "Mehr Dünger führt nicht automatisch zu mehr Wachstum. Überdüngung kann Wurzeln schädigen und Pflanzen anfälliger machen. Halte dich an Dosierhinweise und dünge lieber regelmäßig moderat.",
        ],
      },
      {
        heading: "Saison beachten",
        body: [
          "Im Frühjahr und Frühsommer wachsen viele Pflanzen aktiv. Später im Jahr ist Zurückhaltung sinnvoll, damit Triebe ausreifen und Pflanzen nicht unnötig weich in den Winter gehen.",
        ],
      },
    ],
  },
  {
    slug: "garten-im-herbst-vorbereiten",
    title: "Garten im Herbst vorbereiten: aufräumen, schützen, planen",
    description:
      "Herbstarbeiten für Beete, Rasen, Kübel und Möbel, ohne den Garten leerzuräumen.",
    category: "Ordnung & Aufbewahrung",
    image: "/garden-product-images/tools-07.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Nicht alles muss weg",
        body: [
          "Ein ordentlicher Herbstgarten bedeutet nicht sterile Flächen. Laub kann unter Sträuchern nützlich sein, während Wege, Rasen und empfindliche Pflanzen besser frei bleiben.",
        ],
      },
      {
        heading: "Kübel schützen",
        body: [
          "Pflanzgefäße stehen im Winter besser etwas erhöht und geschützt vor Staunässe. Empfindliche Töpfe und Pflanzen brauchen je nach Material und Art zusätzliche Isolierung.",
        ],
      },
      {
        heading: "Werkzeug reinigen",
        body: [
          "Scheren, Harken und Schaufeln halten länger, wenn Erde entfernt und Metallteile trocken gelagert werden. Der Herbst ist auch ein guter Zeitpunkt, stumpfe Schneiden zu prüfen.",
        ],
      },
    ],
  },
  {
    slug: "fehler-bei-der-rasenpflege",
    title: "Häufige Fehler bei der Rasenpflege und wie du sie vermeidest",
    description:
      "Zu kurzer Schnitt, falsches Gießen und übertriebener Dünger: typische Rasenfehler verständlich erklärt.",
    category: "Rasenpflege",
    image: "/garden-product-images/lawn-water-04.jpg",
    readingTime: "6 Min.",
    updatedAt: "2026-06-29",
    sections: [
      {
        heading: "Zu kurz mähen schwächt den Rasen",
        body: [
          "Sehr kurzer Schnitt sieht kurzzeitig ordentlich aus, stresst den Rasen aber bei Sonne und Trockenheit. Eine etwas höhere Schnitthöhe hilft, den Boden zu beschatten.",
        ],
      },
      {
        heading: "Zu oft wenig gießen",
        body: [
          "Oberflächliches Gießen hält Wurzeln flach. Besser ist es, seltener und durchdringender zu wässern, sofern Boden und Wetter das zulassen.",
        ],
      },
      {
        heading: "Vertikutieren ohne Bedarf",
        body: [
          "Vertikutieren ist kein Pflichtprogramm für jeden Frühling. Prüfe zuerst Moos, Filz und Bodenfeuchte. Ein unnötig bearbeiteter Rasen braucht danach viel Erholung.",
        ],
      },
    ],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
