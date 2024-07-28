"use client";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";

import React, { useEffect } from "react";
import "../styles/TestimonialCard.css";
import { Slide, Fade } from "react-awesome-reveal";

import { useState } from "react";

import StarsRating from "./StarsRating";

function TestimonialCardDashboard(testimonial) {
  const [filter, setFilter] = useState("date");

  const date = new Date(testimonial.date);
  const dateString = date.toLocaleDateString("fr-FR"); // Format the date in French format
  const timeString = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }); // Format the time in French format

  const handleDelete = (e, b) => {
    b.preventDefault();
    fetch("/api/dashboard", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: e }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          Toastify({
            text: "Votre témoignage a été supprimé avec succés",
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "green",
          }).showToast();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          Toastify({
            text: "Votre témoignage n'a pas été modifié . Erreur dans le système !",
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "red",
          }).showToast();
        }
      });
  };

  const handleUpdate = (e, b) => {
    b.preventDefault();
    fetch("/api/dashboard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: e }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          Toastify({
            text: "Votre témoignage a été modifié",
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "green",
          }).showToast();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        } else {
          Toastify({
            text: "Votre témoignage n'a pas été modifié . Erreur dans le système !",
            close: true,
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 3000,
            backgroundColor: "red",
          }).showToast();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      });
  };
  return (
    <Fade>
      <div className="card-testimonial" key={testimonial._id} 
      style={{
        border: testimonial.active ? "2px solid green" : "2px solid red",
      }}
      >
        <button
          className="erase"
          onClick={(b) => {
            handleDelete(testimonial._id, b);
          }}
        >
          <img src="/assets/svg/trash.svg" alt="logo phone" />
        </button>
        <div className="card-testimonial-image">
          <img src='/assets/svg/user.svg' alt="logo phone" />
        </div>
        <div className="card-testimonial-content">
          <h3>{testimonial.username}</h3>
          <StarsRating rating={testimonial.rating} />
          <p className="content-description">{testimonial.content}</p>
        </div>
        <hr className="hr" />
        <div className="flex items-center justify-between">
          <p>{dateString}</p>
          <p className="text-xs bg-red-200">{timeString}</p>
        </div>
        <div className="card-testimonial-action">
          <button
            onClick={(b) => {
              handleUpdate(testimonial._id, b);
            }}
            style={{
              cursor: testimonial.active ? "not-allowed" : "pointer",
              backgroundColor: testimonial.active ? "grey" : "green",
            }}
            disabled={testimonial.active}
            className="btn btn-edit"
          >
            Activer
          </button>
          <button
            onClick={(b) => {
              handleUpdate(testimonial._id, b);
            }}
            style={{
              cursor: !testimonial.active ? "not-allowed" : "pointer",
              backgroundColor: !testimonial.active ? "grey" : "green",
            }}
            disabled={!testimonial.active}
            className="btn btn-delete"
            
          >
            Désactiver
          </button>
        </div>
        <p className="actif-temoignage">
          Le témoignage est {testimonial.active ? "actif" : "inactif"}
        </p>
      </div>
    </Fade>
  );
}

export default TestimonialCardDashboard;
