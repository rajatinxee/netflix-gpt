import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPopularMovies } from "../Redux/moviesSlice";
import { useEffect } from "react";

const usePoplarMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // console.log("data: ", json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePoplarMovies;
