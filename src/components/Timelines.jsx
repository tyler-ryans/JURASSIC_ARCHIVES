import { useMemo, useState } from "react";
import "../Timelines.css";

const timelineEvents = [
{
id: "extinction",
date: "~65 Million Years Ago",
title: "The Dinosaur Extinction",
description:
"The extinction of the dinosaurs occurs after a catastrophic meteor impact.",
era: "Prehistoric",
},
{
id: "ingen",
date: "1983",
title: "InGen Is Founded",
description:
"John Hammond founds InGen, beginning research into cloning dinosaurs using ancient DNA.",
era: "Origins",
},
{
id: "jurassic-park",
date: "1993",
title: "Jurassic Park",
description:
"The original Jurassic Park opens for testing on Isla Nublar but fails after a containment breach.",
era: "Film",
},
{
id: "lost-world",
date: "1997",
title: "The Lost World",
description:
"InGen tries to bring dinosaurs to the mainland, but chaos ensues in San Diego.",
era: "Film",
},
{
id: "jp3",
date: "2001",
title: "Jurassic Park III",
description:
"Alan Grant is tricked into returning to Isla Sorna to help rescue a missing boy.",
era: "Film",
},
{
id: "jurassic-world",
date: "2015",
title: "Jurassic World",
description:
"The fully functional Jurassic World theme park opens on Isla Nublar but collapses after the Indominus Rex escapes.",
era: "Film",
},
{
id: "fallen-kingdom",
date: "2018",
title: "Jurassic World: Fallen Kingdom",
description:
"The dinosaurs are evacuated from Isla Nublar before the island's destruction, leading to their release into the wild.",
era: "Film",
},
{
id: "dominion",
date: "2022",
title: "Jurassic World Dominion",
description:
"Dinosaurs now coexist with humans, forcing society to adapt to a new ecological balance.",
era: "Film",
},
];

function Timeline() {
const [query, setQuery] = useState("");
const [activeEra, setActiveEra] = useState("All");

const eras = [
"All",
...new Set(timelineEvents.map((event) => event.era)),
];

const filteredEvents = useMemo(() => {
const search = query.trim().toLowerCase();


return timelineEvents.filter((event) => {
  const matchesEra =
    activeEra === "All" || event.era === activeEra;

  const searchableText = [
    event.date,
    event.title,
    event.description,
    event.era,
  ]
    .join(" ")
    .toLowerCase();

  const matchesSearch =
    search === "" || searchableText.includes(search);

  return matchesEra && matchesSearch;
});


}, [query, activeEra]);

const resetFilters = () => {
setQuery("");
setActiveEra("All");
};

return ( <main className="timeline-page"> <div className="jurassic-archive-logo"> <span className="archive-line"></span>

    <span className="archive-text">
      JURASSIC ARCHIVE
    </span>

    <span className="archive-line"></span>
  </div>

  <section className="timeline-hero">
    <div className="timeline-container">
      <span className="timeline-eyebrow">
        COMPLETE FRANCHISE HISTORY
      </span>

      <h1>The Jurassic Timeline</h1>

      <p className="timeline-intro">
        Follow the journey from the prehistoric world
        to the modern age, where dinosaurs and humans
        must learn to coexist.
      </p>

      <div className="timeline-controls">
        <label className="timeline-search">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="6.5"
            />

            <path d="M16 16 L20.5 20.5" />
          </svg>

          <input
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search the timeline..."
            aria-label="Search the Jurassic timeline"
          />

          {query !== "" && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </label>

        <div
          className="timeline-filters"
          aria-label="Filter timeline"
        >
          {eras.map((era) => (
            <button
              key={era}
              type="button"
              className={
                activeEra === era
                  ? "is-active"
                  : ""
              }
              onClick={() => setActiveEra(era)}
            >
              {era}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-summary">
        <span>
          {filteredEvents.length} event
          {filteredEvents.length === 1 ? "" : "s"} found
        </span>

        {(query !== "" || activeEra !== "All") && (
          <button
            type="button"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  </section>

  <section className="timeline-section">
    <div className="timeline-container">
      {filteredEvents.length > 0 ? (
        <div className="timeline-list">
          {filteredEvents.map((event, index) => (
            <article
              key={event.id}
              className={
                index % 2 === 0
                  ? "timeline-event is-left"
                  : "timeline-event is-right"
              }
            >
              <div
                className="timeline-marker"
                aria-hidden="true"
              >
                <span></span>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <span className="event-era">
                    {event.era}
                  </span>

                  <time>{event.date}</time>
                </div>

                <h2>{event.title}</h2>

                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="timeline-empty">
          <div className="empty-icon">
            ⌕
          </div>

          <h2>No Events Found</h2>

          <p>
            Try a different search term or reset your filters.
          </p>

          <button
            type="button"
            onClick={resetFilters}
          >
            Reset Timeline
          </button>
        </div>
      )}
    </div>
  </section>

  <footer className="timeline-footer">
    <p>
      © 2026 Jurassic Archive
      <span> • </span>
      Exploring the history of the Jurassic franchise
    </p>
  </footer>
</main>


);
}

export default Timeline;
