import AllTestimonial from "../../components/AllTestimonial";
import ProfilDriver from "../../components/ProfilDriver";
import React from "react";
import "../../styles/AllTestimonial.css";
import "../../styles/WriteTestimonial.css";
import Link from "next/link";

function Page() {
  return (
    <>
      <h1 className="title-page-write-post">
        {/* <img className="icone_left" src="/assets/svg/star.svg" alt="pencil" /> */}
        Voici tous les témoignages
        {/* <img
          className="icone"
          src="/assets/svg/pencil-simple-line.svg"
          alt="pencil"
        /> */}
      </h1>
      <h2 className="subtitle-page-write-post">
        Vous pouvez les consulter et faire vos propres avis !
      </h2>
      <Link className="button-write" href={"/ecrire-un-temoignage"}>
        <p>Écrire un témoignage</p>
        <img className="icone" src="/assets/svg/pencil-simple-line.svg" alt="pencil" />
      </Link>
      <ProfilDriver />
      <AllTestimonial />
    </>
  );
}

export default Page;
