"use client";
import React, { use } from "react";
import "toastify-js/src/toastify.css";

import "../styles/RateWithStars.css";
import { useState } from "react";
import "../styles/FormSubmit.css";
import RateWithStars from "./RateWithStars";
import { useTranslations } from "next-intl";
import Toastify from "toastify-js";


function FormSubmit({ confort, professionnalisme, ponctualite, proprete }) {

  const x = useTranslations("Alert");
  const w = useTranslations("WriteTestimonial");
  const v = useTranslations("Basics");

  const [rating, setRating] = useState(5);

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (username === "" || content === "") {
      Toastify({
        text:x("error_complete_fields"),
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
      setIsLoading(false);
      return;
    }
    if (content.length > 150) {
      Toastify({
        text:x("error_less_150_characters"),
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
      setIsLoading(false);
      return;
    }
    fetch("/api/testimonial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        content,
        rating,
        ponctualite,
        professionnalisme,
        proprete,
        confort,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);

          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data.result) {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          setUsername("");
          setContent("");

          Toastify({
            text:x("success_posted"),
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "green",
          }).showToast();
        } else {
          Toastify({
            
            text: x("error_server"),
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "red",
          }).showToast();
        }
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
        Toastify({
          text: x("error_server"),
          close: true,
          position: "center",
          gravity: "bottom", // `top` or `bottom`
          duration: 3000,
          backgroundColor: "red",
        }).showToast();
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const [styleButton, setStyleButton] = useState({
    backgroundColor: "white",
  });
  return (
    <div className="form-submit">
      <label htmlFor="note">{w("mark_your_driver")}</label>
      <RateWithStars onRatingChange={handleRatingChange} />
      <label htmlFor="fullname">{w("your_name")}</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        id="fullname"
        name="fullname"
        placeholder={w("placeholder_name")}
      />
      <label htmlFor="avis">{w("give_your_comment")}</label>
      <textarea
        onChange={(e) => setContent(e.target.value)}
        id="avis"
        name="avis"
        rows="4"
        cols="50"
        placeholder={w("placeholder_comment")}
      ></textarea>
      <span
        className="span-text-length"
        style={{
          color: content.length >= 150 ? "red" : "white",
        }}
      >
        {content.length}/150
      </span>
      <p></p>
      <button
        disabled={isLoading}
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="submit"
        type="submit"
        id="submit"
      >
        {isLoading ?
        
        `${v("loading")}`
        
        :
        `${w("publish")}`
        
        }
      </button>
    </div>
  );
}

export default FormSubmit;
