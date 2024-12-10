import React from "react";
import { useTranslation } from "react-i18next";

const Marquee: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="marquee-container">
      <div className="content-wrapper">
        <p>{t("marqueeText1")}</p>
        <p>{t("marqueeText2")}</p>
        <p>{t("marqueeText3")}</p>
      </div>
      <div className="content-wrapper">
        <p>{t("marqueeText2")}</p>
        <p>{t("marqueeText3")}</p>
      </div>
      <div className="content-wrapper">
        <p>{t("marqueeText3")}</p>
      </div>
    </div>
  );
};

export default Marquee;
