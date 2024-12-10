"use client";
import React, { useEffect, useState } from "react";
import HomeImageCarousel from "@/components/homeImageCarousel";

import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomePageLighting from "@/components/homepageLighting";
const HomePage = () => {
  const { t } = useTranslation();
  
  const imageUrls = [
    "/collage_photos/1.jpg",
    "/collage_photos/2.jpg",
    "/collage_photos/3.jpg",
    "/collage_photos/4.jpg",
    "/collage_photos/5.jpg",
    "/collage_photos/6.jpg",
  ];

  
  const handleClick = () => {
    const bannerElement = document.getElementById("banner");
    if (bannerElement) {
      const scrollTo = bannerElement.offsetTop;
      const duration = 1000; // Duration of the scroll animation in milliseconds
      const start = window.pageYOffset;
      const distance = scrollTo - start;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + distance * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0">
        <HomeImageCarousel images={imageUrls} interval={5000} />
      </div>
      <div className="flex absolute inset-0 z-10">
        {[...Array(4)].map((_, index) => (
          <HomePageLighting key={index} />
        ))}
      </div>

      <div className="absolute flex-col opacity-0 sm:opacity-100 inset-0 z-30 flex text-center md:flex pt-[150px] items-center">
        <span
          className=" font-thin text-left text-[3vh] text-white  sm:text-[4vh] md:text-[6vh] xl:text-[8vh] "
        >
          {t("homepage.aikido")}
        </span>
      </div>

      <div className="absolute flex flex-col h-full justify-center inset-0 z-30 text-center text-italic">
        <span
          className="md:pt-[60%] uppercase font-thin xl:pt-[50%] 2xl:pt-[35%] lg:pt-[55%] text-[15px] text-white sm:text-[10px] md:text-[15px] xl:text-[20px]"
        >
          {t("homepage.aikido.desc")}
        </span>
      </div>

      <div
        className="absolute inset-0 z-40 flex justify-center items-center "
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8W3w3q2p5y0?si=sAse-mauexQ5Wd_5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="text-white text-3xl absolute inset-0 z-50  flex justify-center items-center top-[85%]">
        <Button
          onClick={handleClick}
          style={{ color: "white", fontSize: "80px" }}
        >
          <KeyboardArrowDownIcon fontSize="inherit" />
        </Button>
      </div>
      
    </div>
  );
};

export default HomePage;
