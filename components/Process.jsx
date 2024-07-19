import React from "react";
import Image from "next/image";
import "../styles/Process.css";
import { Bounce } from "react-awesome-reveal";
function Process() {
  return (
    <div className="grid-process">
      <Bounce>
        <div className="grid-process-item">
          <div className="frame first">
            <Image
              src="./assets/svg/whatsapp.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
          <h2>Réserver sur WhatsApp</h2>
          <p>Contactez nous via WhatsApp afin de programmer votre trajet</p>
        </div>
      </Bounce>
      <Bounce>
        <div className="grid-process-item second">
          <div className="frame second">
            <Image
              src="./assets/svg/notification.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
          <h2>Confirmation Instantanée</h2>
          <p>
            Recevez une confirmation de votre réservation par email avec tous
            les détails de votre trajet.
          </p>
        </div>
      </Bounce>
      <Bounce>
      <div className="grid-process-item third">
        <div className="frame last">
          <Image
            src="./assets/svg/user-focus.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />{" "}
        </div>
        <h2>Service Personnalisé</h2>
        <p>
          Profitez d&apos;un service personnalisé et de qualité pour tous vos
          déplacements.
        </p>
      </div>
      </Bounce >

    </div>
  );
}

export default Process;
