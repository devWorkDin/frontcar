import React from "react";
import "../styles/HeroSection.css";
import { Zoom, Slide, Bounce } from "react-awesome-reveal";

function HeroSection() {
  return (
    <section className="heroSection" id="accueil">
      <Zoom>
        <h1 className="title">Des trajets de luxe pour vos événements</h1>
        <p className="paragraph">
          Profitez d&apos;un service de transport haut de gamme pour vos
          déplacements à Paris et ses environs.
        </p>
      </Zoom>

      <a className="button" href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0">Réservez dès maintenant</a>
    </section>
  );
}

export default HeroSection;
