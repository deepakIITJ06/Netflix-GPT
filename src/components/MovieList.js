import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
    if(!movies) return;
    // console.log(movies);
    return (
        <div className="px-3">
            <h1 className="text-lg md:text-3xl py-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map((movie)=> (
                        <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;