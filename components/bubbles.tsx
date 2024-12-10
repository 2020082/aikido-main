import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Bubbles() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble) => {
        const bubblePosition = bubble.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (bubblePosition < screenHeight * 0.9 && !isVisible) {
          bubble.classList.add("fade-in");
          setIsVisible(true);
        } else if (bubblePosition >= screenHeight * 0.9 && isVisible) {
          bubble.classList.remove("fade-in");
          setIsVisible(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="flex justify-around bg-gradient-to-r from-sky-500 to-indigo-500 p-1 xl:p-10">
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-700 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">34%</span>
        <span className="xl:text-3xl text-md">
          {t("bubbles.international")}
        </span>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-600 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">1:7</span>
        <span className="xl:text-3xl">{t("bubbles.ratio")}</span>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-[100px] h-[100px] md:w-[200px] xl:w-[20em] xl:h-[20em] bg-blue-500 rounded-full text-white text-center bubble ${
          isVisible ? "fade-in" : ""
        }`}
      >
        <span className="text-5xl md:text-[50px] xl:text-[100px]">74+</span>
        <span className="xl:text-2xl">{t("bubbles.nations")}</span>
      </div>
    </div>
  );
}
