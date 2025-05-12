
function App() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 md:py-6 bg-white">
      {/* Logo */}
      <img src="images/Header/logo.png" alt="myfeedback logo" className="h-8 hover:cursor-pointer mb-4 md:mb-0" />

      {/* Search Bar */}
      <div className="flex items-center w-full md:w-1/2 bg-white rounded-full shadow px-4 py-2 border border-gray-200 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="restaurant, hotel, service...."
          className="flex-1 outline-none bg-transparent text-gray-700 px-2"
        />
        <span className="mx-2 text-gray-300 hidden md:inline">|</span>
        <input
          type="text"
          placeholder="Singapour..."
          className="w-24 md:w-32 outline-none bg-transparent text-gray-700 px-2"
        />
        <button className="ml-2 hover:cursor-pointer">
          <img src="images/Header/search.png" alt="search" className="h-8 w-8" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
        <img src="images/Header/globe.png" alt="globe" className="h-8 w-8 hover:cursor-pointer" />
        <button className="bg-black text-white rounded-full px-3 md:px-4 py-2 font-medium hover:cursor-pointer text-sm md:text-base">MyFeedback for business</button>
      </div>
    </div>
  )
}

export default App
