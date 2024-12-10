import React, { useEffect, useRef } from "react";
import styles from "./department.module.css"
import ImageCarousel from "@/components/imageCarousel";


interface FacultyType {
    // Define properties for EmployeeType here if needed
  }
  
  type PropType = {
    slides: number[];
    options?: FacultyType;
  };

const MIMPage: React.FC<PropType> = (props) => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);



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
      curriculumRef.current 

    ) {
      intersectionObserver.observe(overviewRef.current);
      intersectionObserver.observe(curriculumRef.current);


    }

    return () => {
      if (
        overviewRef.current &&
        curriculumRef.current 

      ) {
        intersectionObserver.unobserve(overviewRef.current);
        intersectionObserver.unobserve(curriculumRef.current);


      }
    };
  }, []);

  const { slides, options } = props;
  
    return(
        <div className={styles.container}>
            <ImageCarousel
                textContent="Master in Business Administration"
                textdesc=""
                image={"/images/programImg/departmentImg/MIMbackgroundImg.jpg"}
                />

            <div ref={overviewRef} className={`${styles.overview}`}>
              <br /><br /><br />
                Overview
                <div className={styles.h1}>
                MBA (International Marketing) at MIU is founded to train students to become international professionals who can lead the global era. 
                MBA (International Marketing) teaches students how to make practical strategies to activate companies by combining theories 
                and practices which students will learn through direct visits to the business fields between Korea and Mongolia or other countries. 
                Also, training leaders who are able to take significant responsibilities in domestic and international corporations.
                </div>
            </div>
            
            <div ref={curriculumRef} className={`${styles.curriculum}`}>
                What you'll learn <br />
                <a className={styles.a}> Department Obejectives</a>
                <div className={styles.h1}>
                To educate students into professionals who can understand the flow of the international economy and management, 
                and contribute to companies in the country and area as international management professionals.  <br /><br />
                To equip students to become professionals who have the ability to apply expertise 
                that is learned through direct visits to Korean (or international) companies in Mongolia and seminars of entrepreneurs in real business situations.
                </div>
                <a className={styles.a}>
                Curriculum
                </a>
                <div className={styles.h2}>
                ● Marketing for Entrepreneurs <br />
                ● Marketing Planning & Strategy <br />
                ● Brand Management <br />
                ● Sales Management <br />
                ● Retailing <br />
                ● Advertising <br />
                ● Consumer Behavior <br />
                ● Global Marketing <br />
                ● Field Study (Domestic, International) <br />
                ● International Trade Practice (Korean, Mongolian)<br />
                </div>
                <a className={styles.a}>
                Future espect
                </a>
                <div className={styles.h2}>
                ● Professional Manager of All (Domestic, International & Global) Organizations <br />
                ● Marketing Manager <br />
                ● Financial Analyst & Banker <br />
                ● HR Manager <br />
                ● Business Consultant<br />
                ● Financial Securities <br />
                ● Investment Analyst <br />
                ● Business Administrator<br />
                </div>
            </div>
        </div>
        
    );
};
export default MIMPage;