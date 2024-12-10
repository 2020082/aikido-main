import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import TypewriterAnimation from "../components/typewriteAnimation";
const imageUrls = [
  "/bannerPics/image1.jpg",
  "/bannerPics/image2.png",
  "/bannerPics/image3.png",
];

const Banner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner");
      if (!banner) return;
      const bannerPosition = banner.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      if (bannerPosition < screenHeight * 0.9) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[rgba(1,41,142,0.92)] to-[rgba(71,124,153,0.85)] items-center flex flex-col justify-start pt-10 px-5vw pb-12 box-border max-w-full z-3 text-center md:pt-6 md:px-8 md:pb-8 banner">
      <div
        className={`mb-4 xl:text-5xl md:text-2xl text-white ${
          isVisible ? "fade-in" : ""
        }`}
      >
        {t("banner.title")}
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between max-w-full gap-8 md:flex-wrap md:justify-center">
        <div className="">
          <div className="flex-1 flex flex-col items-start justify-start">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                className="self-stretch flex-1 max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src={url}
              />
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col items-start justify-start gap-8 md:w-1/2 md:min-w-0 ${
            isVisible ? "fade-in-up" : ""
          }`}
        >
          <div className="self-stretch font-light text-white">
            <TypewriterAnimation
              children={t("banner.typewriter")}
            ></TypewriterAnimation>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center">
            <Button
              onClick={() => (window.location.href = "/LifeMIU/Life")}
              className="self-stretch w-48"
              endIcon={<ArrowForward />}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                borderColor: "#fff",
                borderRadius: "10px",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              {t("banner.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
