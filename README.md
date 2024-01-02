# Netflix gpt

- create react app
- Configured tailwind css
- routing of app
- Header
- Login form
- Sign up form
- form validation
- useRef hook
- firebase setup
- Deploy our app to production
    - before deployment => always first build the project using "npm run build"
- Create sign up user in firebase
- Implement sign in user id
- Created redux store with userSlice
- Implemented sign out feature
- You can add update profile API also
- Fetch movies from TMDB
- Register on TMDB and get API token
- get data from TMDB and now playing movies list API
- Custom hook for nowPlayingMovies
- create movieSlice
- Update store with movie data
- Planning for MainContainer & SecondaryContainer
- Fetch data for trailer video
- Update store with trailer video data
- Embedded the you tube and make it autoplay and mute
- Tailwind Classes to make main container look awesome
- Build Secondary conatainer
- Built MovieList
- Built Movie Card
- TMDB image CDN URL
- Made the browser page amazing with the help of tailwind css
- usePopularMovies custom hook
- GPT search page
- Gpt search bar
- Multi-language feature in our App
- GPT open AI Api key
- GPT search API call
- fetched gptMoviesSuggestions from TMDB
- Created gptSlice added data
- Reused movieList component to make movie suggestion container
- Memoization
- Added .nev file
- Made our Responsive

# Features : 
- Login/sign up
    - sign In/ sign Up form
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main movie
        - Trailer in bcakground
        - Title and description
        - Movie Suggestion
            - n movies
- Netflix GPT
    - Search Bar
    - Movie suggestions


# Study about validation
# Study about useRef hook
# Firebase

# Read carefully
- We want that if someone wants to go to browse page without login our app should throw him to login page for that our "useEffect" should be placed such that it is globally used and it has router part bcz navigate only works in router part.
    - Best way to do this put "useEffect" into header
    
#
- When we console json data it happens twice due to "React.StrictMode" => react do this for checking the rendering method to be correct

# Important
- Always name custom hook starts from "use"+ something
- Store --> data => useSelector() hook
- For finding the dynamic video Id we are having two option bcz trailer is defined only in "getMovieVideo" function scope that's why we can't do "trailer.key"
    # Two methods to handle this
    - one is by creating useState variable
    - Other is by using redux store

# For reading anything from store we always use "useSelector" hook

# jsx elements should only have one parent => that is when you are returning to main & secondary page or gpt page you can't just put both jsx element you always need to use => JSX FRAGMENT => put those two jsx in "<></>"

# All the "Data layer" is managed by redux store

# While making app responsive by default css is for mobile and when we apply md:.... then it is for pc