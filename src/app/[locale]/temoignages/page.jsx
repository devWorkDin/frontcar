"use client";
import AllTestimonial from "../../../components/AllTestimonial";
import ProfilDriver from "../../../components/ProfilDriver";
import React from "react";
import "../../../styles/AllTestimonial.css";
import "../../../styles/WriteTestimonial.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Page() {
  const locale = typeof window !== "undefined" ? localStorage.getItem("locale") || 'fr' : 'fr'; // 'en' est une valeur par défaut
  const t = useTranslations("TestimonialPage");

  return (
    <>
      <section className="section-testimonial-page">
        <h1 className="title-page-write-post">
          {/* <img className="icone_left" src="/assets/svg/star.svg" alt="pencil" /> */}
          {t("here_are_all_testimonials")}
          {/* <img
            className="icone"
            src="/assets/svg/pencil-simple-line.svg"
            alt="pencil"
          /> */}
        </h1>
        <h2 className="subtitle-page-write-post">{t("you_can_consult_them")}</h2>
        <Link className="button-write" href={`/${locale}/ecrire-un-temoignage`}>
          <p>{t("write_a_testimonial")}</p>
          <img
            className="icone"
            src="/assets/svg/pencil-simple-line.svg"
            alt="pencil"
          />
        </Link>
        <ProfilDriver />
        <AllTestimonial />
      </section>
    </>
  );
}

export default Page;
