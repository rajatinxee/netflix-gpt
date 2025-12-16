import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // console.log("Movies form sc", movies);

  return (
    <>
      {movies && (
        <div className=" bg-black">
          <div className=" -mt-60 relative z-20">
            <MovieList movies={movies.nowPlayingMovies} title={"Now Playing"} />
            <MovieList movies={movies.popularMovies} title={"Popular"} />
            <MovieList movies={movies.topRatedMovies} title={"Top Rated"} />
            <MovieList movies={movies.upcomingMovies} title={"Upcoming"} />
            <MovieList movies={movies.nowPlayingMovies} title={"Sci-Fi"} />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryContainer;
