"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../styles/Nav.css";

function Nav() {
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
      Paiement par carte disponible
 <img src="./assets/svg/visa-svgrepo-com.svg" alt="icone apple pay svg"/>
 <img src='./assets/svg/apple-pay-svgrepo-com.svg' alt="icone apple pay svg"/>
 <img src='./assets/svg/google-pay-svgrepo-com.svg' alt="icone apple pay svg"/>
     


    </p>
    <nav className="bg-black border-gray-200 fixed w-[100%] z-40 top-10 left-0 right-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img className="logoPng" src={"/assets/logo/2.png"} alt="logo" />
        </a>
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
                top: "4rem",
                width: "100%",
                zIndex: 10,
                height: "25rem",
                background: " rgb(0, 0, 0)",
              });
            }
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a
                href="#accueil"
                className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                aria-current="page"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#procedure"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Procédure
              </a>
            </li>
            <li>
              <a
                href="#temoignage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Témoignage
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0"
                className="flex justify-center align-middle items-center h-11 w-36 rounded-3xl text-black md:p-0 bg-white"
              >
                Contactez-moi
              </a>
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
            <a href="#accueil">Accueil</a>
          </li>
          <li
            onClick={() => {
              hideMenu();
            }}
          >
            <a href="#services">Services</a>
          </li>
          <li
            onClick={() => {
              hideMenu();
            }}
          >
            <a href="#procedure">Procédure</a>
          </li>
          <li
            onClick={() => {
              hideMenu();
            }}
          >
            <a href="#temoignage">Témoignage</a>
          </li>
          <li
            onClick={() => {
              hideMenu()
            }}
          >
            <a href="https://api.whatsapp.com/send/?phone=33786740798&text&type=phone_number&app_absent=0">
              Contacez-moi
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>

  );
}

export default Nav;
