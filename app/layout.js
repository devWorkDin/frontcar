import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenue chez Fastcar - Votre Service de Chauffeur VTC de Luxe",
  description:
    "Découvrez une expérience de transport inégalée avec Fastcar. Spécialisés dans le service de chauffeur VTC, nous mettons à votre disposition un véhicule haut de gamme et un chauffeur professionnel pour tous vos déplacements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" type="image/png" href="/assets/faviconFC.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
        />
        
      </Head>
      <body
        className={urbanist.className}
        style={{
          backgroundColor: "black",
        }}
      >
        <Nav />
        {children}
        <Footer />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/toastify-js"
          async
        />
      </body>
    </html>
  );
}
