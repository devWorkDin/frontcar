import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "react-awesome-reveal";

import "../styles/Grid.css";
function Grid1({ title, content, image, direction }) {
  const t = useTranslations("Homepage");
  const style = {
    display: "flex",
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
  };
  return (
    <div
      id="services"
      className="container-grid"
      style={
        direction === "reverse"
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
    >
      <Reveal>
        <div className="grid-item">
          <img className="imgMobile" src={image} alt="grid" />
          <div className="overlay_blur_mobile"></div>

          <h1>{title}</h1>
          <p>{content}</p>
          <a href='https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0'>
          {t('book_now')}
          </a>
        </div>
        <div className="grid-image">
          <img src={image} alt="grid" />
          <div className="overlay_blur"></div>
        </div>
      </Reveal>
    </div>
  );
}

export default Grid1;
