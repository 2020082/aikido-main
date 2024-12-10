import React from "react";
import { useTranslation } from "react-i18next";

type Program = {
  name: string;
  imgUrl: string;
  description: string;
  path: string;
};

type FeaturedProgramsProps = {
  programs: Program[];
  masters: boolean;
};

const FeaturedPrograms: React.FC<FeaturedProgramsProps> = ({
  programs,
  masters,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 mb-8 ">
      <div className="h1 text-center text-white text-3xl text-bold pb-3">
        {masters ? t("masters") : t("bachelor")}
      </div>
      <div className="flex flex-wrap justify-center gap-5 overflow-x-auto">
        {programs.map(({ imgUrl, description, path }, index) => (
          <FeaturedProgram
            key={index}
            imgUrl={imgUrl}
            description={description}
            path={path}
          />
        ))}
      </div>
    </div>
  );
};

type FeaturedProgramProps = {
  imgUrl: string;
  description: string;
  path: string;
};

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({
  imgUrl,
  description,
  path,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-330 h-206 group">
      <a href={path} className="block w-full h-full relative">
        <img
          src={imgUrl}
          alt={t("program-title", { description })}
          className="w-full h-full object-cover"
          style={{ objectFit: "cover", height: "206px", width: "330px" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xs font-semibold">
            {description}
          </span>
        </div>
      </a>
    </div>
  );
};

export default FeaturedPrograms;
