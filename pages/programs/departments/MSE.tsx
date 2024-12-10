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

const MSEPage: React.FC<PropType> = (props) => {
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
      name: "Jung-ho park",
      description: "Department chair",
    },
    {
      name: "Steven Eisenbarth",
      description: "Lecturer",
    },
    {
      name: "Manhoon Lee",
      description: "Lecturer",
    },
    {
      name: "Changsin Lee",
      description: "Lecturer",
    },
    {
      name: "Dulguundusal T.",
      description: "Lecturer",
    },    

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Master in Software Engineering"
                textdesc=""
                image={"/images/programImg/departmentImg/CSbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                Master in Software Engineering department at MIU provides the students who are able to fit in the technology era,
                with basic science and software engineering knowledge as well as field experiences</div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}>Curriculum</a>
                <div className={styles.h1}>
                ● Analysis of Software Artifacts
                <br />
                ● Security-sensitive software
                <br />
                ● Real-time software system
                <br />
                ● Agile Software Development Frameworks
                <br />
                ● “Research in future system software (OS and programming language)”
                <br />
                ● System Architectures for Managers
                </div>
                <a className={styles.a}>
                Career Opertunities
                </a>
                <div className={styles.h2}>
                Our graduates work and intern in a range of jobs in a broad range of fields — public relations, marketing, advertising, social media, television, radio, magazines, human resources, event planning, education, nonprofits, and technology.
                We’ve also had graduates start their own businesses and others go on to graduate school in communication, law, public health, strategic communications, and education.
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
                        src={`/images/faculties/MSE/Faculty${index + 1}.jpg`}
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
export default MSEPage;