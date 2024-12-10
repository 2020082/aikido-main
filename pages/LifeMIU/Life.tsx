import React, { useEffect, useRef } from "react";
import ImageCarousel from "@/components/imageCarousel";
import styles from "./Life.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@mui/icons-material";
const LifePage: React.FC = () => {
  const SURef = useRef<HTMLDivElement>(null);
  const SSRef = useRef<HTMLDivElement>(null);
  const SARef = useRef<HTMLDivElement>(null);

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
    if (SURef.current && SSRef.current && SARef.current) {
      intersectionObserver.observe(SURef.current);
      intersectionObserver.observe(SSRef.current);
      intersectionObserver.observe(SARef.current);
    }

    return () => {
      if (SURef.current && SSRef.current && SARef.current) {
        intersectionObserver.unobserve(SURef.current);
        intersectionObserver.unobserve(SSRef.current);
        intersectionObserver.unobserve(SARef.current);
      }
    };
  }, []);
  return (
    <div className={styles.container}>
      <ImageCarousel
        textContent="Life at MIU"
        textdesc="Build lifelong friendships with fellow students who share your interests, passions, and perspectives."
        image={"/LifePage/Lifebg.jpg"}
      />

      <div ref={SURef} className={`${styles.SU}`}>
        <div className={styles.SUtxt}>
          Student Union
          <Link href="SU">
            <div className={styles.arrow}>
              <ArrowRight />
              View more
            </div>
          </Link>
        </div>

        <div className={styles.SUimg}>
          <Image src="/LifePage/Su/Subg.jpg" alt="" width={500} height={0} />
        </div>
      </div>
      <div ref={SSRef} className={`${styles.SS}`}>
        <div className={styles.SSimg}>
          <Image src="/LifePage/SS/SSbg.jpg" alt="" width={500} height={0} />
        </div>
        <div className={styles.SStxt}>
          Student Support
          <Link href="SS">
            <div className={styles.arrow}>
              <ArrowRight />
              View more
            </div>
          </Link>
        </div>
      </div>

      <div ref={SARef} className={`${styles.SA}`}>
        <div className={styles.SAtxt}>
          Student Activity
          <Link href="SA">
            <div className={styles.arrow}>
              <ArrowRight />
              View more
            </div>
          </Link>
        </div>
        <div className={styles.SAimg}>
          <Image src="/LifePage/SA/SAbg.jpg" alt="" width={550} height={0} />
        </div>
      </div>
    </div>
  );
};

export default LifePage;
