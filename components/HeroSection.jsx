import React from "react";
import "../styles/HeroSection.css";
import { Zoom, Slide, Bounce } from "react-awesome-reveal";

function HeroSection() {
  return (
    <section className="heroSection">
      <Zoom>
        <h1 className="title">Des trajets de luxe pour vos événements</h1>
        <p className="paragraph">
          Profitez d&apos;un service de transport haut de gamme pour vos
          déplacements à Paris et ses environs.
        </p>
      </Zoom>

      <button className="button">Réservez dès maintenant</button>
    </section>
  );
}

export default HeroSection;
