import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieID}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  return (
    // Basically we will give "movie id" then from the data we are only worried about the type "trailer"
    // Also in that data we have youtube key from where API will fetch video data
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}   
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground