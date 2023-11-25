import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-40 relative z-20 pl-8">
        <MovieList
          title={"Now Playing movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies?.nowPlayingMovies} />
        <MovieList
          title={"Now Playing movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList
          title={"Now Playing movies"}
          movies={movies?.nowPlayingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
