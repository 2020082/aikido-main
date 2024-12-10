import React from "react";
import styles from "./LEI.module.css";
import { useTranslation } from "react-i18next";
import ImageCarousel from "@/components/imageCarousel";
const LEIPage: React.FC = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent="Language Education Institute"
        textdesc=""
        image={"/images/programImg/LEIbackground.png"}
      />
      <div className={styles.rectangle}>
        <div className={styles.quarter}>{t("LEI.quarter1")}</div>
        <div className={styles.quarter}>{t("LEI.quarter2")}</div>
        <div className={styles.quarter}>{t("LEI.quarter3")}</div>
        <div className={styles.quarter}>{t("LEI.quarter4")}</div>
      </div>
      <div className={styles.coursebox1}>
        {t("LEI.coursebox1")}
        <div className={styles.coursebox11}>
        {t("LEI.coursebox11")}
        </div>
      </div>
      <div className={styles.coursebox2}>
        {t("LEI.coursebox2")}
        <div className={styles.coursebox22}>
        {t("LEI.coursebox22")}
          <br />
          {t("LEI.coursebox22-1")}
          <br />
          {t("LEI.coursebox22-2")}
          <br />
          {t("LEI.coursebox22-3")}
          <br />
          {t("LEI.coursebox22-4")}
          <br />
          {t("LEI.coursebox22-5")}
        </div>
      </div>
      <div className={styles.coursebox3}>
        {t("LEI.coursebox3")}
        <div className={styles.coursebox33}>
        {t("LEI.coursebox33")}
        </div>
      </div>
      <div className={styles.coursebox4}>
        {t("LEI.coursebox4")}
        <div className={styles.coursebox44}>
        {t("LEI.coursebox44")}
        </div>
      </div>
      <div className={styles.coursebox5}>
        {t("LEI.coursebox5")}
        <div className={styles.coursebox55}>
        {t("LEI.coursebox55")}
        </div>
      </div>
    </div>
  );
};

export default LEIPage;
