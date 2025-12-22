import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <>
      <h1 className="p-4 m4 bg-black text-white">
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </h1>
    </>
  );
};

export default GptMovieSuggestions;
