import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.topRatedMovies);
    // This movies will have n number of movies here but we need only one movie data to show as video background nd all

    if(!movies) return ; // this is also known as early return
    // we did this bcz if till store is not rendered till that time movies will be null;
    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;

  return (
    <div className="pt-[50%] bg-black md:p-0">
        {/* Here we need two things one is video background and video title */}
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer