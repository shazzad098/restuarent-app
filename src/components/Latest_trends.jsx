import React from 'react';
import { Button } from "@/components/ui/button";
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

const trendsData = [
  {
    name: "Bella Italia",
    image: img1,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.0,
    reviews: 34,
  },
  {
    name: "Little Shucker",
    image: img2,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 253,
  },
  {
    name: "Marafuku Ramen",
    image: img3,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.5,
    reviews: 87,
  },
  {
    name: "Bottega",
    image: img4,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 876,
  },
  {
    name: "Arabia Nights",
    image: img5,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.5,
    reviews: 334,
  },
  {
    name: "Lokma",
    image: img6,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 253,
  },
  {
    name: "The snug",
    image: img7,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    reviews: 654,
  },
  {
    name: "Starbelly",
    image: img8,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 876,
  },
  {
    name: "lori",
    image: img9,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 3.5,
    reviews: 334,
  },
  {
    name: "Ngalley",
    image: img10,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 253,
  },
  {
    name: "diagonal",
    image: img11,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 4.5,
    reviews: 654,
  },
  {
    name: "Kitoko",
    image: img12,
    description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    rating: 5.0,
    reviews: 876,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<img key={`star-full-${i}`} src="images/star.png" alt="Full star" className="w-4 h-4" />);
    } else {
      stars.push(<img key={`star-empty-${i}`} src="images/star2.png" alt="Empty star" className="w-4 h-4" />);
    }
  }
  return <div className="flex items-center space-x-0.5">{stars}</div>;
};

const Latest_trends = () => {
  return (
    <section className="py-12 bg-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-left">
          The latest trends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendsData.map((trend, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group hover:cursor-pointer">
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
              <div className="p-4 flex-grow flex flex-col"> {/* Use flex-grow to ensure consistent card height if descriptions vary */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{trend.name}</h3>
                <p className="text-xs text-gray-500 mb-3 flex-grow leading-relaxed">
                  {trend.description}
                </p>
                <div className="flex items-center space-x-1 mt-auto"> {/* mt-auto pushes rating to bottom */}
                  <StarRating rating={trend.rating} />
                  <span className="text-xs font-semibold text-gray-700 ml-1">{trend.rating.toFixed(1)}</span>
                  <span className="text-xs text-gray-500">({trend.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-base text-gray-700 mb-4">Discover more cool restaurants</p>
          <Button 
            className="bg-[#007BFF] hover:bg-[#0069D9] text-white font-semibold text-sm rounded-lg px-6 py-2.5 hover:cursor-pointer"
          >
            Show more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Latest_trends;