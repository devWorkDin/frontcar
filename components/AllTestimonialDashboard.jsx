"use client";
import React, { useEffect, useState } from "react";
import TestimonialCardDashboard from "./TestimonialCardDashboard";
import "../styles/AllTestimonial.css";
import Toastify from "toastify-js";

function AllTestimonialDashboard() {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("date");

  useEffect(() => {
    fetch("/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          Toastify({
            text: "Erreur réseau",
            close: true,
            position: "center",
            gravity: "bottom",
            duration: 3000,
            backgroundColor: "red",
          }).showToast();
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setTestimonials(data?.testimonials || []);
      })
      .catch((error) => {
        setLoading(false);
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const getSortedTestimonials = () => {
    let sortedTestimonials = [...testimonials];
    switch (sortCriteria) {
      case "datenew":
        sortedTestimonials.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "dateold":
        sortedTestimonials.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "ratingbest":
        sortedTestimonials.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingworst":
        sortedTestimonials.sort((a, b) => a.rating - b.rating);
        break;
      case "active":
        sortedTestimonials = sortedTestimonials.filter(
          (t) => t.active === true
        );
        break;
      case "inactive":
        sortedTestimonials = sortedTestimonials.filter(
          (t) => t.active === false
        );
        break;
      default:
        break;
    }
    return sortedTestimonials;
  };

  const sortedTestimonials = getSortedTestimonials();

  return (
    <>
      <div className="filter-cliquer">
        <h2>Trier / filtrer par :</h2>
        <select
          className="select-filter"
          name="Filtrer"
          id="filter"
          onChange={handleSortChange}
        >
          <option value="datenew">Les plus anciens</option>
          <option value="dateold">Les plus récents</option>
          <option value="ratingbest">Les mieux notés</option>
          <option value="ratingworst">Les moins bien notés</option>
          <option value="active">Actif</option>
          <option value="inactive">Inactif</option>
        </select>
      </div>
      <h2 className="section-title">Tous les témoignages</h2>

      <section className="section-testimonial">
        <div className="container-testimonial">
          {loading ? (
            <p>Chargement...</p>
          ) : sortedTestimonials.length === 0 ? (
            <p>Aucun témoignage ne correspond à vos critères.</p>
          ) : (
            sortedTestimonials.map((testimonial) => (
              <TestimonialCardDashboard key={testimonial.id} {...testimonial} />
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default AllTestimonialDashboard;
