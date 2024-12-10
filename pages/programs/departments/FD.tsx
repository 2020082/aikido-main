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

const FDPage: React.FC<PropType> = (props) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
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
      facultyRef.current
    ) {
      intersectionObserver.observe(overviewRef.current);
      intersectionObserver.observe(curriculumRef.current);
      intersectionObserver.observe(facultyRef.current);
    }

    return () => {
      if (
        overviewRef.current &&
        curriculumRef.current &&
        facultyRef.current
      ) {
        intersectionObserver.unobserve(overviewRef.current);
        intersectionObserver.unobserve(curriculumRef.current);
        intersectionObserver.unobserve(facultyRef.current);
      }
    };
  }, []);

  const { slides, options } = props;
  const faculties = [
    {
      name: "Ashley Kim",
      description: "Department Chair",
    },
    {
      name: "Joeun Lee",
      description: "Senior Lecturer",
    },
    {
      name: "Hyun Jung Kim",
      description: "Senior Lecturer",
    },
    {
      name: "Lida Borkhuu",
      description: "Professor",
    },
    {
      name: "Battuul Tserenchimed",
      description: "Professor",
    },
    {
      name: "Tuultsetseg Chigsem",
      description: "Professor",
    },  
    {
      name: "Anujin Enkhnold",
      description: "Secretary",
    },      

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Fashion Design"
                textdesc=""
                image={"/images/programImg/departmentImg/FDbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                The Fashion Design (FD) department of MIU equips students with skills needed in the global fashion industry: fashion design, fashion business, social responsibility, communication, and leadership.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Curriculum</a>
                <div className={styles.h1}>
                FD curriculum is structured based on four main fields of study: apparel design, project presentation, collection development, and fashion business. The curriculum of the FD Department includes holistic but essential areas of fashion studies to equip FD students with the vision and innovation to be a global leader in the apparel industry. 
                <br /><br />
                ●   Apparel Design: Fashion Design, Surface Design for Fabric, Mongolian Cashmere Products, Sustainability, Applied <br /> &nbsp;&nbsp;&nbsp;Textile,Mongolian Costume, Credits Exchange, Design Competition, Internship, Senior Fashion Show.
                  <br /><br />
                ● Projects Presentation: Draping, Pattern-drafting, Fit Analysis, Construction Techniques.
                <br /><br />
                ●  Collection Development: Free Drawing, Digital Design, Adobe, Clo3d, Fashion Portfolio. 
                <br /><br />
                ●  Fashion Business: Fashion Marketing, Merchandising, Brand Management.
                </div>
                <a className={styles.a}>
                Opportunities
                </a>
                <div className={styles.h2}>
                ● Students will have different opportunities to participate in different fashion events to gain exposure to the fashion industries such as 
                <br />
                ● Organizing their own fashion show and exhibition every semester 
                <br />
                ● Internships with different fashion companies 
                <br />
                ● Participation in social and career program 
                <br />
                ● Participation in an international fashion design competition
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
                        src={`/images/faculties/FD/Faculty${index + 1}.jpg`}
                        alt={`Profile of ${faculty.name}`}
                    />

                <p className={styles.facultyName}>{faculty.name}</p>
                <p className={styles.facultyDescription}>{faculty.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

                

           
        </div>
        
    );
};
export default FDPage;