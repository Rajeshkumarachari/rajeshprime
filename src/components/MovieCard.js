import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-3  ">
      <img
        className=" rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="movies_banner"
      />
    </div>
  );
};

export default MovieCard;
