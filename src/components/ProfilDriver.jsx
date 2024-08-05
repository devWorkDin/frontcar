"use client";
import React from "react";
import "../styles/ProfilDriver.css";
import StarsRating from "./StarsRating";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
function ProfilDriver() {
  const t = useTranslations("Basics");
  const u = useTranslations("TestimonialPage");
  const v = useTranslations("TestimonialPage.service");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ratingAverage, setRatingAverage] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/rating")
      .then((response) => response.json())
      .then((data) => {
        setRatingAverage(data.rating);
      });

    fetch("/api/service")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setIsLoading(false);
      });
  }, []);

  const qualityCount = {
    ponctualite: 0,
    professionnalisme: 0,
    proprete: 0,
    confort: 0,
  };

  services.forEach((entry) => {
    if (entry.ponctualite) qualityCount.ponctualite++;
    if (entry.professionnalisme) qualityCount.professionnalisme++;
    if (entry.proprete) qualityCount.proprete++;
    if (entry.confort) qualityCount.confort++;
  });

  const sortedQualities = Object.entries(qualityCount).sort(
    (a, b) => b[1] - a[1]
  );
  const getQualityLabel = (quality) => {
    switch (quality) {
      case "ponctualite":
        return "punctuality";
      case "professionnalisme":
        return "professionalism";
      case "proprete":
        return "cleanliness";
      case "confort":
        return "comfort";
      default:
        return "";
    }
  };

  return (
    <section className="profil-driver-section">
      <div className="profil-driver-container">
        <div className="profil-driver-image">

          <img src="/assets/logo/1.png" alt="profil driver" />
        </div>
        <ul className="profil-driver-list">
          <li>Mourad Meremi</li>
          <li>
            {isLoading ? (
              <div>{t("loading")}</div>
            ) : (
              <>
                <StarsRating rating={Math.round(ratingAverage)} />
                {ratingAverage}/5
              </>
            )}
          </li>
          {/* <li className="rating">
        <div  className="rating__star star_1"></div>
        <div className="rating__star star_2"></div>
        <div className="rating__star star_3"></div>
        <div className="rating__star star_4"></div>
        <div className="rating__star star_5"></div>
      </li> */}
          <li>( {u("more_than_trips")})</li>
        </ul>
      </div>
      {isLoading ? (
        <div>{t("loading")}</div>
      ) : (
        <>
          <div className="profil-driver-container-2">
            {sortedQualities.map(([quality, count]) => (
              <div key={quality} className="item-driver-adj">
                <h2>
                  {v(getQualityLabel(quality))} ({count})
                </h2>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProfilDriver;