import React from "react";
import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-52 pr-3  ">
      <img
        className=" rounded-sm"
        src={IMG_CDN_URL + posterPath}
        alt="movies_banner"
      />
    </div>
  );
};

export default MovieCard;
