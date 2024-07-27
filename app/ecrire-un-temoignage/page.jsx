"use client";
import React, { useEffect, useState } from "react";
import AllTestimonial from "../../components/AllTestimonial";
import ProfilDriver from "../../components/ProfilDriver";
import "../../styles/WriteTestimonial.css";
import "../../styles/AllTestimonial.css";
import FormSubmit from "../../components/FormSubmit";

function Page() {
const [ponctualite , setPonctualite] = useState(false);
const [professionnalisme , setProfessionnalisme] = useState(false);
const [proprete , setProprete] = useState(false);
const [confort , setConfort] = useState(false);
  const baseStyle = {
    filter: "brightness(0.35)",
    cursor: "pointer",
    width: "20rem",
    transition: "all 0.3s",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "9rem",
    borderRadius: "20px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
  };

  const activeStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(1)",
    boxShadow: "rgba(255, 255, 255, 0.2) 0px 8px 24px",
    // border: ".25rem solid #ffff",
    marginTop: "1rem",
    width: "20rem",
    transition: "all 0.3s",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: "9rem",
    borderRadius: "20px",
    textAlign: "center",
    color: "black",
  };

  const [activeStates, setActiveStates] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleStyle = (index) => {
    setActiveStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <h1 className="title-page-write-post">
        <img className="icone_left" src="/assets/svg/star.svg" alt="pencil" />
        Qu'avez vous pensé de votre course
        <img
          className="icone"
          src="/assets/svg/pencil-simple-line.svg"
          alt="pencil"
        />
      </h1>
      <h2 className="subtitle-page-write-post">
        Choisissez celles qui définissent le plus votre expérience
      </h2>
      <section className="section-write-post">
        <div className="profil-driver-container-2-overflow">
          <div
            className="item-driver-adj-2"
            onClick={() => {toggleStyle(0), setPonctualite(!ponctualite)}}
            style={activeStates[0] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white",  }}>Ponctualité</h2>
            {/* <img style={{
              position: "absolute",
              right: "0",
              top: "0",
              zIndex: "-1",
              width: "90%",

            }} src='/assets/caracteristiques/3.jpg' alt="clock" /> */}
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {toggleStyle(1), setProfessionnalisme(!professionnalisme)}}
            style={activeStates[1] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>Professionnalisme</h2>
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {toggleStyle(2), setProprete(!proprete)}}
            style={activeStates[2] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>Propreté du Véhicule</h2>
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {toggleStyle(3), setConfort(!confort)}}
            style={activeStates[3] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>Confort du Véhicule</h2>
          </div>
        </div>
        <h2 className="subtitle-page-write-post"> Notez , écrivez et postez</h2>
        <FormSubmit confort={confort} professionnalisme={professionnalisme} ponctualite={ponctualite} proprete={proprete}  />
      </section>
    </>
  );
}

export default Page;
