import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer
        id="contactez-nous"
        className="pt-0 xl:mt-32 mx-auto w-full relative text-center bg-black text-white"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12 bg-black">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ne perdez plus votre temps?
            <br />{" "}
            <span className="text-xl font-medium">
              Commandez votre chauffeur dès maintenant!
            </span>
          </h2>
          <a
            className="text-black mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-white rounded-full shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0'"
          >
            Réservez dès maintenant
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <a href="#accueil">Accueil</a>
              </div>
              <div className="px-5 py-2">
                <a href="#services">Services</a>
              </div>
              <div className="px-5 py-2">
                <a href="#procedure">Procédure</a>
              </div>
              <div className="px-5 py-2">
                <a href="#temoignage">Témoignage</a>
              </div>
              <div className="px-5 py-2">
                <a href="#contactez-moi">Contactez-moi</a>
              </div>
            </nav>
            <p className="paiement-texte">
              Paiement par carte disponible
              <img
                src="./assets/svg/visa-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
              <img
                src="./assets/svg/apple-pay-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
              <img
                src="./assets/svg/google-pay-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
            </p>
            <p className="mt-7 text-base">©2024 ODigital</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
