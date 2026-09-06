import React from "react";
import "../About.css";

function About() {
const infoCards = [
{
icon: "🦖",
title: "The Dinosaurs",
text: "From the iconic Tyrannosaurus rex to the intelligent Velociraptors, dinosaurs are at the heart of the Jurassic franchise and its stories.",
},
{
icon: "🧬",
title: "The Science",
text: "Genetic engineering and ancient DNA form the foundation of the franchise's central concept: bringing prehistoric life back to the modern world.",
},
{
icon: "🎬",
title: "The Films",
text: "The franchise has expanded from the original Jurassic Park trilogy into the Jurassic World era and continues to attract audiences around the world.",
},
{
icon: "🌎",
title: "The Legacy",
text: "Jurassic Park has become one of the most recognizable dinosaur franchises in popular culture, inspiring games, attractions, merchandise, and generations of fans.",
},
];

return ( <div className="about-page">
{/* JURASSIC ARCHIVE HEADER */} <header className="about-hero"> <div className="jurassic-archive-logo" aria-label="Jurassic Archive"> <span className="archive-line" /> <span className="archive-title">JURASSIC ARCHIVE</span> <span className="archive-line" /> </div>

```
    <p className="archive-subtitle">
      Explore the history, science, stories, and legacy of the Jurassic
      franchise.
    </p>
  </header>

  <main className="about-container">
    {/* PAGE INTRODUCTION */}
    <section className="about-intro">
      <span className="section-label">FRANCHISE DATABASE</span>

      <h1>
        About the Jurassic Park <span>/</span> Jurassic World Franchise
      </h1>

      <p className="intro-text">
        A journey through prehistoric imagination, groundbreaking science,
        and one of cinema's most iconic worlds.
      </p>
    </section>

    {/* MAIN INFORMATION */}
    <section className="about-overview">
      <dl className="about-list">
        <div className="about-list-item">
          <dt>Franchise Overview</dt>

          <dd>
            The <strong>Jurassic Park / Jurassic World</strong> franchise
            is a popular series of science fiction adventure films that
            began with <strong>Jurassic Park</strong> in 1993, directed by{" "}
            <strong>Steven Spielberg</strong>. Based on Michael Crichton's
            novel, the story imagines a world where scientists use ancient
            DNA to bring dinosaurs back to life.
          </dd>
        </div>

        <div className="about-list-item">
          <dt>Themes &amp; Impact</dt>

          <dd>
            The franchise explores themes of <strong>science</strong>,{" "}
            <strong>nature</strong>, and{" "}
            <strong>human ambition</strong>, showing both the excitement
            and dangers of trying to control creatures from the past. Over
            the years, it has grown into a worldwide phenomenon with films,
            games, books, toys, and theme park attractions.
          </dd>
        </div>

        <div className="about-list-item">
          <dt>Jurassic World Era</dt>

          <dd>
            The more recent <strong>Jurassic World</strong> series,
            beginning in 2015, continues the story for a new generation.
            It introduces a fully functioning dinosaur theme park and
            explores the consequences that follow when science pushes its
            boundaries too far.
          </dd>
        </div>

        <div className="about-list-item">
          <dt>Core Message</dt>

          <dd>
            At its core, the franchise combines thrilling dinosaur
            adventures with important lessons about{" "}
            <strong>responsibility</strong>,{" "}
            <strong>respect for nature</strong>, and the{" "}
            <strong>limits of technology</strong>.
          </dd>
        </div>
      </dl>
    </section>

    {/* INFORMATION CARDS */}
    <section className="about-cards-section">
      <div className="section-heading">
        <span className="section-label">EXPLORE THE ARCHIVE</span>
        <h2>The World of Jurassic</h2>
      </div>

      <div className="about-info-grid">
        {infoCards.map((card) => (
          <article className="about-info-card" key={card.title}>
            <div className="card-icon">{card.icon}</div>

            <h3>{card.title}</h3>

            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>

    {/* COLLAPSIBLE INFORMATION */}
    <section className="about-details-section">
      <div className="section-heading">
        <span className="section-label">ARCHIVE RECORDS</span>
        <h2>Frequently Explored Topics</h2>
      </div>

      <div className="about-details">
        <details>
          <summary>
            <span>🧪</span>
            How does dinosaur cloning work?
          </summary>

          <p>
            Within the fictional world of Jurassic Park, scientists extract
            dinosaur DNA from ancient mosquitoes preserved in amber.
            Missing portions of the genetic code are then filled using DNA
            from other animals.
          </p>
        </details>

        <details>
          <summary>
            <span>🌴</span>
            Why was Jurassic Park created?
          </summary>

          <p>
            John Hammond envisioned Jurassic Park as a revolutionary theme
            park where visitors could experience living dinosaurs.
            However, the project eventually demonstrated the dangers of
            attempting to completely control nature.
          </p>
        </details>

        <details>
          <summary>
            <span>🦕</span>
            Jurassic Park vs Jurassic World
          </summary>

          <p>
            Jurassic Park introduced the original dinosaur park and the
            consequences of its failure. Jurassic World later presented a
            fully operational version of that dream before another major
            incident changed the course of the franchise.
          </p>
        </details>
      </div>
    </section>
  </main>

  <footer className="about-footer">
    <p>
      © 2026 <strong>Jurassic Archive</strong>
      <span className="footer-divider">•</span>
      Built for Jurassic fans
      <span className="footer-dino">🦖</span>
    </p>
  </footer>
</div>


);
}

export default About
