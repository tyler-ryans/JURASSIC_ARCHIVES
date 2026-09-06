import React, { useMemo, useState } from "react";
import "../Characters.css";

const movies = [
    {
        title: "Jurassic Park",
        year: "1993",
        entries: [
            {
                name: "Tyrannosaurus rex",
                type: "dinosaur",
                description:
                    "Breakout star and unexpected savior; iconic paddock and finale appearances.",
            },
            {
                name: "Velociraptor",
                type: "dinosaur",
                description:
                    "A pack of highly intelligent predators stalking survivors through the park.",
            },
            {
                name: "Dilophosaurus",
                type: "dinosaur",
                description:
                    "A frilled, venom-spitting ambusher infamous for the Nedry encounter.",
            },
            {
                name: "Brachiosaurus",
                type: "dinosaur",
                description:
                    "A majestic sauropod and the first dinosaur dramatically revealed on-screen.",
            },
            {
                name: "Triceratops",
                type: "dinosaur",
                description:
                    "Featured in the memorable sick Triceratops scene and paleontology sequence.",
            },
            {
                name: "Gallimimus",
                type: "dinosaur",
                description:
                    "A fast-running herd seen stampeding across the plains.",
            },
            {
                name: "Parasaurolophus",
                type: "dinosaur",
                description:
                    "A hadrosaur appearing in river and field sequences.",
            },
            {
                name: "John Hammond",
                type: "human",
                description:
                    "The wealthy industrialist and founder of Jurassic Park.",
            },
            {
                name: "Dr. Alan Grant",
                type: "human",
                description:
                    "A paleontologist and dinosaur expert who becomes trapped inside the park.",
            },
            {
                name: "Dr. Ellie Sattler",
                type: "human",
                description:
                    "A paleobotanist and field scientist who helps the group survive.",
            },
            {
                name: "Dr. Ian Malcolm",
                type: "human",
                description:
                    "A mathematician and chaos theorist who warns about the park's ambitions.",
            },
            {
                name: "Lex Murphy",
                type: "human",
                description:
                    "John Hammond's resourceful granddaughter who helps restore the park's systems.",
            },
            {
                name: "Tim Murphy",
                type: "human",
                description:
                    "John Hammond's dinosaur-loving grandson.",
            },
            {
                name: "Dennis Nedry",
                type: "human",
                description:
                    "An InGen programmer whose sabotage causes the park's security systems to fail.",
            },
            {
                name: "Robert Muldoon",
                type: "human",
                description:
                    "The park's game warden and an expert on dangerous animal behavior.",
            },
            {
                name: "Donald Gennaro",
                type: "human",
                description:
                    "The lawyer responsible for evaluating the park's safety.",
            },
            {
                name: "Ray Arnold",
                type: "human",
                description:
                    "The park's chief engineer responsible for the control systems.",
            },
            {
                name: "Dr. Henry Wu",
                type: "human",
                description:
                    "A geneticist and one of the lead scientists behind Jurassic Park.",
            },
        ],
    },

    {
        title: "The Lost World: Jurassic Park",
        year: "1997",
        entries: [
            {
                name: "Tyrannosaurus rex",
                type: "dinosaur",
                description:
                    "A family of Tyrannosaurs featured in the Isla Sorna expedition and San Diego incident.",
            },
            {
                name: "Velociraptor",
                type: "dinosaur",
                description:
                    "Territorial pack hunters encountered in the long grass and island village.",
            },
            {
                name: "Compsognathus",
                type: "dinosaur",
                description:
                    "Small dinosaurs that become surprisingly dangerous when they attack in groups.",
            },
            {
                name: "Stegosaurus",
                type: "dinosaur",
                description:
                    "Makes its franchise debut with defensive displays and powerful tail attacks.",
            },
            {
                name: "Pachycephalosaurus",
                type: "dinosaur",
                description:
                    "A head-butting dinosaur featured during the InGen roundup.",
            },
            {
                name: "Parasaurolophus",
                type: "dinosaur",
                description:
                    "Seen among the dinosaurs captured during the island roundup.",
            },
            {
                name: "Gallimimus",
                type: "dinosaur",
                description:
                    "Appears among the roaming dinosaur herds of Isla Sorna.",
            },
            {
                name: "Dr. Ian Malcolm",
                type: "human",
                description:
                    "Returns as the protagonist leading an expedition to Isla Sorna.",
            },
            {
                name: "Sarah Harding",
                type: "human",
                description:
                    "A paleontologist and animal behaviorist studying dinosaurs in the wild.",
            },
            {
                name: "Roland Tembo",
                type: "human",
                description:
                    "An experienced hunter hired to capture a Tyrannosaurus rex.",
            },
            {
                name: "Nick Van Owen",
                type: "human",
                description:
                    "A documentary filmmaker and environmental activist.",
            },
            {
                name: "Eddie Carr",
                type: "human",
                description:
                    "The team's equipment specialist and field expert.",
            },
            {
                name: "Peter Ludlow",
                type: "human",
                description:
                    "An InGen executive involved in relocating dinosaurs to the mainland.",
            },
        ],
    },

    {
        title: "Jurassic Park III",
        year: "2001",
        entries: [
            {
                name: "Spinosaurus aegyptiacus",
                type: "dinosaur",
                description:
                    "The dominant predator of Isla Sorna and one of the film's major threats.",
            },
            {
                name: "Velociraptor",
                type: "dinosaur",
                description:
                    "Highly intelligent pack hunters with advanced communication and nesting behavior.",
            },
            {
                name: "Pteranodon",
                type: "dinosaur",
                description:
                    "Large flying reptiles encountered inside the abandoned aviary.",
            },
            {
                name: "Ankylosaurus",
                type: "dinosaur",
                description:
                    "A heavily armored herbivore with a powerful clubbed tail.",
            },
            {
                name: "Corythosaurus",
                type: "dinosaur",
                description:
                    "A crested hadrosaur appearing among the island's dinosaur herds.",
            },
            {
                name: "Ceratosaurus",
                type: "dinosaur",
                description:
                    "A brief but memorable predator encounter on Isla Sorna.",
            },
            {
                name: "Brachiosaurus",
                type: "dinosaur",
                description:
                    "Returns as one of the peaceful giant herbivores of Isla Sorna.",
            },
            {
                name: "Dr. Alan Grant",
                type: "human",
                description:
                    "Returns to Isla Sorna after being drawn into a rescue mission.",
            },
            {
                name: "Paul Kirby",
                type: "human",
                description:
                    "A father who brings Alan Grant into the search for his missing son.",
            },
            {
                name: "Amanda Kirby",
                type: "human",
                description:
                    "Paul Kirby's wife and an active member of the rescue effort.",
            },
            {
                name: "Eric Kirby",
                type: "human",
                description:
                    "The missing boy whose disappearance leads to the expedition.",
            },
            {
                name: "Billy Brennan",
                type: "human",
                description:
                    "Alan Grant's assistant and a member of the rescue team.",
            },
        ],
    },

    {
        title: "Jurassic World",
        year: "2015",
        entries: [
            {
                name: "Indominus rex",
                type: "dinosaur / hybrid",
                description:
                    "A genetically engineered apex predator whose escape causes the park's collapse.",
            },
            {
                name: "Velociraptors",
                type: "dinosaur",
                description:
                    "Blue, Delta, Echo and Charlie form Owen Grady's trained raptor pack.",
            },
            {
                name: "Tyrannosaurus rex",
                type: "dinosaur",
                description:
                    "The legendary Tyrannosaurus returns during the climactic battle.",
            },
            {
                name: "Mosasaurus",
                type: "marine reptile",
                description:
                    "A massive marine predator kept inside Jurassic World's lagoon.",
            },
            {
                name: "Apatosaurus",
                type: "dinosaur",
                description:
                    "Gentle giants featured during the aftermath of the Indominus attack.",
            },
            {
                name: "Ankylosaurus",
                type: "dinosaur",
                description:
                    "An armored herbivore encountered in the park's wilderness areas.",
            },
            {
                name: "Pteranodon",
                type: "flying reptile",
                description:
                    "Escapes from the aviary and joins the aerial attack on visitors.",
            },
            {
                name: "Dimorphodon",
                type: "flying reptile",
                description:
                    "Small flying reptiles released during the aviary breakout.",
            },
            {
                name: "Claire Dearing",
                type: "human",
                description:
                    "Jurassic World's operations manager.",
            },
            {
                name: "Owen Grady",
                type: "human",
                description:
                    "An animal behavior expert responsible for training the raptor pack.",
            },
            {
                name: "Simon Masrani",
                type: "human",
                description:
                    "The owner and public face of Jurassic World.",
            },
            {
                name: "Vic Hoskins",
                type: "human",
                description:
                    "The head of security interested in using raptors for military purposes.",
            },
            {
                name: "Dr. Henry Wu",
                type: "human",
                description:
                    "The lead geneticist responsible for creating new dinosaurs.",
            },
            {
                name: "Zach Mitchell",
                type: "human",
                description:
                    "One of Claire Dearing's nephews visiting Jurassic World.",
            },
            {
                name: "Gray Mitchell",
                type: "human",
                description:
                    "Zach's dinosaur-obsessed younger brother.",
            },
        ],
    },

    {
        title: "Jurassic World: Fallen Kingdom",
        year: "2018",
        entries: [
            {
                name: "Indoraptor",
                type: "dinosaur / hybrid",
                description:
                    "A dangerous genetically engineered prototype designed for weaponization.",
            },
            {
                name: "Blue",
                type: "dinosaur",
                description:
                    "The Velociraptor with a strong bond to Owen Grady.",
            },
            {
                name: "Tyrannosaurus rex",
                type: "dinosaur",
                description:
                    "Returns during the evacuation of Isla Nublar.",
            },
            {
                name: "Baryonyx",
                type: "dinosaur",
                description:
                    "A semi-aquatic predator encountered inside the island's facilities.",
            },
            {
                name: "Stygimoloch",
                type: "dinosaur",
                description:
                    "A powerful head-butting dinosaur nicknamed Stiggy.",
            },
            {
                name: "Carnotaurus",
                type: "dinosaur",
                description:
                    "A horned predator featured during the destruction of Isla Nublar.",
            },
            {
                name: "Allosaurus",
                type: "dinosaur",
                description:
                    "Appears during the dinosaur auction and later outside captivity.",
            },
            {
                name: "Mosasaurus",
                type: "marine reptile",
                description:
                    "Escapes into the open ocean after the destruction of Isla Nublar.",
            },
            {
                name: "Sinoceratops",
                type: "dinosaur",
                description:
                    "A distinctive ceratopsian dinosaur rescued from Isla Nublar.",
            },
            {
                name: "Claire Dearing",
                type: "human",
                description:
                    "Returns to help rescue dinosaurs from Isla Nublar.",
            },
            {
                name: "Owen Grady",
                type: "human",
                description:
                    "Returns to rescue Blue and protect the dinosaurs.",
            },
            {
                name: "Dr. Henry Wu",
                type: "human",
                description:
                    "Continues his controversial genetic research.",
            },
            {
                name: "Maisie Lockwood",
                type: "human",
                description:
                    "A young girl whose background raises important questions about cloning.",
            },
            {
                name: "Eli Mills",
                type: "human",
                description:
                    "The corporate figure behind the dinosaur auction.",
            },
            {
                name: "Benjamin Lockwood",
                type: "human",
                description:
                    "A former associate of John Hammond connected to the franchise's history.",
            },
            {
                name: "Franklin Webb",
                type: "human",
                description:
                    "A technician assisting Claire and Owen.",
            },
            {
                name: "Zia Rodriguez",
                type: "human",
                description:
                    "A field specialist and member of the dinosaur rescue team.",
            },
        ],
    },

    {
        title: "Jurassic World: Dominion",
        year: "2022",
        entries: [
            {
                name: "Giganotosaurus",
                type: "dinosaur",
                description:
                    "A massive predator and one of the dominant dinosaurs in the Biosyn sanctuary.",
            },
            {
                name: "Therizinosaurus",
                type: "dinosaur",
                description:
                    "A towering herbivore with enormous claws and a major role in the finale.",
            },
            {
                name: "Tyrannosaurus rex",
                type: "dinosaur",
                description:
                    "The franchise's legendary Tyrannosaurus continues its long-running story.",
            },
            {
                name: "Blue and Beta",
                type: "dinosaur",
                description:
                    "A mother and offspring pair of Velociraptors.",
            },
            {
                name: "Atrociraptor",
                type: "dinosaur",
                description:
                    "Aggressive trained raptors used during the Malta chase.",
            },
            {
                name: "Pyroraptor",
                type: "dinosaur",
                description:
                    "A feathered raptor adapted to colder environments.",
            },
            {
                name: "Dimetrodon",
                type: "prehistoric animal",
                description:
                    "A prehistoric synapsid encountered in the underground amber mines.",
            },
            {
                name: "Quetzalcoatlus",
                type: "flying reptile",
                description:
                    "A gigantic pterosaur responsible for a dramatic aerial encounter.",
            },
            {
                name: "Dreadnoughtus",
                type: "dinosaur",
                description:
                    "An enormous titanosaur living inside the Biosyn sanctuary.",
            },
            {
                name: "Mosasaurus",
                type: "marine reptile",
                description:
                    "Now living freely in the world's oceans.",
            },
            {
                name: "Dr. Alan Grant",
                type: "human",
                description:
                    "Returns as one of the franchise's leading paleontologists.",
            },
            {
                name: "Dr. Ellie Sattler",
                type: "human",
                description:
                    "Returns to investigate environmental and ecological threats.",
            },
            {
                name: "Dr. Ian Malcolm",
                type: "human",
                description:
                    "Works within Biosyn while questioning the company's actions.",
            },
            {
                name: "Owen Grady",
                type: "human",
                description:
                    "Continues protecting dinosaurs and his family.",
            },
            {
                name: "Claire Dearing",
                type: "human",
                description:
                    "Continues advocating for dinosaur welfare.",
            },
            {
                name: "Maisie Lockwood",
                type: "human",
                description:
                    "Her origins remain central to the film's ethical questions.",
            },
            {
                name: "Dr. Henry Wu",
                type: "human",
                description:
                    "Continues his scientific work and attempts to address its consequences.",
            },
            {
                name: "Lewis Dodgson",
                type: "human",
                description:
                    "The head of Biosyn and a major figure behind its genetic operations.",
            },
        ],
    },
];

