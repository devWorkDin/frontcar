import Footer from "@components/Footer";
import Grid1 from "@components/Grid1";
import HeroSection from "@components/HeroSection";
import Process from "@components/Process";
import Testimonial from "@components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
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
