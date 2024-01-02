import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/urls";
import { useEffect } from "react";
import { useSelector } from "react-redux"

const useUpComingMovies = () => {
    // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store)=>store.movies.upComingMovies);

  const getUpComingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  }

  useEffect(()=>{
    !upComingMovies && getUpComingMovies();
  },[])
}

export default useUpComingMovies;