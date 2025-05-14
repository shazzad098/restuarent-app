import React from 'react'
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const sliderImagePaths = [
  '../images/slider/img1.png',
  '../images/slider/img2.png',
  '../images/slider/img3.png',
  '../images/slider/img4.png',
];

const sliderImages = sliderImagePaths.map((path) => ({
  img: new URL(path, import.meta.url).href,
  name: "Bottega",
  description: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
  rating: 5.0,
  reviews: 876
}));

import starIcon from "../images/star.png"; 

const Carousel = () => {
  return (
    <div className="bg-[#1783c6] rounded-2xl p-6 w-full max-w-6xl mx-auto mt-6">
      <h2 className="text-white text-2xl font-semibold mb-6">Find the best restaurant ratings below</h2>
      <div className="relative">
        <ShadCarousel>
          <CarouselPrevious className="!left-[-32px] !bg-white !text-black !shadow-md" />
          <CarouselContent className="gap-6">
            {sliderImages.map((item, idx) => (
              <CarouselItem key={idx} className="basis-1/4">
                <div className="bg-white rounded-xl shadow p-2 flex flex-col h-full">
                  <img
                    src={item.img}
                    alt="Restaurant"
                    className="rounded-lg w-full h-40 object-cover mb-2"
                  />
                  <div className="flex flex-col flex-1 px-2 pb-2">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-xs mb-3">{item.description}</p>
                    <div className="flex items-center mt-auto">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src={starIcon} alt="star" className="h-4 w-4 mr-0.5" />
                      ))}
                      <span className="font-semibold text-gray-700 ml-2">{item.rating}</span>
                      <span className="text-gray-400 text-xs ml-1">({item.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="!right-[-32px] !bg-white !text-black !shadow-md" />
        </ShadCarousel>

        <div className="flex justify-center mt-4">
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1 inline-block"></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full mx-1 inline-block"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full mx-1 inline-block"></span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;