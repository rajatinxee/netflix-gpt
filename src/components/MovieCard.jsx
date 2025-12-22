import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {

  if(!posterPath) return null;

  return (
    <>
      {/* <div>{title}</div> */}
      <div className="w-40 flex-shrink-0">
        <img
          className="w-full h-50 object-cover rounded-md"
          src={IMG_CDN_URL + posterPath}
          alt={title || "movie card"}
        />
      </div>
    </>
  );
};

export default MovieCard;
