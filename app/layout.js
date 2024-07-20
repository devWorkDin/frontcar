import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

const urbanist = Urbanist({ subsets: ["latin"] });


export const metadata = {
  title: "Bienvenue chez Fastcar - Votre Service de Chauffeur VTC de Luxe",
  description:
  "Découvrez une expérience de transport inégalée avec Fastcar. Spécialisés dans le service de chauffeur VTC, nous mettons à votre disposition un véhicule haut de gamme et un chauffeur professionnel pour tous vos déplacements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <link rel="icon" type="image/png" href="/faviconFC.png" />
      <body
        className={urbanist.className}
        style={{
          backgroundColor: "black",
        }}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
