'use client'
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { useTranslations } from "next-intl";
import Toastify from 'toastify-js';
import "../styles/AllTestimonial.css";

function AllTestimonial() {
  const u = useTranslations("TestimonialPage.sort_filter_by");
  const v = useTranslations("Basics");
  
  const [sortCriteria, setSortCriteria] = useState("date");
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [sortedTestimonials, setSortedTestimonials] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("/api/testimonial", {
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
          setLoading(false);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setTestimonials(data?.testimonials || []);
        sortTestimonials(sortCriteria, data?.testimonials || []);
      })
      .catch((error) => {
        setLoading(false);
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  useEffect(() => {
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
          <option value="datenew">{u("most_recent")}</option>
          <option value="dateold">{u("least_recent")}</option>
          <option value="ratingbest">{u("best_rated")}</option>
          <option value="ratingworst">{u("worst_rated")}</option>
        </select>
      </div>
      <section className="section-testimonial">
        {loading ? (
          <div role="status" className="animate-pulse">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
            <div className="h-2.5 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
            <div className="flex items-center justify-center mt-4">
              <svg
                className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div className="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3"></div>
              <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">{v("loading")}</span>
          </div>
        ) : sortedTestimonials.length === 0 ? (
          <h1>{v("no_testimonials")}</h1>
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
