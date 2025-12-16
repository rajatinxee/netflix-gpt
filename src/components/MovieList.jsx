import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies from ml", movies);

  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <div className="text-gray-400">No movies available</div>
      </div>
    );
  }

  return (
    <>
      <div className="px-6 ">
        <h1 className=" text-white text-3xl pt-4">{title}</h1>
        <div>
          <div className="flex gap-2 overflow-x-scroll hide-scrollbar  flex-nowrap py-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.original_title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
