import React from 'react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo/feedback.png" alt="Logo" className="h-6 w-auto" />
        <span className="text-blue-500 font-bold">myfeedback</span>
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex items-center space-x-4 mx-4">
        <Input
          type="text"
          placeholder="restaurant, hotel, service..."
          className="w-full rounded-lg px-4 py-2 focus:outline-none"
        />
        <Input
          type="text"
          placeholder="Singapore..."
          className="rounded-lg px-4 py-2 focus:outline-none"
        />
        <button className="bg-blue-500 text-white rounded-full p-2">
          <img src="/icons/search.png" alt="Search" className="h-5 w-5" />
        </button>
      </div>

      {/* Button */}
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
        MyFeedback for business
      </button>
    </header>
  );
};

export default Navbar;