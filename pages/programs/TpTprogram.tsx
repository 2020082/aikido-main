import React, { useEffect, useRef } from "react";
import styles from "./TpTprogram.module.css";
import ImageCarousel from "@/components/imageCarousel";
const TpTPage: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const qualificationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      introductionRef.current &&
      qualificationRef.current &&
      contactRef.current
    ) {
      intersectionObserver.observe(introductionRef.current);
      intersectionObserver.observe(qualificationRef.current);
      intersectionObserver.observe(contactRef.current);
    }

    return () => {
      if (
        introductionRef.current &&
        qualificationRef.current &&
        contactRef.current
      ) {
        intersectionObserver.unobserve(introductionRef.current);
        intersectionObserver.unobserve(qualificationRef.current);
        intersectionObserver.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
        <ImageCarousel
        textContent="2+2 Program"
        textdesc=""
        image={"/images/programImg/22program.jpeg"}
         />
      <div ref={introductionRef} className={`${styles.introduction}`}>
        What is 2+2?
        <div className={styles.introductionBox}>
          2 years (MIU) + 2 years (other university) ={" "}
          <h1 className={styles.h1}>"2 Diploma"</h1>
          <br />
          <br />
          <h2 className={styles.h2}> "why 2+2?" </h2>
          <h3 className={styles.h3}>
            ● low cost & affordable fee <br />● experience campus life in
            Mongolia & other countries
          </h3>
        </div>
      </div>
      <div ref={qualificationRef} className={`${styles.qualification}`}>
        Qualification
        <div className={styles.qualificationBox}>
          <div className={styles.h3}>
            ● Undergraduate students, who completed 2 years at MIU <br />
            ● GPA : 3.4/4.0 or higher <br />
            ● English Test : TOEFL IBT 70 or IELTS 6.0 or above <br />
            <br />
            <h4 className={styles.h4}>
              ※ Requirements may change according to partner university
              regulations
            </h4>
          </div>
        </div>
      </div>

      <div ref={contactRef} className={`${styles.contact}`}>
        Contact Us
        <div className={styles.contactBox}>
          <h5 className={styles.h5}>
            Contact Emails: <br />
            student2@miu.edu.mn / dir_student@miu.edu.mn
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TpTPage;
