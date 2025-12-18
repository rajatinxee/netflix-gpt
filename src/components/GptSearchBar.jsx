import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { getMovieRecommendations } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.lang);

  const searchText = useRef(null);
  let isLoading = false;

  const searchMovieTMDB = async (movie) => {
    const cleanMovie = movie.trim();
    const encodedMovie = encodeURIComponent(cleanMovie);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodedMovie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (isLoading) return;
    isLoading = true;

    try {
      const result = await getMovieRecommendations(searchText.current.value);
      const geminiMovies = result.split(",");
      console.log("geminiMovies", geminiMovies);

      const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
      console.log("promiseArray", promiseArray);
      // const tmdbResults = await Promise.all(promiseArray);
      // console.log(tmdbResults);
    } finally {
      isLoading = false;
    }
  };

  return (
    <>
      <div className="pt-[10%] flex justify-center">
        <form
          className=" bg-black w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 rounded-md col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className=" m-4 bg-[rgb(229,9,20)] text-white font-bold rounded-md  col-span-3"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
