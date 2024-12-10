import { useState, useEffect } from "react";
import Image from "next/image";
import Collapse from "@mui/material/Collapse";

const getRandomIndex = () => Math.floor(Math.random() * images.length);

const images = [
  "/collage_photos/image1.jpeg",
  "/collage_photos/image1.jpeg",
  "/collage_photos/image1.jpeg",
  "/collage_photos/image1.jpeg",
  "/collage_photos/image1.jpeg",
  //... add all 16 images here
];

const PhotoCollage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = getRandomIndex();
      setCurrentIndex(newIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-8 gap-4 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8">
      {images.map((image, index) => (
        <Collapse
          key={index}
          in={index === currentIndex}
          timeout={1000}
          unmountOnExit
          mountOnEnter
          className="transition duration-1000 ease-in-out"
        >
          <div className="relative w-full h-full">
            {index === currentIndex && image ? (
              <div className=" ">
                <Image
                  src={image}
                  width={40}
                  height={30}
                  className="object-cover w-full h-full"
                  alt={`Image ${index}`}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                Image not found
              </div>
            )}
          </div>
        </Collapse>
      ))}
    </div>
  );
};

export default PhotoCollage;
