import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n"; // Import i18n instance
import SearchBar from "./searchBar";
interface HeaderProps {
  isSearchVisible: boolean;
}
const MongoliansvgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg";
const AmericansvgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg";

const Header = ({ isSearchVisible }: HeaderProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [flag, setFlag] = useState(AmericansvgUrl);

  const toggleFlag = () => {
    setFlag(flag === AmericansvgUrl ? MongoliansvgUrl : AmericansvgUrl);
    const newLanguage = flag === AmericansvgUrl ? "mn" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="text-white py-1 px-6 flex items-center justify-between">
      <div className="flex items-center justify-center flex-grow">
        <Image
          src="/logos/logowhite.png"
          alt={t("header.logo.alt")}
          width={40}
          height={30}
          className="static cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div
        className={`search-bar-container border-b-2 border-white fixed right-[15%] ${
          isSearchVisible ? "visible" : ""
        }`}
      >
        {isSearchVisible && <SearchBar />}
      </div>

      <div className="flag flex items-center">
        <Image
          src={flag}
          width={40}
          height={30}
          alt={t("header.flag.alt")}
          className="ml-2 cursor-pointer"
          onClick={toggleFlag}
        />
      </div>
    </header>
  );
};

export default Header;
