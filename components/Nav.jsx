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
    zIndex: "100",
    height: "20rem",
    background: " rgb(0, 0, 0)",
  });

  return (
    <nav className="bg-black border-gray-200 fixed w-[100%] z-40">
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
              setStyleMenu({ opacity: 0,
                visibility: "hidden",
                transition: "all 0.3s ease-in-out",
                position: "fixed",
                top: "-19rem",
                width: "100%",
                zIndex: "100",
                height: "20rem",
                background: " rgb(0, 0, 0)",});
            } else {
              setStyleMenu({ 
                opacity: 1,
                visibility: "visible",
                transition: "all 0.3s ease-in-out",
                position: "fixed",
                top: "4rem",
                width: "100%",
                zIndex: "100",
                height: "20rem",
                background: " rgb(0, 0, 0)",
               });
            }
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styleMenu} className="navmenu">
        <ul>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Procédure</a>
          </li>
          <li>
            <a href="">Témoignage</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
