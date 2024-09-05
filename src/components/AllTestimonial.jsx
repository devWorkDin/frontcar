"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { useTranslations } from "next-intl";
import Toastify from "toastify-js";
import { GetServerSideProps } from "next";
import "../styles/AllTestimonial.css";
// pages/testimonials.js (ou le nom de votre fichier de page)

export async function getServerSideProps() {
  try {
    const response = await fetch("https://www.agence-fastcar.fr/api/testimonial");
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return {
      props: {
        testimonials: data?.testimonials || [],
      },
    };
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return {
      props: {
        testimonials: [],
      },
    };
  }
}

function AllTestimonial({ testimonials }) {
  const u = useTranslations("TestimonialPage.sort_filter_by");
  const v = useTranslations("Basics");

  const [sortCriteria, setSortCriteria] = useState("date");
  const [sortedTestimonials, setSortedTestimonials] = useState(testimonials);

  useEffect(() => {
    sortTestimonials(sortCriteria, testimonials);
  }, [sortCriteria, testimonials]);

  const sortTestimonials = (criteria, testimonialsToSort) => {
    let sorted = [...(testimonialsToSort || [])];
    console.log(sorted);
    switch (criteria) {
      case "datenew":
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "dateold":
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "ratingbest":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingworst":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    setSortedTestimonials(sorted);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <>
      <div className="filter-cliquer">
        <h2>{u("sort_filter_by")}</h2>
        <select
          className="select-filter"
          name="Filtrer"
          id="filter"
          onChange={handleSortChange}
        >
          <option value="date">{u("choose_your_sort")}</option>
          <option value="datenew">{u("most_recent")}</option>
          <option value="dateold">{u("least_recent")}</option>
          <option value="ratingbest">{u("best_rated")}</option>
          <option value="ratingworst">{u("worst_rated")}</option>
        </select>
      </div>
      <section className="section-testimonial">
        {sortedTestimonials?.length === 0 ? (
          <h1
            style={{
              textAlign: "center",
              margin: "auto",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            {v("no_testimonials")}
          </h1>
        ) : (
          sortedTestimonials?.map((testi) => (
            <TestimonialCard key={testi._id} testimonial={testi} />
          ))
        )}
      </section>
    </>
  );
}

export default AllTestimonial;
