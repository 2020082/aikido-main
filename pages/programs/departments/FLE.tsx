import React, { useEffect, useRef } from "react";
import styles from "./department.module.css"
import Image from "next/image";
import ImageCarousel from "@/components/imageCarousel";


interface FacultyType {
    // Define properties for EmployeeType here if needed
  }
  
  type PropType = {
    slides: number[];
    options?: FacultyType;
  };

const FLEPage: React.FC<PropType> = (props) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const alumniRef = useRef<HTMLDivElement>(null);

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
      alumniRef.current 
    ) {
      intersectionObserver.observe(overviewRef.current);
      intersectionObserver.observe(curriculumRef.current);
      intersectionObserver.observe(alumniRef.current);
     
    }

    return () => {
      if (
        overviewRef.current &&
        curriculumRef.current &&
        alumniRef.current 
      ) {
        intersectionObserver.unobserve(overviewRef.current);
        intersectionObserver.unobserve(curriculumRef.current);
        intersectionObserver.unobserve(alumniRef.current);
      }
    };
  }, []);

  const { slides, options } = props;
  


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Foreigner Language Education"
                textdesc=""
                image={"/images/programImg/departmentImg/MIMbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                <br /><br /><br /><br />
                Overview
                <div className={styles.h1}>
                FLE at MIU is founded for training international English education specialists who have a thorough understanding of Language Acquisition and various training and teaching methods. FLE teaches the basic principles and fundamentals of languages, which are crucial for effective foreign language education. 
                <br /><br />
                FLE looks to enhance students’ understanding of both English and non-English speaking cultures and languages. The program also gives students the opportunity to examine their own language and culture through interaction with students from different cultures.
</div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Curriculum</a>
                <div className={styles.h1}>
                 ● Theory & Method in Second Language Learning <br />
                 ● English Language Teaching Method <br />
                 ● Material Use & Development for English Education<br /> 
                 ● Teacher Education & Development <br />
                 ● Principles of Language Testing <br />
                 ● Teaching Language & Culture <br />
                 ● Research Methodology for English Language<br /> 
                 ● Teaching Seminar: Current Issues in Language Teaching<br /> 
                 ● Professional Practice<br />
                </div>
                <a className={styles.a}>
                Opportunities
                </a>
                <div className={styles.h2}>
                ● FLE faculty members are from different foreign countries and are holding master and doctor degrees of prestigious universities 
                <br />
                ● Providing classes and seminars that will be taught from various perspectives 
                <br />
                ● Helping students to complete an in-depth dissertation through one-on-one thesis guidance 
                <br />
                ● Providing an academic and systematic course about English education
                </div>
            </div>
            <div ref={alumniRef} className={`${styles.alumni}`}>
               
               <h1 className={styles.alumniText}>
               <span className={styles.textsize3}>Alumni</span> 
                <span className={styles.textsize1}><br /> Peter Laichhoh Fachhai</span> <br /><br /><br /><br />
                <span className={styles.textsize2}>Country: India <br />
                FLE Graduate, 2021
                </span>  <br /><br /><br /><br />
                MIU gave me the platform to become a better teacher through its FLE masters program. I learned to accept and cooperate with international friends. FLE at MIU has prepared me very well for the jobs that I am working now which are the Director of Student Affairs and a teacher. <br /> With the international atmosphere that MIU provided, I learned to tackle issues related to academic and culture among students amicably.
                </h1> 
                <div className={styles.alumImg}>
                
                </div>
                </div>
                

           
        </div>
        
    );
};
export default FLEPage;