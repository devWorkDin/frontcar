'use client'
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { useTranslations } from "next-intl";
import Toastify from 'toastify-js';
import "../styles/AllTestimonial.css";

export async function getTestimonials () {
  const response = await fetch("/api/testimonial", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function AllTestimonial() {
  const u = useTranslations("TestimonialPage.sort_filter_by");
  const v = useTranslations("Basics");
  
  const [sortCriteria, setSortCriteria] = useState("date");
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([  ]);
  const [sortedTestimonials, setSortedTestimonials] = useState([]);

  useEffect(() => {
    setLoading(true); 
    getTestimonials().then((data) => {
      setLoading(false);
      setTestimonials(data?.testimonials || []);
      sortTestimonials(sortCriteria, data?.testimonials || []);
    }).catch((error) => {
      setLoading(false);
      console.error('There has been a problem with your fetch operation:', error);
    });
    
    // setLoading(true);

    // fetch("/api/testimonial", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       Toastify({
    //         text: "Erreur réseau",
    //         close: true,
    //         position: "center",
    //         gravity: "bottom",
    //         duration: 3000,
    //         backgroundColor: "red",
    //       }).showToast();
    //       setLoading(false);
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setLoading(false);
    //     setTestimonials(data?.testimonials || []);
    //     sortTestimonials(sortCriteria, data?.testimonials || []);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.error('There has been a problem with your fetch operation:', error);
    //   });
  }, []);

  useEffect(() => {
    // setLoading(true)
   
    sortTestimonials(sortCriteria, testimonials);
  }, [sortCriteria, testimonials]);

  const sortTestimonials = (criteria, testimonials) => {
    let sortedTestimonials = [...testimonials];
    switch (criteria) {
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
      default:
        break;
    }
    setSortedTestimonials(sortedTestimonials);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <>
      <div className="filter-cliquer">
        <h2>{u("sort_filter_by")}</h2>
        <select className="select-filter" name="Filtrer" id="filter" onChange={handleSortChange}>
          <option value="date">{u("choose_your_sort")}</option>
          <option value="datenew">{u("most_recent")}</option>
          <option value="dateold">{u("least_recent")}</option>
          <option value="ratingbest">{u("best_rated")}</option>
          <option value="ratingworst">{u("worst_rated")}</option>
        </select>
      </div>
      <section className="section-testimonial">
        {loading ? (
        <h1 style={{
          textAlign: "center",
          margin: "auto",
          fontSize: "1.5rem",
          color: "white",
        }}>{v("loading")}</h1>
        ) : sortedTestimonials.length === 0 ? (
          <h1
          style={{
            textAlign: "center",
            margin: "auto",
            fontSize: "1.5rem",
            color: "white",
          }}
          >{v("no_testimonials")}</h1>
        ) : (
          sortedTestimonials.map((testi) => {
            return <TestimonialCard key={testi._id} testimonial={testi} />;
          })
        )}
      </section>
    </>
  );
}

export default AllTestimonial;
