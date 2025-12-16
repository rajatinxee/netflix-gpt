import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((state) => state.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={"https://www.youtube.com/embed/"+ trailerId +"?si=7H_7REiUJhvhy5Os?&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;
