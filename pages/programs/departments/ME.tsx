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

const MEPage: React.FC<PropType> = (props) => {
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
      name: "Soim Kim",
      description: "Department Chair",
    },
  

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Music Education"
                textdesc=""
                image={"/images/programImg/departmentImg/MEbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                “The ME Department of New Media Music teaches techniques for producing music of various genres, including classical music, pop, jazz, and ballads. We are reorganizing the music education environment by providing a digital audio workstation (DAW) program. Computer music and practical training Through ensemble classes using musical instruments, you can create more human and emotional music in the AI era. Within this cutting-edge curriculum, participants utilize the capabilities of sophisticated digital audio systems to multi-track recording, overdubbing, and editing music of various genres. and explores the process of mastering.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Year 1 / Students are introduced to:</a>
                <div className={styles.h1}>
                 ● Music Performance Study (Piano, Voice, Applied) <br />
                 ● Secondary Performance Study (Piano, Voice, Applied) <br />
                </div>
                <a className={styles.a}>
                Year 2 / Students develop skills in:
                </a>
                <div className={styles.h2}>
                ● Chorale Ensemble <br />
                ● Music Theory and Literature <br />
                ● Music History and Literature <br />
                                </div>
                <a className={styles.a}>
                Year 3 / Students gain knowledge in:
                </a>
                <div className={styles.h3}>
                ● Performance Repertoire and Pedagogy <br />
                ● Keyboard Musicianship <br />
                ● Music Technology in Education <br />
                </div>
                <a className={styles.a}>
                Year 4 / Students move into:
                </a>
                <div className={styles.h4}>
                ● General Music Method <br />
                ● Music Education Rehearsal Practicum
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
                        src={`/images/faculties/ME/Faculty${index + 1}.jpg`}
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
                <span className={styles.textsize1}><br /> Tsatsral Saikhanbayar</span> <br /><br /><br /><br />
                <span className={styles.textsize2}>Music teacher at Orchlon International School</span>  <br /><br /><br /><br />
                I’ve loved music since I was a child. I started to study musical instruments when I was young. MIU has given me opportunity to get world-class music education. Besides the music knowledge and skills, ME department has taught me crucial life lessons. With my Music Education background, I have been able to pursue my career as a music teacher. I believe ME will keep making an impact on the young people who want to become great musicians and teachers.
                </h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/MEalumni.jpeg" alt="MEalumni" width={450} height={550} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default MEPage;