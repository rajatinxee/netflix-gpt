import { BG_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-20">
        <img src={BG_IMG} alt="back_ground" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearch;
