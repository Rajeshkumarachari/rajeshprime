import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute  bg-gradient-to-r from-black">
      <h1 className=" text-xl  md:text-5xl font-semibold text-white">
        {title}
      </h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/4 text-white">
        {overview}
      </p>
      <div className="m-2 md:m-0">
        <button className="mt-3 md:mt-2  bg-gray-100  text-black px-4 md:px-12 py-1 md:py-3  mx-2 text-lg rounded-md font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className=" hidden md:inline-block bg-gray-600 text-white opacity-60 px-8 py-3  mx-2 text-lg rounded-md font-semibold hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
