import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpComingMovies from "../hooks/useUpComingMovies"
import GptSearchPage from "./GptSearchPage"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearchPage />) : (<>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        Main container
          - Video background
          - Video title
        Secondary container
          - Movies list * n
            - movie cards
      */}
    </div>
  )
}

export default Browse