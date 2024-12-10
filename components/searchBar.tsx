import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center">
        <input
          className="text-white text-10 border-none outline-none bg-transparent"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            fontSize: "1.5rem",
            padding: "0.5rem",
            color: "white",
          }}
        />
        <Search className="text-white mr-2 ml-2 cursor-pointer" />
      </div>
    </div>
  );
};
export default SearchBar;
