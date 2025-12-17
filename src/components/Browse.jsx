import Header from "./Header";
import useNowPlayingMovies from "../utils/Hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePoplarMovies from "../utils/Hooks/usePoplarMovies.js";
import useTopRatedMovies from "../utils/Hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../utils/Hooks/useUpcomingMovies.js";
import GptSearch from "./GptSearch.jsx";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePoplarMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
