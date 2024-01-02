import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (<div className="bg-black">
      {/* 
        MovieList - Popular
          MovieCards
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
       */}
      <div className="mt-0 md:-mt-28 pl-2 relative z-20 md:pl-4">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/> 
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
      </div>
    </div>)
  )
}

export default SecondaryContainer