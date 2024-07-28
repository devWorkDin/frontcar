"use client";
import React from "react";
import "../styles/Footer.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Footer() {
  const locale = localStorage.getItem("locale");
  const t = useTranslations("Footer");

  const b = useTranslations("Homepage");
  const n = useTranslations("Nav");
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
            {t("dont_waste_time")}
            <br />
            <span className="text-xl font-medium">{t("order_driver_now")}</span>
          </h2>
          <a
            className="text-black mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-white rounded-full shadow-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0'"
          >
            {b("book_now")}
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <Link href={`/${locale}#accueil`}>{n("home")}</Link>
              </div>
              <div className="px-5 py-2">
                <Link href={`/${locale}#services`}>{n("services")}</Link>
              </div>
              <div className="px-5 py-2">
                <Link href={`/${locale}#procedure`}> {n("procedure")}</Link>
              </div>
              <div className="px-5 py-2">
                <Link href={`/${locale}#temoignage`}>{n("testimonial")}</Link>
              </div>
              <div className="px-5 py-2">
                <Link href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0">
                  {n("contact_me")}
                </Link>
              </div>
            </nav>
            <hr className="border-gray-600 my-8" />
            <p className="paiement-texte">
              {n("card_payment")}
              <img
                src="/assets/svg/visa-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
              <img
                src="/assets/svg/apple-pay-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
              <img
                src="/assets/svg/google-pay-svgrepo-com.svg"
                alt="icone apple pay svg"
              />
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=601135620545&text=Bonjour%20%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services%20%F0%9F%98%8A"
              className="mt-7 text-base"
            >
              ©2024 ODigital
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
