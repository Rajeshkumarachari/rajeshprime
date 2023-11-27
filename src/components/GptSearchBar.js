import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResults } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);

    const getQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      "only give me name of 10 movies, comma separated like the example result given ahead. mostly from south indian movies. Example result: Jailer, Thunivu, Mankatha, Vanam ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //error page
    }

    // console.log(gptResults.choices?.[0]?.message?.content);

    //for get movie details

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[46%] md:pt-[10%]  flex justify-center">
      <form
        className="w-full  md:w-1/2 bg-gray-900 grid grid-cols-12 rounded-md opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-4 m-4 border col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" text-sm md:text-xl  py-2 px-1 md:px-4 m-3 md:m-4 bg-red-700 text-white col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
