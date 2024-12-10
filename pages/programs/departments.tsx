import React from "react";
import styles from "./Us.module.css";
import { useRouter } from "next/router";
import ImageCarousel from "@/components/imageCarousel";
const Departments: React.FC = () => {
  const router = useRouter();
  const goToIM = () => {
    router.push("departments/IM");
  };
  const goToMIM = () => {
    router.push("departments/MIM");
  };
  const goToHTM = () => {
    router.push("departments/HTM");
  };
  const goToCS = () => {
    router.push("departments/CS");
  };
  const goToSE = () => {
    router.push("departments/SE");
  };
  const goToMSE = () => {
    router.push("departments/MSE");
  };
  const goToMC = () => {
    router.push("departments/MC");
  };
  const goToIR = () => {
    router.push("departments/IR");
  };
  const goToMPA = () => {
    router.push("departments/MPA");
  };
  const goToEE = () => {
    router.push("departments/EE");
  };
  const goToME = () => {
    router.push("departments/ME");
  };
  const goToFLE = () => {
    router.push("departments/FLE");
  };
  const goToFD = () => {
    router.push("departments/FD");
  };

  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent="Departments"
        textdesc=""
        image={"/images/programImg/school.jpg"}
      />
      <div className={styles.programBox1}>
        School of Management
        <div className={styles.PgText1}>
          <button className={styles.IM} onClick={() => goToIM()}>
            Department of International Management(IM)
          </button>
          <button className={styles.MIM} onClick={() => goToMIM()}>
            Master In International Management(MIM)
          </button>
          <button className={styles.HTM} onClick={() => goToHTM()}>
            Department of Hotel & Tourism Management(HTM)
          </button>
        </div>
      </div>
      <div className={styles.programBox2}>
        School of Computer Science
        <div className={styles.PgText2}>
          <button className={styles.CS} onClick={() => goToCS()}>
            Department of Computer Science(CS)
          </button>
          <button className={styles.SE} onClick={() => goToSE()}>
            Department of Software Engineering(SE)
          </button>
          <button className={styles.MSE} onClick={() => goToMSE()}>
            Master In Software Engineering(MSE)
          </button>
        </div>
      </div>
      <div className={styles.programBox3}>
        School of International Studies and Communication
        <div className={styles.PgText3}>
          <button className={styles.IR} onClick={() => goToIR()}>
            Department of International Relations(IR)
          </button>
          <button className={styles.MC} onClick={() => goToMC()}>
            Department of Media and Comunication(MC)
          </button>
          <button className={styles.MPA} onClick={() => goToMPA()}>
            Master In Public Administration (MPA)
          </button>
        </div>
      </div>
      <div className={styles.programBox4}>
        Department of Education
        <div className={styles.PgText4}>
          <button className={styles.EE} onClick={() => goToEE()}>
            Department of English Education(EE)
          </button>
          <button className={styles.ME} onClick={() => goToME()}>
            Department of Music Education(ME)
          </button>
          <button className={styles.FLE} onClick={() => goToFLE()}>
            Master In Foreign Language Education (FLE)
          </button>
        </div>
      </div>
      <div className={styles.programBox5}>
        Other Programs
        <div className={styles.PgText5}>
          <button className={styles.FD} onClick={() => goToFD()}>
            Department of Fashion Design(FD)
          </button>
        </div>
      </div>
    </div>
  );
};
export default Departments;
