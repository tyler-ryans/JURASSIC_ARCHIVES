import React, { useEffect, useState } from "react";
import "../home.css";
import blue from "../assets/blue.png"
import rexy from "../assets/t rex.png"
import indo from "../assets/i rex.png"
import indoeater from "../assets/reptile.png"


const dinoFacts = [
  "The Indominus Rex could run up to 30 mph in Jurassic World.",
  "Velociraptors were smaller in real life but much smarter than shown in the movies.",
  "The T-Rex roar was created using a mix of animal sounds, including lion, elephant, and alligator.",
  "Mosasaurs ruled the oceans while T-Rex ruled the land!",
];

const dinoImages = [
indo,
blue,
rexy,
indoeater
];

function Home() {
  const [dailyFact, setDailyFact] = useState("");
  const [dinoImage, setDinoImage] = useState("");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const today = new Date();
    const index = today.getDate() % dinoFacts.length;

    setDailyFact(dinoFacts[index]);
    setDinoImage(dinoImages[index]);

    const eventDate = new Date("2025-12-18T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setCountdown("🔥 The new Jurassic update is here!");
        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      setCountdown(`📅 ${days} days until the next Jurassic event!`);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 60 * 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="jurassic-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-small">WELCOME TO</p>

            <h1>
              JURASSIC <span>ARCHIVE</span>
            </h1>

            <p className="hero-description">
              Explore the mysteries, theories, creatures and
              stories hidden throughout the Jurassic universe.
            </p>

            <a href="/theories" className="hero-button">
              Explore Theories
            </a>
          </div>
        </div>
      </section>

      {/* Daily Fact */}
      <section className="fact-section">

        <div className="section-heading">
          <span>🦖</span>
          <h2>Dinosaur Fact of the Day</h2>
          <span>🦖</span>
        </div>

        <div className="fact-container">

          <div className="fact-content">
            <p className="fact-label">TODAY'S DISCOVERY</p>

            <h3>{dailyFact}</h3>

            <p className="fact-description">
              Discover something new about the dinosaurs,
              creatures and science behind the Jurassic universe.
            </p>

            <div className="countdown">
              {countdown}
            </div>
          </div>

          <div className="dino-image-container">
            <img
              src={dinoImage}
              alt="Featured dinosaur"
              className="dino-image"
            />
          </div>

        </div>
      </section>

      {/* Theories */}
      <section className="theories-section">

        <div className="section-heading">
          <span>🔍</span>
          <h2>Featured Jurassic Theories</h2>
          <span>🔍</span>
        </div>

        <div className="theory-grid">

          <article className="theory-card">
            <div className="theory-icon">🧬</div>

            <h3>Dinosaurs Aren't Genetically Accurate</h3>

            <p>
              Some fans believe InGen purposely altered dinosaur
              DNA to make the creatures more intimidating and
              cinematic.
            </p>

            <a href="/theories" className="card-link">
              Discover Theory →
            </a>
          </article>

          <article className="theory-card">
            <div className="theory-icon">🦖</div>

            <h3>Raptors as Military Weapons</h3>

            <p>
              Fans believe InGen may have considered
              weaponizing Velociraptors long before Hoskins
              proposed the idea in Jurassic World.
            </p>

            <a href="/theories" className="card-link">
              Discover Theory →
            </a>
          </article>

          <article className="theory-card">
            <div className="theory-icon">🌎</div>

            <h3>Dominion Sets Up Human Extinction</h3>

            <p>
              With dinosaurs spreading across the planet,
              some theories imagine a future where humans
              struggle to remain the dominant species.
            </p>

            <a href="/theories" className="card-link">
              Discover Theory →
            </a>
          </article>

        </div>

        <div className="all-theories">
          <a href="/theories">
            Read All Theories
          </a>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          🦖 JURASSIC ARCHIVE
        </div>

        <p>
          Explore the science, stories and mysteries
          behind the Jurassic universe.
        </p>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Jurassic Fanbase • Made with 🦖
        </p>
      </footer>

    </div>
  );
}

export default Home;
