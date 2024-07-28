import React from "react";
import "../styles/HeroSection.css";
import { Zoom, Slide, Bounce } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations('Homepage');

  return (
    <section className="heroSection" id="accueil">
      <Zoom>
        <h1 className="title">{t('luxury_trips')}</h1>
        <p className="paragraph">
          {t('premium_transport_service')}
        </p>
      </Zoom>

      <a className="button" href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0">

      {t('book_now')}

      </a>
    </section>
  );
}

export default HeroSection;
