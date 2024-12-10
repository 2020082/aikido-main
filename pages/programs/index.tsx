import React from "react";
import styles from "./Ac.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ImageCarousel from "@/components/imageCarousel";
const academicProgramPage: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const navigateToDepartments = () => {
    router.push("/programs/departments");
  };
  const navigateToTpTprogram = () => {
    router.push("/programs/TpTprogram");
  };
  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent="Academic Programs"
        textdesc=""
        image={"/images/programImg/graduation.jpg"}
      />
      <div className={styles.Exboxes}>
        <div className={styles.Exbox1}>
          {t("academic.exchange.program")}
          <div className={styles.ExText1}>
            “{t("academic.exchange.programText1")}”
            <br />
            <br />
            {t("academic.exchange.programText2")}
          </div>
          <button className={styles.viewProgram} onClick={navigateToDepartments}>
          {t("academic.viewProgram")}
          </button>
          <div className={styles.Eximg1}></div>
        </div>
        <div className={styles.Exbox2}>
        {t("academic.2+2program")}
          <button className={styles.TpTprogram} onClick={navigateToTpTprogram}>
          {t("academic.2+2programBtn")}
          </button>
          <div className={styles.ExText2}>
          {t("academic.2+2programtext")}
          </div>
          <div className={styles.Eximg2}></div>
        </div>
        <div className={styles.Exbox3}>
        {t("academic.visiontrip")}
          <div className={styles.ExText3}>
          {t("academic.visiontripText")}
          </div>
          <div className={styles.Eximg3}></div>
        </div>
      </div>
      <div className={styles.ExText}></div>
    </div>
  );
};

export default academicProgramPage;
