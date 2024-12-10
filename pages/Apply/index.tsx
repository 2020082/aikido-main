import ImageCarousel from "@/components/imageCarousel";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const BackgroundPage = () => {
  return (
    <div className="background-page">
      {/* Carousel Section */}
      <ImageCarousel
        textContent="Ангиа сонгон бүртгүүлэх"
        textdesc="Choose Form"
        image={"/image4.jpg"}
      />

      {/* Call-to-Action Section */}
      <div className="mt-[50vh] w-full flex flex-col items-center p-10 bg-white text-gray-800">
        {/* Headline */}
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Start Your Application
        </h1>
        {/* Subtitle */}
        <p className="text-lg mb-8 text-center max-w-md">
          Select your program and begin your journey with us today.
        </p>
        {/* Button */}
        <Button
          variant="contained"
          sx={{
            fontSize: "1rem",
            padding: "0.75rem 2rem",
            color: "#333",
            backgroundColor: "#f9f9f9",
            borderRadius: "999px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f1f1f1",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Link
            href="ApplyForm"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Бүртгүүлэх
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BackgroundPage;
