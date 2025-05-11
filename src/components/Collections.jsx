import React from 'react';

const collections = [
    { label: 'All', icon: 'images/Collections/All.png' },
    { label: 'Restaurants', icon: 'images/Collections/Restuarants.png', active: true },
    { label: 'Hotels', icon: 'images/Collections/Hotel.png' },
    { label: 'Home services', icon: 'images/Collections/Home_Services.png' },
    { label: 'Shopping', icon: 'images/Collections/Shopping.png' },
    { label: 'Car location', icon: 'images/Collections/Car_location.png' },
    { label: 'Beauty & Spa', icon: 'images/Collections/Beauty&Spa.png' },
    { label: 'Park', icon: 'images/Collections/Park.png' },
    { label: 'museum', icon: 'images/Collections/Museum.png' },
    { label: 'Car wash', icon: 'images/Collections/CarWash.png' },
    { label: 'Bars', icon: 'images/Collections/Bars.png' },
    { label: 'Gyms', icon: 'images/Collections/Gyms.png' },
];

const Collections = () => {
    return (
        <div className="w-screen flex justify-center items-center gap-10 py-6 bg-white border-b">
            {collections.map((item) => (
                <div key={item.label} className="flex flex-col items-center cursor-pointer">
                    <img
                        src={item.icon}
                        alt={item.label}
                        className={`h-7 mb-1 ${item.active ? 'filter-none' : 'grayscale opacity-60'}`}
                    />
                    <span
                        className={`text-xs font-medium ${item.active ? 'text-blue-600' : 'text-gray-400'}`}
                    >
                        {item.label}
                    </span>
                    
                </div>
            ))}
        </div>
    );
};

export default Collections;
