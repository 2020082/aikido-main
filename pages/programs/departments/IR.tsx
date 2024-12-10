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

const IRPage: React.FC<PropType> = (props) => {
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
      description: "Dean of IR",
    },
    {
      name: "Alejandra Gonzalez Mejia",
      description: "Lecturer",
    },
    {
      name: "Mostafa Ahmed",
      description: "Lecturer",
    },
    {
      name: "Suyong Kim",
      description: "Lecturer",
    },
    {
      name: "Dong-Ryul Kang",
      description: "Lecturer",
    },
    {
      name: "Jiyoung Chang",
      description: "Lecturer",
    },
    {
      name: "Chogtoo khereid",
      description: "Lecturer",
    },       

  ];


    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="International Relations"
                textdesc=""
                image={"/images/programImg/departmentImg/IRbackgroundImg.jpg"}
                />
            <div className={styles.box1}>
                International Relations
            </div>
            <div ref={overviewRef} className={`${styles.overview}`}>
                Overview
                <div className={styles.h1}>
                International Relations (IR) program aims to prepare experts and professionals in the fields of Diplomacy,
                Political Science, and International Development to work in international organizations, NGOs, and government institutions.
                The program provides foundational knowledge of international relation, history, economics, international trade, development, diplomacy, foreign policy analysis and many others. The program empowers students to address global challenges and policy issues with ethical and critical reasoning as diplomats, field research experts, program officers, consultants, and journalists. Importantly,
                the students of the IR program at MIU can choose their area of expertise in their third year of studies.</div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Year 1 & 2 / Students are introduced to:</a>
                <div className={styles.h1}>
                ● Basic knowledge each of the SISC majors: International Relations, Media & Communication, and International Development,
                &nbsp;&nbsp;&nbsp;Diplomacy, and International Law; 
                <br /><br /> ● Foundamental academic writing and reading skills; 
                </div>
                <a className={styles.a}>
                Year 3 / Students can choose their concentration :
                </a>
                <div className={styles.h3}>
                ● Diplomacy and Political Science: Students learn practical skills of diplomatic communication and deepen their knowledge of politics and international cooperation. 
                <br /><br />
                ● International Development: Students study various fields of development studies such economic, sustainable, environmental,
                rural & urban development as well gain practical skills of development project evaluation and implementation.
                </div>
                <a className={styles.a}>
                Year 4 / Students moveto:
                </a>
                <div className={styles.h4}>
                ● Practical usage of the skills learned in both concentrations through internships
                <br /> <br />
                ● Thesis and Research writing
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
                        src={`/images/faculties/IR/Faculty${index + 1}.jpg`}
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
                – B.A Degree in International Business Management from Mongolia International University, Mongolia
                <br />
                – M.S Degree in International and Sustainable Development Policy from KDI School of Public Policy and Management, Korea
                </span>  <br /><br /><br /><br />
                “The IR department of MIU is happy to welcome you all into our big family!
                We provide students with opportunity to learn about the world from international experts that bring various background
                and experiences into the learning environment of the students. We encourage students to challenge themselves and aim to educate professionals that will shape the world of Politics and Global Cooperation!”
                </h1> 
                <div className={styles.alumImg}>
                <Image src="/images/programImg/departmentImg/IRwelcomeimg.jpg" alt="IR welcome" width={400} height={550} />
                </div>
                </div>
                

           
        </div>
        
    );
};
export default IRPage;