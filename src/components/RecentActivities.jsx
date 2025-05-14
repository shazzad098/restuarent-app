// src/components/RecentActivities.jsx
import React, { useState } from 'react';

// Import images for Card 1
import card1Img1 from '../images/Recent_Activities/Card1/img1.png';
import card1Img2 from '../images/Recent_Activities/Card1/img2.png';
import card1Img3 from '../images/Recent_Activities/Card1/img3.png';

// Import images for Card 2
import card2Img1 from '../images/Recent_Activities/Card2/img1.png';
import card2Img2 from '../images/Recent_Activities/Card2/img2.png';
import card2Img3 from '../images/Recent_Activities/Card2/img3.png';

// Import images for Card 3
import card3Img1 from '../images/Recent_Activities/Card3/img1.png';
import card3Img2 from '../images/Recent_Activities/Card3/img2.png';
import card3Img3 from '../images/Recent_Activities/Card3/img3.png';

// This is the base data for unique cards
const uniqueActivitiesData = [
  {
    id: 1,
    user: {
      name: 'Leslie sakho',
      location: 'Canada, toronto',
      avatar: '/images/person.png',
    },
    rating: 5,
    date: '09/11/2023',
    text1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    text2: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    images: [card1Img1, card1Img2, card1Img3],
  },
  {
    id: 2,
    user: {
      name: 'Chris macari',
      location: 'Singapour',
      avatar: '/images/person.png',
    },
    rating: 5,
    date: '14/09/2023',
    text1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    text2: 'The lorem ipsum is, in printing.',
    images: [card2Img1, card2Img2, card2Img3],
  },
  {
    id: 3,
    user: {
      name: 'Jojo alba',
      location: 'Kuala lumpur',
      avatar: '/images/person.png',
    },
    rating: 5,
    date: '28/09/2023',
    text1: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    text2: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    images: [card3Img1, card3Img2, card3Img3],
  },
  // You can add more unique cards here if you have more data
  // e.g., { id: 4, ... }, { id: 5, ... }
];

const ActivityCard = ({ activity }) => {
  // Added a key to the outer div for React reconciliation if card content changes dramatically
  return (
    <div key={activity.id} className="bg-[#F8F8F8] p-5 rounded-xl shadow-lg flex flex-col h-full">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 shrink-0">
          <img src={activity.user.avatar} alt={activity.user.name} className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-gray-800">{activity.user.name}</h3>
          <p className="text-xs text-gray-500">{activity.user.location}</p>
        </div>
      </div>

      <div className="flex items-center mb-3 space-x-1">
        {[...Array(activity.rating)].map((_, i) => (
          <img key={`star-${activity.id}-${i}`} src="/images/star.png" alt="star" className="w-4 h-4" />
        ))}
        <span className="text-xs text-gray-600 ml-2">{activity.date}</span>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed mb-2">
        {activity.text1}
      </p>
      <p className="text-xs text-gray-600 leading-relaxed mb-4">
        {activity.text2}
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4 mt-auto">
        {activity.images.map((img, index) => (
          <img
            key={`img-${activity.id}-${index}`}
            src={img}
            alt={`Activity image ${index + 1} for ${activity.user.name}`}
            className="w-full h-20 object-cover rounded-md"
          />
        ))}
      </div>

      <a href="#" className="text-sm font-semibold text-gray-800 underline hover:text-black">
        Discover
      </a>
    </div>
  );
};

const RecentActivities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of cards to display at once

  const totalUniqueItems = uniqueActivitiesData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalUniqueItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalUniqueItems) % totalUniqueItems);
  };

  // Calculate the items to display for the carousel
  const displayedActivities = [];
  if (totalUniqueItems > 0) { // Ensure there's data to process
    for (let i = 0; i < itemsPerPage; i++) {
      if (totalUniqueItems < itemsPerPage && i >= totalUniqueItems) {
        // If fewer unique items than itemsPerPage, fill with items from the start (optional, or show empty)
        // This example repeats items if not enough unique ones to fill the 3 slots.
        // For a more standard carousel, you'd typically only show available items.
        displayedActivities.push(uniqueActivitiesData[(currentIndex + i) % totalUniqueItems]);
      } else {
         displayedActivities.push(uniqueActivitiesData[(currentIndex + i) % totalUniqueItems]);
      }
    }
  }


  // If there are fewer unique items than itemsPerPage, we might want to disable buttons
  // or adjust behavior. For now, it will cycle the available items.
  const canCycle = totalUniqueItems > 1; // Enable cycling only if there's more than one unique item

  return (
    <section className="bg-white py-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Removed relative here, arrows are relative to this */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-left">
          Recent activities
        </h2>
        
        {/* Wrapper for grid and arrows to manage their relative positioning */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedActivities.map((activity, index) => (
              <ActivityCard key={`${activity.id}-${index}`} activity={activity} />
            ))}
          </div>

          {/* Previous Arrow Button */}
          {canCycle && (
            <button
              onClick={handlePrev}
              aria-label="Previous activity"
              className="absolute top-1/4 -translate-y-1/2 left-0 sm:left-1 md:-left-3 lg:-left-5 transform 
                         bg-white rounded-full p-2.5 shadow-lg hover:bg-gray-50 transition-colors z-10
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                         translate-y-[20px]"
            >
              <img src="images/rightArrow.png" alt="Previous" className="w-5 h-5 text-gray-700 transform rotate-180" />
            </button>
          )}

          {/* Next Arrow Button */}
          {canCycle && (
            <button
              onClick={handleNext}
              aria-label="Next activity"
              className="absolute top-1/4 -translate-y-1/2 right-0 sm:right-1 md:-right-3 lg:-right-5 transform 
                         bg-white rounded-full p-2.5 shadow-lg hover:bg-gray-50 transition-colors z-10
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                         translate-y-[20px]" // Fine-tune vertical position
            >
              <img src="images/rightArrow.png" alt="Next" className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;