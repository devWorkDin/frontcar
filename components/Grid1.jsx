import React from "react";
import Image from "next/image";
import { Reveal } from "react-awesome-reveal";
import "../styles/Grid.css";
function Grid1({ title, content, image, direction }) {
  const style = {
    display: "flex",
    justifyContent: "center",
    height: "90vh",
    alignItems: "center",
  };
  return (
    <div
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
          <button>Réserver dès maintenant</button>
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
