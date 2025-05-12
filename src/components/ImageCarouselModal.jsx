import React, { useState, useEffect } from 'react';

const ImageCarouselModal = ({ isOpen, onClose, images, initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isOpen) return;
            if (event.key === 'ArrowRight') {
                goToNext();
            } else if (event.key === 'ArrowLeft') {
                goToPrevious();
            } else if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, currentIndex, images.length]);

    if (!isOpen || !images || images.length === 0) {
        return null;
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl lg:max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex justify-between items-center p-3 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-700">
                        Photos ({currentIndex + 1} / {images.length})
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Main Image Display Area */}
                <div className="relative flex-grow h-[60vh] md:h-[70vh]"> {/* Adjusted height */}
                    <img
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className="w-full h-full object-contain bg-gray-100" // object-contain to see full image
                    />
                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Thumbnails Strip */}
                <div className="p-3 bg-gray-50 border-t border-gray-200 overflow-x-auto">
                    <div className="flex space-x-2 justify-center">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-2' : 'opacity-70 hover:opacity-100'
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarouselModal;