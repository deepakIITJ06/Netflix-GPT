const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-screen aspect-video pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-extralight">{title}</h1>
      <p className="hidden md:inline-block py-5 text-md w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80">▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-lg rounded-lg hover:bg-opacity-80">ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle