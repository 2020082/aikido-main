import React from "react";
import ImageCarousel from "@/components/imageCarousel";

import { useTranslation } from "react-i18next";

const VisitorPage: React.FC = () => {
  const mapCenter = { lat: 47.91482657901934, lng: 106.9731089094383 };
  const { t } = useTranslation();

  return (
    <div>
      <ImageCarousel
        textContent={t("visit.pageTitle")}
        textdesc={t("visit.pageDescription")}
        image={"/images/visit_photo.jpg"}
      />
      <div className="mt-[50vh]  w-full">
        
      </div>

      <div className="w-full">
        <img src={"/images/Campus.jpg"} />
      </div>
    </div>
  );
};

export default VisitorPage;
