import { useRef } from "react";
import lang from "../utils/languageConstants";
import {useDispatch, useSelector} from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/urls";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT AI to get the movie results

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadae, Sholay, Don, Golmal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions. create({
      messages: [{ role: "user", content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices){
      // Do the error handeling
      return;
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Converting the movie names to an array with split
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // Now for each movie i will search TMDB API

    const promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));
    // Here we will get array of promises for each movie => and we all know that promise will take some time to resolve
    // Extracting data from the promises

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md" onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={searchText}
        type="text" 
        placeholder={lang[langKey].gptSearchPlaceholder} 
        className="p-4 m-4 col-span-9">
        </input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-md" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar