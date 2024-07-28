import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import React from "react";
import Head from "next/head";

import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Bienvenue chez Fastcar - Votre Service de Chauffeur VTC de Luxe",
  description:
    "Découvrez une expérience de transport inégalée avec Fastcar. Spécialisés dans le service de chauffeur VTC, nous mettons à votre disposition un véhicule haut de gamme et un chauffeur professionnel pour tous vos déplacements.",
};
const urbanist = Urbanist({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
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
          {/* <Script id="my-script">{`window.$crisp=[];window.CRISP_WEBSITE_ID="1ec2ebe2-e783-4b5e-8bea-090991f2098b";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})()`}</Script> */}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
