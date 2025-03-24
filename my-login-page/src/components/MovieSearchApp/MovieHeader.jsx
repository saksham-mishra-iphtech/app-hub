import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MovieHeader = ({setCategory , setSearchQuery}) => {
  
  const [search,setSearch]=useState("");
  const [activeButton, setActiveButton] = useState("popular");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (search.trim().length > 0) {
      setSearchQuery(search);
    }
  }, [search, setSearchQuery]);

  const handleSearch = () => {
    setSearch("");
    setSearchQuery("");
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveButton(category);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-4 mt-3">
          <button
            className="flex items-center self-start font-semibold text-xl text-blue-900 mt-2 lg:absolute lg:left-10"
            onClick={handleBack}
          >
            <IoIosArrowBack />
            <span>Back</span>
          </button>
          <h2 className="font-semibold text-xl sm:text-3xl md:text-3xl md:pr-10 text-center mt-2 w-full">
            Movie Search App
          </h2>
          <div className="relative mt-4 lg:mt-6 lg:absolute lg:right-10 lg:w-80">
           <form className="relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg" onSubmit={handleSearch}>
           <input
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none"
              type="text"
              placeholder="Search Movie..."
              value = {search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        {search && (
          <FiX
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg cursor-pointer"
            onClick={handleSearch}
          />
        )}
           </form>
          </div>
        </div>
        <div className="flex justify-center gap-3 my-5 md:gap-50">
        {["popular", "trending", "all"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-2 border-b-2 transition-all ${
              activeButton === category
                ? "text-blue-900 border-blue-900 font-semibold"
                : "text-gray-600 border-transparent"
            }`}
          >
            {category.toUpperCase()} MOVIES
          </button>
        ))}
      </div>
        
      </div>
    </>
  );
};

export default MovieHeader;
