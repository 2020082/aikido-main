import React, { useEffect, useRef } from "react";
import styles from "./department.module.css";
import Image from "next/image";
import ImageCarousel from "@/components/imageCarousel";
import { useTranslation } from "react-i18next";

interface FacultyType {
  // Define properties for EmployeeType here if needed
}

type PropType = {
  slides: number[];
  options?: FacultyType;
};

const CsPage: React.FC<PropType> = (props) => {
  const { t } = useTranslation();
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const alumniRef = useRef<HTMLDivElement>(null);
  const facultyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (
      overviewRef.current &&
      curriculumRef.current &&
      alumniRef.current &&
      facultyRef.current
    ) {
      intersectionObserver.observe(overviewRef.current);
      intersectionObserver.observe(curriculumRef.current);
      intersectionObserver.observe(alumniRef.current);
      intersectionObserver.observe(facultyRef.current);
    }

    return () => {
      if (
        overviewRef.current &&
        curriculumRef.current &&
        alumniRef.current &&
        facultyRef.current
      ) {
        intersectionObserver.unobserve(overviewRef.current);
        intersectionObserver.unobserve(curriculumRef.current);
        intersectionObserver.unobserve(alumniRef.current);
        intersectionObserver.unobserve(facultyRef.current);
      }
    };
  }, []);

  const { slides, options } = props;
  const faculties = [
    {
      name: "Jung-ho park",
      description: "Professor",
    },
    {
      name: "Steven",
      description: "Professor",
    },
    {
      name: "James Jang",
      description: "Lecturer",
    },
    {
      name: "Dulguundusal T.",
      description: "Lecturer",
    },
    {
      name: "Dulamsuren Sharkhuu",
      description: "Asistant Professor",
    },
  ];

  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent={t("csPage.title")}
        textdesc=""
        image={"/images/programImg/departmentImg/CSbackgroundImg.jpg"}
      />

      <div ref={overviewRef} className={`${styles.overview}`}>
        <h1>{t("csPage.overview.title")}</h1>
        <div className={styles.h1}>
          <p>{t("csPage.overview.description")}</p>
        </div>
      </div>

      <div ref={curriculumRef} className={`${styles.curriculum}`}>
        <h1>{t("csPage.curriculum.title")}</h1>
        <a className={styles.a}>
          <h2>{t("csPage.curriculum.year1")}</h2>
        </a>

        <div className={styles.h1}>
          {t("csPage.curriculum.details.year1_1")}
          <br />
          {t("csPage.curriculum.details.year1_2")}
          <br />
          {t("csPage.curriculum.details.year1_3")}
        </div>

        <a className={styles.a}>
          <h2>{t("csPage.curriculum.year2")}</h2>
        </a>
        <div className={styles.h2}>
          {t("csPage.curriculum.details.year2_1")}
          <br />
          {t("csPage.curriculum.details.year2_2")}
          <br />
          {t("csPage.curriculum.details.year2_3")}
          <br />
          {t("csPage.curriculum.details.year2_4")}
        </div>

        <a className={styles.a}>
          <h3>{t("csPage.curriculum.year3")}</h3>
        </a>
        <div className={styles.h3}>
          {t("csPage.curriculum.details.year3_1")}
          <br />
          {t("csPage.curriculum.details.year3_2")}
          <br />
          {t("csPage.curriculum.details.year3_3")}
          <br />
        </div>

        <a className={styles.a}>
          <h4>{t("csPage.curriculum.year4")}</h4>
        </a>
        <div className={styles.h4}>
          {t("csPage.curriculum.details.year4_1")}
          <br />
          {t("csPage.curriculum.details.year4_2")}
          <br />
          {t("csPage.curriculum.details.year4_3")}
          <br />
          {t("csPage.curriculum.details.year4_4")}
        </div>
      </div>
      <div ref={facultyRef} className={`${styles.faculty}`}>
        <div className={styles.title}>Faculties</div>

        <div className={styles.facultyList}>
          {faculties.map((faculty, index) => (
            <div className={styles.facultyItem} key={index}>
              <div className={styles.facultyDetail}>
                <img
                  className={styles.facultyImg}
                  src={`/images/faculties/CS/Faculty${index + 1}.jpg`}
                  alt={`Profile of ${faculty.name}`}
                />

                <p className={styles.facultyName}>{faculty.name}</p>
                <p className={styles.facultyDescription}>
                  {faculty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={alumniRef} className={`${styles.alumni}`}>
        <h1 className={styles.alumniText}>
          <span className={styles.textsize3}>Alumni</span>
          <span className={styles.textsize1}>
            <br /> Bilegt Gantulga
          </span>{" "}
          <br />
          <br />
          <br />
          <br />
          <span className={styles.textsize2}>Works at Khaan bank</span> <br />
          <br />
          <br />
          <br />
          "I’m glad that I learned the basics of information technology in
          English. It has given me the opportunity to grow more than I could
          have imagined in the field in just a short period of time."
        </h1>
        <div className={styles.alumImg}>
          <Image
            src="/images/programImg/departmentImg/CSalumni.jpeg"
            alt="CSalumni"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
  );
};
export default CsPage;
