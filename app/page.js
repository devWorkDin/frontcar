

"use client"
import Grid1 from "@components/Grid1";
import HeroSection from "@components/HeroSection";
import Process from "@components/Process";
import { Zoom, Slide, Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";


import Testimonial from "@components/Testimonial";

export default function Home() {
  return (
    <main style={{
      backgroundColor: "black",
    }}>

<Zoom>

      <HeroSection />
      </Zoom>


      <Grid1
      direction={'no-reverse'}
        title={"Confort et Luxe à Bord"}
        content={
          "Profitez de sièges en cuir, climatisation ajustable, éclairage d'ambiance, boissons rafraîchissantes et collations gourmet."
        }
        image={"/assets/3.jpg"}
      />
        <Grid1
      direction={'reverse'}
        title={"Trajets Aéroport-Paris"}
        content={
          "Profitez d'un service de chauffeur privé de luxe pour vos trajets entre les aéroports et Paris."
        }
        image={"/assets/1.jpg"}
      />
        <Grid1
      direction={'no-reverse'}
        title={"Services Événementiels"}
        content={
          "Faites de votre événement une occasion spéciale avec notre service de transport événementiel."
        }
        image={"/assets/2.jpg"}
      />
      <Process/>
      <Testimonial/>
    </main>
  );
}
