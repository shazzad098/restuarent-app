// src/components/RestaurantItem.jsx (or inside RestaurantListPage.jsx)
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import StarRating from './StarRating';

// Make sure the 'to' prop uses a dynamic ID or slug
const RestaurantItem = ({ restaurant }) => {
  return (
    // Wrap the item with Link
    <Link 
      to={`/restaurant/${restaurant.name.toLowerCase().replace(/\s+/g, '-')}`} // Example: /restaurant/bella-italia
      // Or to={`/restaurant/${restaurant.id}`} if you use IDs
      className="block" // Make the link a block element
    >
      <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-40 shrink-0 mr-4 rounded-lg overflow-hidden group">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-90"></span>
            {/* ... other dots ... */}
          </div>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
            <p className="text-xs text-gray-500 mb-2 leading-relaxed line-clamp-2">
              {restaurant.description}
            </p>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <StarRating rating={restaurant.rating} />
            <span className="text-xs font-semibold text-gray-700 ml-1">{restaurant.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500">({restaurant.reviews} reviews)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;