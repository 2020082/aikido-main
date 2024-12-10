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

const MCPage: React.FC<PropType> = (props) => {
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
      name: "Jericho Burg",
      description: "Dean of MC",
    },
    {
      name: "Chong Su Kim",
      description: "Assistant Professor",
    },
    {
      name: "Batsugar Z.",
      description: "Lecturer",
    },
    {
      name: "Chogtoo Khereid",
      description: "Lecturer",
    },    

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Media & Communication"
                textdesc=""
                image={"/images/programImg/departmentImg/MCbackgroundImg.jpg"}
                />
            <div className={styles.box1}>
                Media & Communication
            </div>
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                The Media and Communication (MC) Department of MIU prepares skilled and innovative professionals in the fields of journalism, public relations, marketing, and media production. Our students develop a strong foundation in media and communication theory and practice, journalism, and media policy, with a sequence of courses that equip them to produce creative media content for national and international audiences. Public relations, advertising, and strategic communication round out the curriculum, enabling students to specialize in their area of professional interest.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Year 1 & 2 / Students are introduced to:</a>
                <div className={styles.h1}>
                ● Basic knowledge each of the SISC majors: International Relations, Media & Communication,
                 and International Development, <br /> &nbsp;&nbsp; Diplomacy, and International Law;
                <br /> <br />
                ● Foundamental academic writing and reading skills;
                </div>
                <a className={styles.a}>
                Year 3 / Students gain knowledge  and skills in:
                </a>
                <div className={styles.h3}>
                ● Media Writing, PR, Advertising, and Communication
                <br /><br />
                ● Practical media tools and photoshooting
                </div>
                <a className={styles.a}>
                Year 4 / Students move to:
                </a>
                <div className={styles.h4}>
                ● Practical usage of the skills learned in classes through internships
                <br /><br />
                ● MC graduation project development and research work
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
                        src={`/images/faculties/MC/Faculty${index + 1}.jpg`}
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
               <span className={styles.textsize3}>Welcome Message</span> 
                <span className={styles.textsize1}><br />Anastasiia Zharuk /M.S/</span> <br /><br /><br /><br />
                <span className={styles.textsize2}>
                Associate Professor, Media and Communication Department, MIU (2018-now) 
                <br /><br />  
                Program Manager, Media and Communication Program, School of International Studies and Communication, MIU (2021-)
                <br /><br />
                Ph.D. in Communication, University of California, San Diego, 2008
                </span>  <br /><br /><br /><br />
                From the moment I first arrived at MIU in late August, 2018, I knew it was a very special place. The sense of community, the welcoming environment, and the relationships I have developed with our students make it unlike any American or international university I’ve experienced. The level of care for individual students is unparalleled, and the university environment provides unique opportunities for personal and professional development for faculty and students alike. MIU enables academic achievement with personal growth in a way that produces graduates well equipped for both international careers and advanced study. The Media and Communication program in particular combines relevant coursework with international exposure to prepare students for a variety of fields, from journalism to marketing to social media production. MC students study important aspects of their field in a curriculum based on international standards. They also have hands-on, experiential learning opportunities through a series of practical courses and internships with local and international news organizations. I’m proud to be part of the MIU faculty and help our students learn, thrive, and succeed.
                </h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/MCwelcomeimg.jpg" alt="MCwelcome" width={450} height={550} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default MCPage;