import { Inter } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@components/Footer";
import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenue chez Fastcar - Votre Service de Chauffeur VTC de Luxe",
  description:
  "Découvrez une expérience de transport inégalée avec Fastcar. Spécialisés dans le service de chauffeur VTC de luxe, nous mettons à votre disposition des véhicules haut de gamme et des chauffeurs professionnels pour tous vos déplacements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <link rel="icon" type="image/x-icon" href="/" />
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
