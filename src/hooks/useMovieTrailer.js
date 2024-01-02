import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/urls";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux"

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_OPTIONS)

        const json = await data.json();
        // console.log(json);

        const trailerData = json.results.filter(video => video.type === "Trailer")
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        // here adding statement to lower down no of renderings
        !trailerVideo && getMovieVideos();
    },[]);
}

export default useMovieTrailer;