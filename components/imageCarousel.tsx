// ImageCarousel component
import React from "react";
import Breadcrumb from "@/pages/visit/breadcrumb";

interface ImageCarouselProps {
  image: string;
  textContent: string;
  textdesc: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  image,
  textContent,
  textdesc,
}) => {
  return (
    <div>
      <div className="h-1/2 absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Image 0"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className=" flex justify-start pl-11 items-center align-center absolute inset-0 z-20 text-6xl left-8 text-white">
            {" "}
            {textContent}
          </div>
          <div className="mt-32 flex justify-start pl-11 items-center align-center absolute inset-0 z-20 text-2xl left-8 text-white">
            {" "}
            {textdesc}
          </div>
          <div className="absolute inset-0 h-full bg-black opacity-70"></div>
        </div>
      </div>
      <div className="">
        <Breadcrumb
          homeElement={"Home"}
          separator={
            <span
              style={{
                fontSize: "0.8rem",
                fontFamily: "Arial, sans-serif",
                margin: "0 0.4rem",
                lineHeight: "1.6rem",
              }}
            >
              {"\u27A4\u200B"}
            </span>
          }
          containerClasses={" "}
          listClasses={" "}
          activeClasses={" "}
          capitalizeLinks={false}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
