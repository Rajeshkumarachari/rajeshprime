import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BANNER_NETFLIX } from "../Utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover w-screen"
          src={BANNER_NETFLIX}
          alt="banner"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
