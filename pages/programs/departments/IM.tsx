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

const IMPage: React.FC<PropType> = (props) => {
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
      name: "Choi Hui Park",
      description: "Professor, Department Chair",
    },
    {
      name: "Seung Hun Baek",
      description: "Senior Lecturer",
    },
    {
      name: "Victor Ngu",
      description: "Professor",
    },
    {
      name: "Zhi Hong Wang/Jossy/",
      description: "Lecturer",
    },
    {
      name: "Junguk Kim",
      description: "Asistant Professor",
    },    
    {
      name: "Undrakh Munkhbaatar",
      description: "Secretary",
    }, 
  ];

    return(
        <div className={styles.container}>
                <ImageCarousel
                textContent="Buisiness Administration"
                textdesc=""
                image={"/images/programImg/departmentImg/IMbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                Business Administration Department (BA) trains in managerial discipline and educates students how to effectively compete in the international business environment. Students are instructed to handle dynamic decision-making process problems in an era of globalization and information revolution in the world.</div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Skill Development</a>
                <div className={styles.h1}>
                ● Being equipped to be competent in a global business environment.
                <br />● Being grounded in a wider range of knowledge and theories of a global business.
                <br />● Training in the strategic decision-making process.
                <br />● Being able to lead and work on a team.
                <br />● Being aware of ethical and socially responsible issues.
                <br />● Being equipped with strong communication and networking skills.

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
                        src={`/images/faculties/IM/Faculty${index + 1}.jpg`}
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
                <span className={styles.textsize1}><br />Nomindari Enkhtur</span> <br /><br />
                <span className={styles.textsize2}>
                  M.S Candidate in Sustainability Management at Colombia University;
                  <br /> Fulbright Awardee (2018-2020);
                   <br /> Former CEO of the Mongolian Sustainable Finance Association;
                   <br />  Dept. of International Business Management at MIU (2013)
                  </span>  <br /><br /><br />
                “MIU has changed my life in many ways. 
                I truly believe that the values I learned at MIU, of responsibility, curiosity, creativity, and ethics among others, 
                have guided me through my professional and personal journey and helped me become the person I am today. 
                ​The diverse range of courses and university activities provided me with essential skills to become an effective manager in multicultural environments
                . Moreover the relationships I developed with MIU professors played a big part in widening my perspective of opportunities and realizing my fullest potential. 
                Even six years later, I always refer back to the lessons I learned and people I met at MIU. 
                I also reflect warmly on the sense of community that MIU students shared. 
                Last but not least, my English improved tremendously at MIU and that definitely gave me an edge in my career."</h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/IMalumni.jpg" alt="IMalumni" width={450} height={550} />
                </div>
                
                </div>
               

           
        </div>
        
    );
};
export default IMPage;