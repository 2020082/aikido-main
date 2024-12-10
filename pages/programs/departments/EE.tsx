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

const EEPage: React.FC<PropType> = (props) => {
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
      name: "Dulguunsaran Amartuvshin",
      description: "Department Chair",
    },
    {
      name: "Yang Liu(sunny)",
      description: "Senior Lecturer",
    },
    {
      name: "Eva Lui",
      description: "Senior Lecturer",
    },
    {
      name: "Purevtsagaan Enkhjargal",
      description: "Lecturer",
    },
    {
      name: "Jonathan Sande",
      description: "Lecturer",
    },    

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="English Education"
                textdesc=""
                image={"/images/programImg/departmentImg/EEbackgroundImg.jpg"}
                />

            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                English Education Department seeks to train up effective and innovative English teachers across Mongolia and Central Asia with a high-quality education that guides students to service with honesty, integrity, humility and professionalism.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Curriculum</a>
                <div className={styles.h1}>
                 ● Language Lab <br />
                 ● Extensive Reading<br />
                 ● Seminar in Cultural Studies<br />
                 ● Introduction to English Literature<br /> 
                 ● Introduction to English<br />
                 ● Linguistics<br />
                 ● Teaching Methodology<br />
                 ● Principle of Education<br />
                 ● Educational Psychology<br />
                 ● English Translation Practice<br /> 
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
                        src={`/images/faculties/EE/Faculty${index + 1}.jpg`}
                        alt={`Profile of ${faculty.name}`}
                    />

                <p className={styles.facultyName}>{faculty.name}</p>
                <p className={styles.facultyDescription}>{faculty.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div ref={alumniRef} className={`${styles.alumni}`}>
               
               <h1 className={styles.alumniText}>
               <span className={styles.textsize3}>Alumni</span> 
                <span className={styles.textsize1}><br /> Ichinkhorloo Sundui</span> <br /><br /><br /><br />
                <span className={styles.textsize2}>
                English teacher at New Era International School <br />
                Dept. of English Education at MIU (2021)
                </span>  <br /><br /><br /><br />
                One of the most important choices in life is a choosing a university. I chose the best one by coming to MIU! To be honest, before studying at MIU I was not thinking of being an English teacher. But the more my professors inspired me the more my heart was filled with passion and dream to become a teacher. My four years at MIU was a time of growth both professionally and personally in which I discovered an unknown strength of mine. Furthermore, I am always thankful to MIU professors who are not only teachers, but truly counselors in my view. Through them, I learned that being a teacher is like an eagle with two powerful wings. One is about teaching skills with great knowledge, and the other one is about caring for students with a real heart, which I might never have learned if I had not studied at MIU. So, with both wings the eagle can fly higher than any other. This is how MIU greatly influenced me and changed my perspective from my past understanding of being a teacher. I still remember the lessons my teachers taught me; and now I use them in my teaching as well. Also, whoever is reading this, don’t feel worried about your current language level because I am sure you are much better than me compared to my freshman year. But, now I actually teach English to many students… in English! Welcome to my university.
                </h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/EEalumni.jpg" alt="EEalumni" width={500} height={600} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default EEPage;