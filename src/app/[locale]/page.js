"use client";
import Grid1 from "../../components/Grid1";
import HeroSection from "../../components/HeroSection";
import { useRouter } from "next/navigation";
import Process from "../../components/Process";
import { Zoom, Slide, Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import Testimonial from "../../components/Testimonial";
import { useEffect } from "react";

import { useTranslations } from "next-intl";

export default function Home() {
  //recuperer la langue
  const router = useRouter();

  const t = useTranslations("Homepage");

  return (
    <main
      style={{
        scrollBehavior: "smooth",
        backgroundColor: "black",
      }}
    >
      <Zoom>
        <HeroSection />
      </Zoom>

      <Grid1
        direction={"no-reverse"}
        title={`${t("comfort_and_luxury_on_board")}`}
        content={`${t("luxury_features")}`}
        image={"/assets/3.jpg"}
      />
      <Grid1
        direction={"reverse"}
        title={`${t("airport_paris_trips")}`}
        content={`${t("airport_service_description")}`}
        image={"/assets/1.jpg"}
      />
      <Grid1
        direction={"no-reverse"}
        title={`${t("event_services")}`}
        content={`${t("event_service_description")}`}
        image={"/assets/2.jpg"}
      />
      <Grid1
        direction={"reverse"}
        title={`${t("card_payment_available")}`}
        content={`${t("payment_description")}`}
        image={"/assets/4.jpg"}
      />
      <Process />
      <Testimonial />
    </main>
  );
}
