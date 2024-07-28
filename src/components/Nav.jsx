"use client";
import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Nav() {
  const locale = localStorage.getItem("locale");

  const b = useTranslations("Basics");
  const t = useTranslations("Nav");
  const [menu, setMenu] = useState(false);
  const [styleMenu, setStyleMenu] = useState({
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease-in-out",
    position: "fixed",
    top: "-19rem",
    width: "100%",
    zIndex: 10,
    height: "20rem",
    background: " rgb(0, 0, 0)",
  });

  const hideMenu = () => {
    setMenu(false);
    setStyleMenu({
      opacity: 0,
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
      position: "fixed",
      top: "-19rem",
      width: "100%",
      zIndex: 10,
      height: "20rem",
      background: " rgb(0, 0, 0)",
    });
  };

  return (
    <>
      <p className="fixed-hellobar">
        {t("card_payment")}
        <img src="/assets/svg/visa-svgrepo-com.svg" alt="icone apple pay svg" />
        <img
          src="/assets/svg/apple-pay-svgrepo-com.svg"
          alt="icone apple pay svg"
        />
        <img
          src="/assets/svg/google-pay-svgrepo-com.svg"
          alt="icone apple pay svg"
        />
      </p>
      <nav className="bg-black border-gray-200 fixed w-[100%] z-40 top-10 left-0 right-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="logoPng" src={"/assets/logo/2.png"} alt="logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => {
              setMenu(!menu);
              if (menu) {
                setStyleMenu({
                  opacity: 0,
                  visibility: "hidden",
                  transition: "all 0.3s ease-in-out",
                  position: "fixed",
                  top: "-19rem",
                  width: "100%",
                  zIndex: 10,
                  height: "20rem",
                  background: " rgb(0, 0, 0)",
                });
              } else {
                setStyleMenu({
                  opacity: 1,
                  visibility: "visible",
                  transition: "all 0.3s ease-in-out",
                  position: "fixed",
                  top: "6rem",
                  width: "100%",
                  zIndex: 10,
                  height: "25rem",
                  background: " rgb(0, 0, 0)",
                });
              }
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden dark:text-gray-400"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <Link
                  href={`/${locale}`}
                  className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#services`}
                  className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#procedure`}
                  className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {t("procedure")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#temoignage`}
                  className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {t("testimonial")}
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0"
                  }
                  className="flex justify-center align-middle items-center h-11 w-36 rounded-3xl text-black md:p-0 bg-white"
                  aria-current="page"
                >
                  {t("contact_me")}
                </Link>
              </li>
              <li>
                <select
                  className="select-lang"
                  onChange={(e) => {
                    const newLocale = e.target.value;

                    if (newLocale === "choose") return;

                    const currentPath = window.location.pathname;

                    const pathSegments = currentPath.split("/").filter(Boolean);

                    // Remplacez le premier segment (locale) si c'est une locale
                    if (
                      pathSegments.length > 0 &&
                      pathSegments[0].match(/^(fr|en)$/)
                    ) {
                      pathSegments[0] = newLocale;
                    } else {
                      // Sinon, ajoutez la nouvelle locale comme premier segment
                      pathSegments.unshift(newLocale);
                    }

                    // Construisez le nouveau chemin
                    const newPath = "/" + pathSegments.join("/");

                    // Stockez la locale dans le localStorage
                    localStorage.setItem("locale", newLocale);

                    // Redirigez vers la nouvelle URL
                    window.location.replace(newPath);
                  }}
                >
                  {/* <option value="choose">{b("choose")}</option> */}
                  <option className="globe-select" value="choose">🌐</option>
                  <option value="fr">FR 🇫🇷</option>
                  <option value="en">EN 🇺🇸</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div style={styleMenu} className="navmenu">
          <ul>
            <li
              onClick={() => {
                hideMenu();
              }}
            >
              <Link href={`/${locale}`}>{t("home")}</Link>
            </li>
            <li
              onClick={() => {
                hideMenu();
              }}
            >
              <Link href={`/${locale}#services`}>{t("services")}</Link>
            </li>
            <li
              onClick={() => {
                hideMenu();
              }}
            >
              <Link href={`/${locale}#procedure`}>{t("procedure")}</Link>
            </li>
            <li
              onClick={() => {
                hideMenu();
              }}
            >
              <Link href={`/${locale}#temoignage`}>{t("testimonial")}</Link>
            </li>
            <li
              onClick={() => {
                hideMenu();
              }}
            >
              <Link href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0">
                {t("contact_me")}
              </Link>
            </li>
            <li>
                <select
                  className="select-lang"
                  onChange={(e) => {
                    const newLocale = e.target.value;

                    if (newLocale === "choose") return;

                    const currentPath = window.location.pathname;

                    const pathSegments = currentPath.split("/").filter(Boolean);

                    // Remplacez le premier segment (locale) si c'est une locale
                    if (
                      pathSegments.length > 0 &&
                      pathSegments[0].match(/^(fr|en)$/)
                    ) {
                      pathSegments[0] = newLocale;
                    } else {
                      // Sinon, ajoutez la nouvelle locale comme premier segment
                      pathSegments.unshift(newLocale);
                    }

                    // Construisez le nouveau chemin
                    const newPath = "/" + pathSegments.join("/");

                    // Stockez la locale dans le localStorage
                    localStorage.setItem("locale", newLocale);

                    // Redirigez vers la nouvelle URL
                    window.location.replace(newPath);
                  }}
                >
                  {/* <option value="choose">{b("choose")}</option> */}
                  <option className="globe-select" value="choose">🌐</option>
                  <option value="fr">FR 🇫🇷</option>
                  <option value="en">EN 🇺🇸</option>
                </select>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
