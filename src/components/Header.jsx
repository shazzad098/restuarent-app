
function App() {
  return (
    <div className="w-full flex items-center justify-between px-8 py-6 bg-white">
      {/* Logo */}
      <img src="images/Header/logo.png" alt="myfeedback logo" className="h-8 hover:cursor-pointer" />

      {/* Search Bar */}
      <div className="flex items-center w-1/2 bg-white rounded-full shadow px-4 py-2 border border-gray-200">
        <input
          type="text"
          placeholder="restaurant, hotel, service...."
          className="flex-1 outline-none bg-transparent text-gray-700 px-2"
        />
        <span className="mx-2 text-gray-300">|</span>
        <input
          type="text"
          placeholder="Singapour..."
          className="w-32 outline-none bg-transparent text-gray-700 px-2"
        />
        <button className="ml-2 hover:cursor-pointer">
          <img src="images/Header/search.png" alt="search" className="h-8 w-8" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <img src="images/Header/globe.png" alt="globe" className="h-5 w-5 hover:cursor-pointer" />
        <button className="bg-black text-white rounded-full px-4 py-2 font-medium hover:cursor-pointer">MyFeedback for business</button>
      </div>
    </div>
  )
}

export default App