function JurassicCharacters() {
    const [query, setQuery] = useState("");

    const normalizedQuery = query.trim().toLowerCase();

    const filteredMovies = useMemo(() => {
        if (!normalizedQuery) return movies;

        return movies
            .map((movie) => {
                const movieMatches =
                    movie.title.toLowerCase().includes(normalizedQuery) ||
                    movie.year.includes(normalizedQuery);

                const filteredEntries = movie.entries.filter((entry) =>
                    `${entry.name} ${entry.type} ${entry.description}`
                        .toLowerCase()
                        .includes(normalizedQuery)
                );

                if (!movieMatches && filteredEntries.length === 0) {
                    return null;
                }

                return {
                    ...movie,
                    entries: movieMatches ? movie.entries : filteredEntries,
                };
            })
            .filter(Boolean);
    }, [normalizedQuery]);

    const totalResults = filteredMovies.reduce(
        (total, movie) => total + movie.entries.length,
        0
    );

    return (
        <div className="characters-page">
            <section className="characters-hero">
                <div className="characters-hero__overlay" />

                <div className="characters-shell characters-hero__content">
                    <div className="archive-brand">
                        <span className="archive-brand__mark">JA</span>

                        <div>
                            <p className="archive-brand__eyebrow">THE OFFICIAL FAN ARCHIVE</p>

                            <h1>JURASSIC ARCHIVES</h1>
                        </div>
                    </div>

                    <p className="characters-hero__label">
                        CHARACTER DATABASE
                    </p>

                    <h2>
                        Dinosaurs, scientists, survivors and legends.
                    </h2>

                    <p className="characters-hero__description">
                        Explore notable characters and prehistoric creatures from across
                        the Jurassic Park and Jurassic World franchise.
                    </p>
                </div>
            </section>

            <main className="characters-shell characters-main">
                <section className="characters-toolbar">
                    <div>
                        <p className="section-kicker">EXPLORE THE ARCHIVE</p>

                        <h2>Characters Database</h2>

                        <p>
                            Search through dinosaurs, humans, hybrids and prehistoric
                            creatures from every major film.
                        </p>
                    </div>

                    <div className="search-container">
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="search-icon"
                        >
                            <circle cx="11" cy="11" r="6" />

                            <path d="m16 16 5 5" />
                        </svg>

                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            type="search"
                            placeholder="Search characters, dinosaurs or films..."
                            aria-label="Search characters"
                        />

                        {query && (
                            <button
                                type="button"
                                className="clear-search"
                                onClick={() => setQuery("")}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>
                </section>

                <div className="results-bar">
                    <span>
                        {normalizedQuery
                            ? `${totalResults} matching ${totalResults === 1 ? "entry" : "entries"
                            }`
                            : `${movies.length} films in the archive`}
                    </span>

                    {normalizedQuery && (
                        <span className="results-query">
                            Searching for <strong>"{query}"</strong>
                        </span>
                    )}
                </div>

                {filteredMovies.length > 0 ? (
                    <section className="movie-list">
                        {filteredMovies.map((movie, index) => (
                            <details
                                className="movie-section"
                                key={`${movie.title}-${movie.year}`}
                                open={normalizedQuery !== "" || index === 0}
                            >
                                <summary>
                                    <div className="movie-heading">
                                        <span className="movie-year">{movie.year}</span>

                                        <div>
                                            <h3>{movie.title}</h3>

                                            <p>
                                                {movie.entries.length}{" "}
                                                {movie.entries.length === 1 ? "entry" : "entries"}{" "}
                                                available
                                            </p>
                                        </div>
                                    </div>

                                    <span className="expand-icon" aria-hidden="true">
                                        +
                                    </span>
                                </summary>

                                <div className="character-table">
                                    {movie.entries.map((entry) => (
                                        <article
                                            className="character-row"
                                            key={`${movie.title}-${entry.name}`}
                                        >
                                            <div className="character-name">
                                                <h4>{entry.name}</h4>

                                                <span className="character-chip">
                                                    {entry.type}
                                                </span>
                                            </div>

                                            <p>{entry.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </section>
                ) : (
                    <section className="empty-state">
                        <div className="empty-state__icon">🦖</div>

                        <h3>No archive entries found</h3>

                        <p>
                            Try searching for a different character, dinosaur, film or
                            keyword.
                        </p>

                        <button type="button" onClick={() => setQuery("")}>
                            Clear search
                        </button>
                    </section>
                )}
            </main>

            <footer className="characters-footer">
                <p>
                    © 2026 Jurassic Archives <span>•</span> Built for Jurassic fans
                </p>
            </footer>
        </div>
    );
}

export default JurassicCharacters;