// src/components/Latest_trends.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Step 1: Import Link
import { Button } from "@/components/ui/button";
// Import restaurant images (make sure paths are correct relative to this file)
import img1 from '../images/Latest-trends/img1.png';
import img2 from '../images/Latest-trends/img2.png';
import img3 from '../images/Latest-trends/img3.png';
import img4 from '../images/Latest-trends/img4.png';
import img5 from '../images/Latest-trends/img5.png';
import img6 from '../images/Latest-trends/img6.png';
import img7 from '../images/Latest-trends/img7.png';
import img8 from '../images/Latest-trends/img8.png';
import img9 from '../images/Latest-trends/img9.png';
import img10 from '../images/Latest-trends/img10.png';
import img11 from '../images/Latest-trends/img11.png';
import img12 from '../images/Latest-trends/img12.png';

// Import the StarRating component (assuming it's in the same directory or adjust path)
import StarRating from './StarRating'; // Make sure this path is correct

const trendsData = [
  // Your trendsData array remains the same...
   { name: "Bella Italia", image: img1, description: "...", rating: 4.0, reviews: 34, },
   { name: "Little Shucker", image: img2, description: "...", rating: 5.0, reviews: 253, },
   { name: "Marafuku Ramen", image: img3, description: "...", rating: 3.5, reviews: 87, },
   { name: "Bottega", image: img4, description: "...", rating: 5.0, reviews: 876, },
   { name: "Arabia Nights", image: img5, description: "...", rating: 3.5, reviews: 334, },
   { name: "Lokma", image: img6, description: "...", rating: 5.0, reviews: 253, },
   { name: "The snug", image: img7, description: "...", rating: 4.5, reviews: 654, },
   { name: "Starbelly", image: img8, description: "...", rating: 5.0, reviews: 876, },
   { name: "lori", image: img9, description: "...", rating: 3.5, reviews: 334, },
   { name: "Ngalley", image: img10, description: "...", rating: 5.0, reviews: 253, },
   { name: "diagonal", image: img11, description: "...", rating: 4.5, reviews: 654, },
   { name: "Kitoko", image: img12, description: "...", rating: 5.0, reviews: 876, },
];


const Latest_trends = () => {
  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left">
          The latest trends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendsData.map((trend, index) => (
            // Step 2: Wrap the entire card content with Link
            // Step 3: Add the 'to' prop with the correct path
            // Step 4: Move the key prop to the Link component
            // Step 5: Add necessary classes for layout/styling (like 'block', 'group')
            <Link
              to="/restaurants/singapore" // The path defined in App.jsx Routes
              key={index}
              className="block group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200" // Apply necessary layout/group classes here
            >
              {/* The original card structure remains inside the Link */}
              <div className="bg-white flex flex-col h-full"> {/* Removed redundant outer styles */}
                <div className="relative">
                  <img
                    src={trend.image}
                    alt={trend.name}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  {/* Image pagination dots */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                    <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-100"></span>
                    <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                    <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                    <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                    <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{trend.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 flex-grow leading-relaxed line-clamp-3"> {/* Added line-clamp */}
                    {trend.description}
                  </p>
                  <div className="flex items-center space-x-1 mt-auto">
                    <StarRating rating={trend.rating} />
                    <span className="text-xs font-semibold text-gray-700 ml-1">{trend.rating.toFixed(1)}</span>
                    <span className="text-xs text-gray-500">({trend.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </Link> // End of Link wrapper
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-base text-gray-700 mb-4">Discover more cool restaurants</p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg px-6 py-2.5" // Updated button color
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Latest_trends;