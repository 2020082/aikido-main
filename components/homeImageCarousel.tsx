import React, { useState, useEffect } from "react";
interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const HomeImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default HomeImageCarousel;
