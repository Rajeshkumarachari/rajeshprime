import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute  bg-gradient-to-r from-black">
      <h1 className=" text-5xl font-semibold text-white">{title} </h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview} </p>
      <div className="">
        <button className=" bg-gray-100  text-black px-12 py-3  mx-2 text-lg rounded-md font-semibold hover:bg-opacity-80">
          Play
        </button>
        <button className=" bg-gray-600 text-white opacity-60 px-8 py-3  mx-2 text-lg rounded-md font-semibold hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
