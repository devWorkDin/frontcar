import AllTestimonial from "../../../components/AllTestimonial";
import ProfilDriver from "../../../components/ProfilDriver";
import React from "react";
import "../../../styles/AllTestimonial.css";
import "../../../styles/WriteTestimonial.css";
import HeadingT from"../../../components/HeadingT";
// import Link from "next/link";
// import { useTranslations } from "next-intl";

export default async function Page() {
  const getTestimonials = async () => {
    const response = await fetch(
      "https://www.agence-fastcar.fr/api/testimonial"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const getRatings = async () => {
    const response = await fetch("https://www.agence-fastcar.fr/api/rating");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();

  }

  const getServices = async () => {
    const response = await fetch("https://www.agence-fastcar.fr/api/service");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  }

  const testimonials = await getTestimonials();
  const ratings = await getRatings();

  const services = await getServices();
  

 
  return (
    <>
      <section className="section-testimonial-page">
        <HeadingT />
        <ProfilDriver  ratingss={ratings.rating} servicess={services.services} />
        <AllTestimonial testimonialss={testimonials.testimonials} />
      </section>
    </>
  );
}
