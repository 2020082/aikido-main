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

const MPAPage: React.FC<PropType> = (props) => {
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
      description: "Dean of MPA",
    },
    {
      name: "Mohammad Ishfaq",
      description: "Lecturer",
    },
    {
      name: "Hriday Chandra Sarma",
      description: "Lecturer",
    },
    {
      name: "Awele Oguejiofor",
      description: "Lecturer",
    },

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Master in Public Administration"
                textdesc=""
                image={"/images/programImg/departmentImg/MPAbackgroundImg.jpg"}
                />
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                Mater of Public Administration (MPA) program is designed to prepare professionally-trained and ethical government officials and public service officers. MPA Students are to gain fundamental knowledge of public policy, its analysis and implementation that will impower them to make a positive change in their communities as well as internationally.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Year 1 / Students are introduced to:</a>
                <div className={styles.h1}>
                ● Theoretical knowledge in Public Affairs 
                <br /><br />
                ● Research Methodology and Design 
                <br /><br />
                ● Economic Theories and Public Policy 
                </div>
                <a className={styles.a}>
                Year 2 / Students move to:
                </a>
                <div className={styles.h2}>
                ● In depth studies of the Public Affairs and practices 
                <br /><br />
                ● Practical application of the theoretical knowledge through supervised independent research and thesis;   

  
                </div>
                <a className={styles.a}>
                Major Curriculum
                </a>
                <div className={styles.h3}>
                ● Communication for Public Affairs, <br />
                ● Research Methods, <br />
                ● Public Policy and Strategy,<br /> 
                ● Economic Theory in Public Affairs,<br /> 
                ● Local Autonomy and Public Management, <br />
                ● Organizational Dynamics and Leadership, <br />
                ● Thesis<br />
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
                        src={`/images/faculties/MPA/Faculty${index + 1}.jpg`}
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
               <span className={styles.textsize3}>Welcome Remarks</span> 
                <span className={styles.textsize1}></span>
                <span className={styles.textsize2}></span>  <br /><br /><br /><br />
                “The Public Administration program provides a great opportunity for students to learn about public policy making from international experts! The faculty of the department are happy to assist the students in their research work and studies. The students are given a chance to study their 2nd year of master’s in a foreign country on 1+1 basis and develop a network with international peers and professors.”
                </h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/MPAwelcomeimg.jpg" alt="MPAwelcome" width={500} height={500} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default MPAPage;