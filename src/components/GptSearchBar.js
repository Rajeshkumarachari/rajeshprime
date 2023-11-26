import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-gray-400 grid grid-cols-12 rounded-md">
        <input
          className=" p-4 m-4 border col-span-9 rounded-md"
          type="text"
          placeholder="What would like to watch today?"
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white col-span-3 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
