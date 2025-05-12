import React from 'react';
import { Button } from "@/components/ui/button";

const Feedback = () => {
  return (
    <section className="bg-gray-100 p-6 sm:p-8 md:p-12 lg:p-16 font-sans">
      <div className="container mx-auto max-w-6xl"> 
        <div className="overflow-hidden md:flex">
          {/* Left Text Section */}
          <div className="md:w-1/2 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.20rem] font-bold text-zinc-900 mb-5 leading-tight">
              MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
              The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
            </p>
            <div> {/* Wrapper for the button */}
              <Button 
                className="bg-zinc-900 hover:bg-zinc-700 text-white font-semibold py-3.5 px-8 rounded-full text-sm transition-colors duration-300 hover:cursor-pointer"
              >
                Explore MyFeedback business
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2">
            <img
              src="/images/feedback_img.png" // Path relative to the public folder
              alt="Outdoor restaurant dining area with a view of the water at sunset"
              className="w-full h-64 md:h-full object-cover rounded-3xl" // h-64 for mobile, h-full for md+ to match text content height
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;