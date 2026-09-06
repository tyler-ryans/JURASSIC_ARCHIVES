import { useState } from "react";
import "../Theories.css";

const theories = [
  {
    id: 1,
    icon: "🧬",
    title: "The Dinosaurs Aren’t Genetically Accurate",
    content:
      "Some fans believe the dinosaurs in the films are intentionally not scientifically accurate. Since InGen filled gaps in dinosaur DNA with genetic material from modern animals, the creatures may have been altered to look, behave, and function differently from their prehistoric counterparts.",
  },
  {
    id: 2,
    icon: "🦖",
    title: "Raptors Were Being Trained for Military Use",
    content:
      "Jurassic World revealed that Vic Hoskins wanted to explore the military potential of Owen Grady’s raptors. Some fans speculate that this idea may have existed within InGen or related organizations long before the events shown in Jurassic World.",
  },
  {
    id: 3,
    icon: "🌎",
    title: "The Dinosaur Population Could Change Human Society Forever",
    content:
      "After the dinosaurs are released into the wider world, fans speculate about how governments, ecosystems, cities, and everyday life could permanently change. The franchise suggests that humans must adapt to sharing the planet with prehistoric animals.",
  },
  {
    id: 4,
    icon: "🔬",
    title: "Human Cloning Was Possible Long Before Maisie",
    content:
      "Maisie Lockwood's story introduced human cloning into the Jurassic universe. Some fans believe that cloning technology may have been explored in secret long before the events of Jurassic World: Fallen Kingdom.",
  },
  {
    id: 5,
    icon: "🧩",
    title: "Isla Sorna Still Holds Secrets",
    content:
      "Isla Sorna played a major role in several Jurassic films before largely disappearing from the main storyline. Fans continue to speculate that abandoned facilities, undiscovered dinosaurs, or unfinished experiments could still exist somewhere on the island.",
  },
];

function Theories() {
  const [openTheory, setOpenTheory] = useState(null);

  const toggleTheory = (id) => {
    setOpenTheory((currentTheory) =>
      currentTheory === id ? null : id
    );
  };

  return (
    <main className="theories-page">
      <section className="theories-hero">
        <div className="theories-container">
          <div className="jurassic-archive-logo">
            <span className="archive-line"></span>
            <span>JURASSIC ARCHIVE</span>
            <span className="archive-line"></span>
          </div>

          <span className="theories-eyebrow">Fan Discussions</span>

          <h1>Jurassic Fan Theories</h1>

          <p className="theories-intro">
            Explore popular theories, hidden possibilities, and fan
            speculation surrounding the Jurassic Park and Jurassic World
            universe.
          </p>
        </div>
      </section>

      <section className="theories-section">
        <div className="theories-container">
          <div className="theories-list">
            {theories.map((theory, index) => {
              const isOpen = openTheory === theory.id;

              return (
                <article
                  className={`theory-card ${isOpen ? "is-open" : ""}`}
                  key={theory.id}
                >
                  <button
                    className="theory-header"
                    type="button"
                    onClick={() => toggleTheory(theory.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="theory-heading">
                      <span className="theory-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="theory-icon">
                        {theory.icon}
                      </span>

                      <span className="theory-title">
                        {theory.title}
                      </span>
                    </div>

                    <span className="theory-toggle" aria-hidden="true">
                      <span></span>
                      <span></span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="theory-content">
                      <p>{theory.content}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="theories-note">
            <span>ARCHIVE NOTE</span>

            <p>
              These theories are based on fan discussion and speculation.
              They are not confirmed canon unless officially established
              within the Jurassic franchise.
            </p>
          </div>
        </div>
      </section>

      <footer className="theories-footer">
        <p>
          © 2026 Jurassic Archive · Made with 🦖
        </p>
      </footer>
    </main>
  );
}

export default Theories;