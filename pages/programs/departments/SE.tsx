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

const SEPage: React.FC<PropType> = (props) => {
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
      name: "Jung-ho park",
      description: "Assistant Professor",
    },
    {
      name: "Steven Eisenbarth",
      description: "Professor",
    },
    {
      name: "Dulamsuren Sharkhuu",
      description: "Asistant Professor",
    },
    {
      name: "Kevin Abbot",
      description: "Associate Professor",
    },
    {
      name: "Min Young Ra",
      description: "Associate Professor",
    },
    {
      name: "Dulguundusal T.",
      description: "Lecturer",
    },    

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Software Engineering"
                textdesc=""
                image={"/images/programImg/departmentImg/CSbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                Software Engineering (SE) graduates are highly marketable. They know business and programming. 
                Students enrolled in the SE program take courses from both the Department of Computer Science and the Department of Business Administration,
                two of MIU’s premier departments; both are accredited. SE degree is geared to students who: <br /><br />
                -Want to learn the languages of business and technology.<br />
                -Want to manage information systems and ensure that computers work well for people.<br />
                -Want to go more deeply into computer programming and technology than the typical business student.<br />
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Curriculum</a>
                <div className={styles.h1}>
                 ● Web Programming
                 ● Operating Systems
                 ● Database Design
                 ● Mobile Programming
                 ● Computer Networks and Security
                 ● Human Computer Interaction
                 ● Management of Information Systems
                 ● Principles of Economics
                 ● Organization Behavior Theory 
                 ● Management Accounting
                </div>
                <a className={styles.a}>
                  Department Activities
                </a>
                <div className={styles.h2}>
                Blend of SE and Business. MIU is acclaimed nationally for its accredited Business and SE programs. 
                SE majors take courses in Departments.  <br />
                Hands-on technical career. Apply what you learn as an SE professional. 
                MIU is dedicated to help you find opportunities for meaningful technical work.<br />
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
                        src={`/images/faculties/SE/Faculty${index + 1}.jpg`}
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
export default SEPage;