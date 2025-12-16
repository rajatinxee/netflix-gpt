import Header from "./Header";
import useNowPlayingMovies from "../utils/Hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePoplarMovies from "../utils/Hooks/usePoplarMovies.js";
import useTopRatedMovies from "../utils/Hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../utils/Hooks/useUpcomingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePoplarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
