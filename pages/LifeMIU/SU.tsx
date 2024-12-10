import React from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css";
import Image from "next/image";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import { YouTube } from "@mui/icons-material";
const SUPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent={" Student Union "}
        textdesc="The Student Union of the Mongolia International University is the association of a student-run group that dedicated its time and resources to give the student community of the university, fairness, opportunities, and a voice."
        image={"/LifePage/SU/SUbg.jpg"}
      />

      <div className={styles.VisMis}>
        Vision & Mission Statement
        <Image
          src="/LifePage/SU/VisMis.jpg"
          alt="Vision & Mission Statement"
          width={900}
          height={0}
        />
      </div>
      <div className={styles.SUrule}>
        <Image
          src="/LifePage/SU/rule1.jpg"
          alt="rule1"
          width={450}
          height={0}
        />
        <Image
          src="/LifePage/SU/rule2.jpg"
          alt="rule2"
          width={450}
          height={0}
        />
      </div>
      <div className={styles.contact}>
        <Image
          src="/LifePage/SU/ContactUs.png"
          alt="QR"
          width={200}
          height={0}
        />
        <div className={styles.icons}>
          <a href="https://www.facebook.com/miusunion">
            <Facebook style={{ fontSize: 60 }} />
          </a>
          <a href="https://www.instagram.com/miu_studentsunion/">
            <Instagram style={{ fontSize: 60 }} />
          </a>
          <a href="https://www.youtube.com/channel/UCHCyeb8SxXQDcUNSlO1n0Jg">
            <YouTube style={{ fontSize: 60 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SUPage;
