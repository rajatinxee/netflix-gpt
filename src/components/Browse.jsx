import Header from "./Header";
import useNowPlayingMovies from "../utils/Hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* 
        MainContainer 
          - Video Background
          - Video Title
        Secondary Container
          - Movies List * n
          - cards * n
      */}
    </>
  );
};

export default Browse;
