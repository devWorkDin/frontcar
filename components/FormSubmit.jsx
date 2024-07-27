"use client";
import React, { use } from "react";
import { useEffect } from "react";
import "toastify-js/src/toastify.css"

import '../styles/RateWithStars.css'
import { useState } from "react";
import "../styles/FormSubmit.css";
import RateWithStars from "./RateWithStars";
import Toastify from 'toastify-js'


function FormSubmit({
  confort,professionnalisme,ponctualite,proprete
}) {
  const [rating, setRating] = useState(5);

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (username === "" || content === "") {
      Toastify({
        text: "Veuillez remplir tous les champs",
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
        text: "Votre avis doit faire moins de 100 caractères",
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();  
      setIsLoading(false);
      return;
    }
    fetch('/api/testimonial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, content, rating, ponctualite, professionnalisme, proprete, confort})
    })
    .then((response) => {
      if (!response.ok) {
        setIsLoading(false);

        throw new Error('Network response was not ok');
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
          text: "Votre avis a été publié",
          close: true,
          position: "center",
          gravity: "bottom", // `top` or `bottom`
          duration: 3000,
          backgroundColor: "green",
        }).showToast();
      } else {
        Toastify({
          text: "Une erreur est survenue",
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
        text: "Une erreur est survenue",
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
      console.error('There has been a problem with your fetch operation:', error);
    });
  }
  
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
      <label htmlFor="note">Notez votre chauffeur</label>
      <RateWithStars onRatingChange={handleRatingChange} />
      <label htmlFor="fullname">Nom complet</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        id="fullname"
        name="fullname"
        placeholder="Insérer votre nom complet"
      />
      <label htmlFor="avis">Donnez votre avis</label>
      <textarea
      onChange={(e) => setContent(e.target.value)}
        id="avis"
        name="avis"
        rows="4"
        cols="50"
        placeholder="Insérer votre avis"
      >
      
      </textarea>
      <span className="span-text-length" style={{
        color:content.length >= 150 ? "red" : "white"
      }}>
        {content.length}/100
        </span>
        <p>
        </p>
      <button 
      disabled={isLoading}
      onClick={(e)=>{
       handleSubmit(e);
      }} className="submit" type="submit" id="submit">
       {
         isLoading ? "Chargement..." : "Publier votre commentaire "
       }
      </button>
    </div>
  );
}

export default FormSubmit;
