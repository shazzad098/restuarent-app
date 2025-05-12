// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 font-sans"> {/* User requested bg-white */}
    <hr className="my-8 border-gray-200" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> {/* Added text-center to center align lists */}
          
          {/* About Column */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3"> {/* Increased spacing slightly for better readability */}
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">About MyFeedback</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Investor Relations</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Trust & Safety</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Content Guidelines</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Your Privacy Choices</a></li>
            </ul>
          </div>

          {/* MyFeedback Column */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4">MyFeedback</h3>
            <ul className="space-y-3"> {/* Increased spacing slightly */}
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">MyFeedback for business</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Collections</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Talk</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Events</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">MyFeedback blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Support</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">Developers</a></li>
            </ul>
          </div>

          {/* Languages & Countries Column */}
          <div>
            {/* Languages */}
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-4">Languages</h3>
              <div className="relative">
                <button 
                  type="button" 
                  className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 w-full text-center transition-colors duration-200 focus:outline-none"
                  aria-haspopup="true" // For accessibility, indicating it acts like a dropdown
                  aria-expanded="false" // Set to true if dropdown is open
                >
                  English
                  <svg className="ml-1 h-4 w-4 text-gray-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Actual dropdown menu items would be implemented here if interactive */}
              </div>
            </div>

            {/* Countries */}
            <div className="mt-8"> {/* Space between Languages and Countries sections */}
              <h3 className="text-base font-bold text-gray-900 mb-4">Countries</h3>
              <div className="relative">
                <button 
                  type="button" 
                  className="flex items-center justify-center text-sm text-gray-600 hover:text-gray-900 w-full text-center transition-colors duration-200 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Singapour
                  <svg className="ml-1 h-4 w-4 text-gray-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Actual dropdown menu items would be implemented here if interactive */}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="my-8 border-gray-200" /> {/* On white bg, gray-200 is a light line */}

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Copyright © Septembre 2023 myfeedback, designed by scott
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;