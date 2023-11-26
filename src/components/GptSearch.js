import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BANNER_NETFLIX } from "../Utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BANNER_NETFLIX} alt="banner" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
