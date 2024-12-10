/** @format */

import { SelfImprovement,AssignmentIcon,Call, EventIcon } from "../assets/iconImports";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "@mui/material/Button";

interface MenuProps {
  toggleSearchBar: () => void;
  toggleSidebarMenuParent: () => void;
}

const Menu: React.FC<MenuProps> = ({
  toggleSearchBar,
  toggleSidebarMenuParent,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [hoverPrograms, setHoverPrograms] = useState(false);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

  const navigateToApply = () => {
    router.push("/apply");
  };
  const handleNewsClick = () => {
    router.push("/news");
  };

  const navigateToAbout = () => {
    router.push("/about");
  };
  const navigateToContact = () => {
    router.push("/contact")
  }

  const toggleSidebarMenu = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
    toggleSidebarMenuParent();
  };
  const handleSearchClick = () => {
    toggleSearchBar();
  };
  return (
    <div
      className={` h-screen bg-gray-500 bg-opacity-0  transform mt-8
          -translate-y-[50vh] 2xl:-translate-y-[50vh] transition-transform duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-end justify-end h-full">
        {/* Larger Buttons */}

        
        <Button
          variant="contained"
          className="bg-black hover:bg-blue-900 bg-opacity-80 text-white font-bold py-3 rounded-l-lg mb-4 w-[160px]"
          style={{ borderRadius: "8px 0 0 8px" }}
          startIcon={<EventIcon />}
          onClick={handleNewsClick}
        >
          {t("menu.button.newsEvents")}
        </Button>
        <Button
          variant="contained"
          className="bg-black hover:bg-blue-900 bg-opacity-80 text-white font-bold py-3 rounded-l-lg mb-4 w-[160px]"
          style={{ borderRadius: "8px 0 0 8px" }}
          startIcon={<SelfImprovement />}
          onClick={navigateToAbout}
        >
          {t("menu.button.aboutUs")}
        </Button>
        <Button
          variant="contained"
          className="bg-black hover:bg-blue-900 bg-opacity-80 text-white font-bold py-3 rounded-l-lg mb-4 w-[160px]"
          style={{ borderRadius: "8px 0 0 8px" }}
          startIcon={<Call />}
          onClick={navigateToContact}
        >
          {t("menu.button.contact")}
        </Button>

        <Link href="/Apply">
        <Button
          variant="contained"
          className="bg-black hover:bg-blue-900 bg-opacity-80 text-white font-bold py-3 rounded-l-lg mb-4 w-[160px]"
          style={{ borderRadius: "8px 0 0 8px" }}
          startIcon={<AssignmentIcon />}
          onClick={navigateToApply}
        >
          {t("menu.button.apply")}
        </Button>
        </Link>
        
        {/* <Button
          className="bg-blue-900 hover:bg-blue-500 hover:text-white text-white font-bold py-2 rounded-l-lg mb-4 w-[140px]"
          style={{ borderRadius: "8px 0 0 8px" }}
          onClick={navigateToVisit}
        >
          {t("menu.button.visit")}
        </Button>
        <div
          className={`relative`}
          onMouseEnter={() => setHoverPrograms(true)}
          onMouseLeave={() => setHoverPrograms(false)}
        >
          <Button
            startIcon={<ArrowDropDown />}
            className="bg-blue-900  hover:text-white text-white font-bold py-2 rounded-l-lg w-[140px]"
            style={{ borderRadius: "8px 0 0 8px" }}
          >
            {t("menu.button.programs")}
          </Button>
          {hoverPrograms && (
            <div className="absolute z-10 right-0 bg-white border border-gray-200 ">
              <Button
                fullWidth
                className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100 "
                style={{ borderRadius: "8px 0 0 8px" }}
                onClick={() => navigateToPrograms()}
              >
                {t("menu.programs.academicPrograms")}
              </Button>
              <Button
                fullWidth
                className="block w-full px-4 py-2 text-gray-800 hover:bg-blue-100"
                style={{ borderRadius: "8px 0 0 8px" }}
                onClick={() => navigateToLEI()}
              >
                {t("menu.programs.LEI")}
              </Button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
