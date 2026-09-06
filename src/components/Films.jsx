import { useMemo, useState } from "react";
import "../Films.css";

const films = [
    {
        id: "jurassic-park",
        year: 1993,
        title: "Jurassic Park",
        era: "Original Trilogy",
        description:
            "Jurassic Park is a 1993 American science fiction-adventure film directed by Steven Spielberg and based on Michael Crichton's 1990 novel. The story centers on John Hammond, a wealthy industrialist who creates a theme park on a fictional island off Costa Rica, where cloned dinosaurs are brought back to life through genetic engineering. When sabotage causes a complete power failure, the park's dinosaurs escape, and a group of visitors, including paleontologists Alan Grant and Ellie Sattler, and mathematician Ian Malcolm, must fight to survive and escape.",
    },
    {
        id: "lost-world",
        year: 1997,
        title: "The Lost World: Jurassic Park",
        era: "Original Trilogy",
        description:
            "The Lost World: Jurassic Park is a 1997 American science fiction-adventure film and the second installment in the Jurassic Park franchise, directed by Steven Spielberg and loosely based on Michael Crichton's 1995 novel. The film follows Dr. Ian Malcolm as he leads a team to Isla Sorna to document dinosaurs in their natural habitat, only to find they must also confront another team sent to capture the creatures for a zoo in San Diego.",
    },
    {
        id: "jurassic-park-3",
        year: 2001,
        title: "Jurassic Park III",
        era: "Original Trilogy",
        description:
            "Jurassic Park III is the third film in the original trilogy, released in 2001 and directed by Joe Johnston. It follows paleontologist Dr. Alan Grant as he is tricked into visiting the dinosaur-filled Isla Sorna for a rescue mission to find a missing boy, introducing the new dominant dinosaur, the Spinosaurus, and featuring Pteranodons.",
    },
    {
        id: "jurassic-world",
        year: 2015,
        title: "Jurassic World",
        era: "Jurassic World",
        description:
            "Jurassic World is a 2015 science fiction action film set 22 years after the original Jurassic Park disaster, featuring a fully operational dinosaur theme park on the same island. When the park creates a new genetically engineered hybrid dinosaur called the Indominus Rex, its escape from containment leads to widespread chaos.",
    },
    {
        id: "fallen-kingdom",
        year: 2018,
        title: "Jurassic World: Fallen Kingdom",
        era: "Jurassic World",
        description:
            "Jurassic World: Fallen Kingdom follows Owen Grady and Claire Dearing as they return to Isla Nublar to rescue dinosaurs from a volcanic eruption, only to uncover a conspiracy involving illegal dinosaur auctions and a new genetically engineered hybrid.",
    },
    {
        id: "dominion",
        year: 2022,
        title: "Jurassic World Dominion",
        era: "Jurassic World",
        description:
            "Jurassic World Dominion brings together the Jurassic World cast and original Jurassic Park stars Laura Dern, Jeff Goldblum, and Sam Neill. The story explores the challenges of humans and dinosaurs coexisting after dinosaurs spread across the globe.",
    },
];

function Films() {
    const [query, setQuery] = useState("");
    const [activeEra, setActiveEra] = useState("All");
    const [expandedFilm, setExpandedFilm] = useState(null);

    const eras = ["All", ...new Set(films.map((film) => film.era))];

    const filteredFilms = useMemo(() => {
        const search = query.trim().toLowerCase();

        return films.filter((film) => {
            const matchesEra =
                activeEra === "All" || film.era === activeEra;

            const searchableText = `
        ${film.title}
        ${film.year}
        ${film.era}
        ${film.description}
      `.toLowerCase();

            return (
                matchesEra &&
                (!search || searchableText.includes(search))
            );
        });
    }, [query, activeEra]);

    const resetFilters = () => {
        setQuery("");
        setActiveEra("All");
    };

    return (
        <main className="films-page">
            <section className="films-hero">
                <div className="films-container">
                    <span className="films-eyebrow">
                        Jurassic Archive
                    </span>

                    <h1>Films of the Jurassic Saga</h1>

                    <p>
                        Explore the films that built the Jurassic Park and
                        Jurassic World franchise, from Isla Nublar to a world
                        shared with dinosaurs.
                    </p>

                    <div className="films-controls">
                        <label className="films-search">
                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <circle cx="11" cy="11" r="6.5" />
                                <path d="m16 16 4.5 4.5" />
                            </svg>

                            <input
                                type="search"
                                value={query}
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                placeholder="Search films, years or characters..."
                                aria-label="Search Jurassic films"
                            />

                            {query && (
                                <button
                                    type="button"
                                    className="films-clear-search"
                                    onClick={() => setQuery("")}
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            )}
                        </label>

                        <div
                            className="films-filters"
                            aria-label="Filter films"
                        >
                            {eras.map((era) => (
                                <button
                                    key={era}
                                    type="button"
                                    className={
                                        activeEra === era ? "is-active" : ""
                                    }
                                    onClick={() => setActiveEra(era)}
                                >
                                    {era}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="films-summary">
                        <span>
                            {filteredFilms.length} film
                            {filteredFilms.length === 1 ? "" : "s"}
                        </span>

                        {(query || activeEra !== "All") && (
                            <button
                                type="button"
                                onClick={resetFilters}
                            >
                                Reset filters
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="films-section">
                <div className="films-container">
                    {filteredFilms.length > 0 ? (
                        <div className="films-grid">
                            {filteredFilms.map((film, index) => {
                                const isExpanded =
                                    expandedFilm === film.id;

                                return (
                                    <article
                                        className="film-card"
                                        key={film.id}
                                    >
                                        <div className="film-card-header">
                                            <div>
                                                <span className="film-index">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>

                                                <span className="film-era">
                                                    {film.era}
                                                </span>
                                            </div>

                                            <time>{film.year}</time>
                                        </div>

                                        <h2>{film.title}</h2>

                                        <p
                                            className={
                                                isExpanded
                                                    ? "film-description is-expanded"
                                                    : "film-description"
                                            }
                                        >
                                            {film.description}
                                        </p>

                                        <button
                                            type="button"
                                            className="film-toggle"
                                            onClick={() =>
                                                setExpandedFilm(
                                                    isExpanded ? null : film.id
                                                )
                                            }
                                            aria-expanded={isExpanded}
                                        >
                                            {isExpanded
                                                ? "Show less"
                                                : "Read more"}

                                            <span aria-hidden="true">
                                                {isExpanded ? "↑" : "↓"}
                                            </span>
                                        </button>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="films-empty">
                            <span>⌕</span>

                            <h2>No films found</h2>

                            <p>
                                Try a different search term or reset your filters.
                            </p>

                            <button
                                type="button"
                                onClick={resetFilters}
                            >
                                Reset films
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
export default Films;