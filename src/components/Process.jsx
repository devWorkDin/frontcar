import React from "react";
import Image from "next/image";
import "../styles/Process.css";
import { Bounce } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
function Process() {
  const t = useTranslations("Homepage");
  return (
    <Bounce>
      <div className="grid-process" id="procedure">
        <div className="grid-process-item">
          <div className="frame first">
            <Image
              src="/assets/svg/whatsapp.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
          <h2>{t('book_on_whatsapp')}</h2>
          <p>
          {t('whatsapp_contact')}
          </p>
        </div>
        <div className="grid-process-item second">
          <div className="frame second">
            <Image
              src="/assets/svg/notification.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
          <h2>{t('instant_confirmation')}</h2>
          <p>
          {t('confirmation_details')}
          </p>
        </div>
        <div className="grid-process-item third">
          <div className="frame last">
            <Image
              src="/assets/svg/user-focus.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
          <h2>{t('personalized_service')}</h2>
          <p>
          {t('personalized_service_description')}
          </p>
        </div>
      </div>
    </Bounce>
  );
}

export default Process;
