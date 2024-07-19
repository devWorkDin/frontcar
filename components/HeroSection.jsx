import React from "react";
import "../styles/HeroSection.css";
function HeroSection() {
  return (
    <section className="heroSection">
      <h1>Des trajets de luxe pour vos événements</h1>
      <p>
        Profitez d'un service de transport haut de gamme pour vos déplacements à
        Paris et ses environs.
      </p>
      <button className="button">Réservez dès maintenant</button>
    </section>
  );
}

export default HeroSection;
