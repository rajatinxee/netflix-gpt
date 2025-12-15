import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <>
      <div>
        <iframe
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" +
            trailerId +
            "?si=IX61GYKH67JguDYi"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
