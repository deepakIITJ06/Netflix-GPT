import GptSearchBar from "./GptSearchBar"
import GptMoviesSuggestion from "./GptMoviesSuggestion"
import { GPT_IMG } from "../utils/urls"

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={GPT_IMG} alt="logo" className="h-screen object-cover md:w-screen"></img>
      </div>
      <div className="md:p-2">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  )
}

export default GptSearchPage;