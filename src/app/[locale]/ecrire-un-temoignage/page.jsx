"use client";
import React, { useState } from "react";
import "../../../styles/WriteTestimonial.css";
import "../../../styles/AllTestimonial.css";
import { useTranslations } from "next-intl";
import FormSubmit from "../../../components/FormSubmit";

function Page() {
  const v = useTranslations("TestimonialPage.service");
  const w = useTranslations("WriteTestimonial");
  const [ponctualite, setPonctualite] = useState(false);
  const [professionnalisme, setProfessionnalisme] = useState(false);
  const [proprete, setProprete] = useState(false);
  const [confort, setConfort] = useState(false);
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
      <h1 className="title-page-write-post">{w("what_did_you_think")}</h1>
      <h2 className="subtitle-page-write-post">{w("choose_the_criteria")}</h2>
      <section className="section-write-post">
        <div className="profil-driver-container-2-overflow">
          <div
            className="item-driver-adj-2"
            onClick={() => {
              toggleStyle(0), setPonctualite(!ponctualite);
            }}
            style={activeStates[0] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>{v("punctuality")}</h2>
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {
              toggleStyle(1), setProfessionnalisme(!professionnalisme);
            }}
            style={activeStates[1] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>{v("professionalism")}</h2>
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {
              toggleStyle(2), setProprete(!proprete);
            }}
            style={activeStates[2] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>{v("cleanliness")}</h2>
          </div>
          <div
            className="item-driver-adj-2"
            onClick={() => {
              toggleStyle(3), setConfort(!confort);
            }}
            style={activeStates[3] ? activeStyle : baseStyle}
          >
            <h2 style={{ color: "white" }}>{v("comfort")}</h2>
          </div>
        </div>
        <h2 className="subtitle-page-write-post">{w("note_write_and_post")}</h2>
        <FormSubmit
          confort={confort}
          professionnalisme={professionnalisme}
          ponctualite={ponctualite}
          proprete={proprete}
        />
      </section>
    </>
  );
}

export default Page;

/*¨*/
