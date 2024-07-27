"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import "../../styles/Dashboard.css";
import AllTestimonialDashboard from "../../components/AllTestimonialDashboard";
import "../../styles/WriteTestimonial.css";

function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isConnected = localStorage.getItem("isConnected");
    if (isConnected) {
      setIsConnected(true);
    }
  }, []);

  const verifyPassword = (e) => {
    e.preventDefault();

    if (!password) {
      Toastify({
        text: "Veuillez insérer un mot de passe",
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
      return;
    }
    if (password === "fastcaradmin123") {
      localStorage.setItem("isConnected", true);
      Toastify({
        text: "Vous êtes connecté",
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "green",
      }).showToast();

      setIsConnected(true);
      console.log("password correct");
    } else {
      Toastify({
        text: "Mot de passe incorrect",
        close: true,
        position: "center",
        gravity: "bottom", // `top` or `bottom`
        duration: 3000,
        backgroundColor: "red",
      }).showToast();

      console.log("password incorrect");
    }
  };
  return (
    <section className="section-dashboard">
      <h1 className="title-page-write-post">
        {/* <img className="icone_left" src="/assets/svg/star.svg" alt="pencil" /> */}
        Voici les avis de vos passagers
        {/* <img
          className="icone"
          src="/assets/svg/pencil-simple-line.svg"
          alt="pencil"
        /> */}
      </h1>
      <h2 className="subtitle-page-write-post">
        Vous pouvez les consulter et les valider
      </h2>

      {isConnected ? (
        <>
          <button
            onClick={() => {
              localStorage.removeItem("isConnected");
              setIsConnected(false);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}
            className="logout_button"
          >
            Se déconnecter
          </button>
          <AllTestimonialDashboard />
        </>
      ) : (
        <>
          <form className="form-testimonial">
            <label htmlFor="password" className="label-search">
              Entrer le mot de passe afin de vous connecter
            </label>
            <div className="password-div">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <img src="/assets/svg/eye-slash.svg" alt="lock" />
                ) : (
                  <img src="/assets/svg/eye.svg" alt="lock" />
                )}
              </button>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Insérer le mot de passe"
                className="input-search"
              />
            </div>

            <button
              className="button-validate"
              type="submit"
              onClick={(e) => {
                verifyPassword(e);
              }}
            >
              Se connecter
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Page;
