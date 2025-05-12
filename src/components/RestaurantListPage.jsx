// src/components/RestaurantListPage.jsx
import React, { useState, useMemo } from 'react';
import Header from './Header'; // Import the Header component
import RestaurantItem from './RestaurantItem'; // Import the list item component
import { Button } from "@/components/ui/button"; // Shadcn UI Button

// Import restaurant imagesy
import restImg1 from '../images/Restaurants/img1.png';
import restImg2 from '../images/Restaurants/img2.png';
import restImg3 from '../images/Restaurants/img3.png';
import restImg4 from '../images/Restaurants/img4.png';
import restImg5 from '../images/Restaurants/img5.png';
import restImg6 from '../images/Restaurants/img6.png';
import restImg7 from '../images/Restaurants/img7.png';

// Import map image
import mapImage from '../images/Restaurants/map.png';

// Sample Data - Replace with your actual data source/fetching logic
const initialRestaurantData = [
   { id: 1, name: "The snug", image: restImg1, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5, reviews: 654 },
   { id: 2, name: "Bottega", image: restImg2, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 5.0, reviews: 1654 },
   { id: 3, name: "Little Shucker", image: restImg3, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 3.0, reviews: 553 },
   { id: 4, name: "Lokma", image: restImg4, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5, reviews: 654 },
   { id: 5, name: "Starbelly", image: restImg5, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5, reviews: 654 },
   { id: 6, name: "The melt", image: restImg6, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5, reviews: 654 },
   { id: 7, name: "Arabia Nights", image: restImg7, description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.", rating: 4.5, reviews: 654 },
   // Add more restaurants if needed to test "Show more"
   { id: 8, name: "Another Place", image: restImg1, description: "More placeholder text for another restaurant entry.", rating: 4.0, reviews: 321 },
   { id: 9, name: "Yet Another Eatery", image: restImg2, description: "Even more descriptive text goes here.", rating: 4.8, reviews: 987 },
   { id: 10, name: "Restaurant X", image: restImg3, description: "Final placeholder for the list demonstration.", rating: 3.5, reviews: 123 },
];

// Sort Icon SVG Component
const SortIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  </svg>
);


function RestaurantListPage() {
  const ITEMS_PER_PAGE = 7; // How many items to show initially / load more
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [sortOrder, setSortOrder] = useState('default'); // 'default', 'rating_high_low', 'rating_low_high'

  // Memoize sorted data to avoid re-sorting on every render unless data or sortOrder changes
  const sortedRestaurants = useMemo(() => {
    const dataToSort = [...initialRestaurantData]; // Create a copy to sort
    switch (sortOrder) {
      case 'rating_high_low':
        return dataToSort.sort((a, b) => b.rating - a.rating);
      case 'rating_low_high':
        return dataToSort.sort((a, b) => a.rating - b.rating);
      case 'default':
      default:
         // You might want a default sort (e.g., by ID or name) or keep original API order
        return dataToSort; // Or dataToSort.sort((a, b) => a.id - b.id);
    }
  }, [sortOrder]); // Dependency array includes sortOrder

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE);
  };

  const handleSort = () => {
     // Cycle through sort orders
     if (sortOrder === 'default') {
       setSortOrder('rating_high_low');
     } else if (sortOrder === 'rating_high_low') {
       setSortOrder('rating_low_high');
     } else {
       setSortOrder('default');
     }
     // Optionally reset visible count on sort:
     // setVisibleCount(ITEMS_PER_PAGE);
  }

  const displayedItems = sortedRestaurants.slice(0, visibleCount);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 hover:cursor-pointer">

      <main className="flex-grow container mx-auto pt-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Restaurant List */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <p className="text-sm text-gray-500 mb-2">Home / All restaurants</p>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                best restaurants in singapore
              </h1>
              <Button
                variant="outline"
                className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100 text-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5"
                onClick={handleSort}
              >
                <SortIcon className="w-4 h-4" />
                Sort
              </Button>
            </div>

            {/* Restaurant List */}
            <div className="space-y-4">
              {displayedItems.map(restaurant => (
                <RestaurantItem key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>

            {/* Show More Button */}
            {visibleCount < sortedRestaurants.length && (
              <div className="text-center mt-8 mb-6">
                <Button
                  onClick={handleShowMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full px-6 py-2.5 hover:cursor-pointer"
                >
                  Show more
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Map */}
          <div className="w-full lg:w-1/2 xl:w-3/5 lg:sticky lg:top-[80px] h-[500px] lg:h-[calc(100vh-100px)] rounded-lg overflow-hidden shadow-md hidden lg:block">
             {/* Adjust lg:top value based on your header height + desired gap */}
             {/* Adjust lg:h value to control map height on large screens */}
            <img
              src={mapImage}
              alt="Map of Singapore showing restaurant locations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Optional: Add Footer component here if needed */}
      {/* <Footer /> */}
    </div>
  );
}

export default RestaurantListPage;