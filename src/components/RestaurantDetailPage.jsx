import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import StarRating from './StarRating';
import Header from './Header';
import Footer from './Footer';
import ImageCarouselModal from './ImageCarouselModal';

import heroBgImage from '../images/ViewRestuarants/bg.png';

// Import Icons
import locationIcon from '../images/ViewRestuarants/location.png';
import clockIcon from '../images/ViewRestuarants/clock.png';
import restaurantLogo from '../images/ViewRestuarants/logo.png';
import overallRatingStar from '../images/ViewRestuarants/star.png';

// More Information Icons
import menuIcon from '../images/ViewRestuarants/More-Information/location.png';
import phoneIcon from '../images/ViewRestuarants/More-Information/call.png';
import locationPinIcon from '../images/ViewRestuarants/More-Information/location.png';
import websiteIcon from '../images/ViewRestuarants/More-Information/website.png';
import facebookIcon from '../images/ViewRestuarants/Social/fb.png';
import instagramIcon from '../images/ViewRestuarants/Social/insta.png';
import tiktokIcon from '../images/ViewRestuarants/Social/tiktok.png';
import whatsappIcon from '../images/ViewRestuarants/Social/wp.png';

// Photo Gallery Images
import galleryImg1 from '../images/ViewRestuarants/group_image/img1.png';
import galleryImg2 from '../images/ViewRestuarants/group_image/img2.png';
import galleryImg3 from '../images/ViewRestuarants/group_image/img3.png';
import galleryImg4 from '../images/ViewRestuarants/group_image/img4.png';
import galleryImg5 from '../images/ViewRestuarants/group_image/img5.png';
import dotsIcon from '../images/ViewRestuarants/group_image/dots.png';

// "Also Discover" Section Images
import alsoImg1 from '../images/Latest-trends/img9.png';
import alsoImg2 from '../images/Latest-trends/img6.png';
import alsoImg3 from '../images/Latest-trends/img7.png';

// Map Image
import mapImage from '../images/ViewRestuarants/group_image/map.png';

// Placeholder Data for a single restaurant
const placeholderRestaurantData = {
    name: "Bella italia",
    rating: 5.0,
    reviewsCount: 834,
    description1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    description2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    address: "Singapour, Bishan-Ang Mo Kio Park",
    hours: "7j/7, 08:00 - 22:00",
    gallery: [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5],
    moreInfo: {
        menuLink: "#",
        phone: "+847 87 37 29 01",
        location: "Singapour, Bishan",
        website: "www.bellaitalia.com",
        social: [
            { icon: facebookIcon, link: "#" },
            { icon: instagramIcon, link: "#" },
            { icon: tiktokIcon, link: "#" },
            { icon: whatsappIcon, link: "#" },
        ]
    },
    overallRatingDetails: {
        reviews: 834,
        distribution: [
            { stars: 5, percentage: 80 },
            { stars: 4, percentage: 15 },
            { stars: 3, percentage: 3 },
            { stars: 2, percentage: 1 },
            { stars: 1, percentage: 1 },
        ]
    },
    userReviews: [
        { id: 1, user: "Wei Jie", location: "Singapore, Little India", rating: 5, date: "29/11/2023", text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
        { id: 2, user: "Mei Ling", location: "Singapore, Orchard boulevard", rating: 4, date: "09/05/2023", text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
        { id: 3, user: "Wei Xiong", location: "Singapore, Takashimaya", rating: 5, date: "01/05/2023", text: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout." },
        // ... more reviews
    ],
};

const alsoDiscoverData = [
    { id: 'melt', name: "The melt", image: alsoImg1, description: "...", rating: 3.5, reviews: 334 },
    { id: 'lokma', name: "Lokma", image: alsoImg2, description: "...", rating: 5.0, reviews: 253 },
    { id: 'snug', name: "The snug", image: alsoImg3, description: "...", rating: 4.5, reviews: 654 },
];

// Helper component for individual review
const UserReviewCard = ({ review }) => (
    <div className="bg-stone-50 p-5 rounded-lg shadow-sm">
        <div className="flex items-center mb-3">
            <img src="/images/person.png" alt={review.user} className="w-8 h-8 rounded-full mr-3 bg-gray-200 p-1" />
            <div>
                <p className="font-semibold text-sm text-gray-800">{review.user}</p>
                <p className="text-xs text-gray-500">{review.location}</p>
            </div>
        </div>
        <div className="flex items-center mb-2">
            <StarRating rating={review.rating} />
            <span className="text-xs text-gray-500 ml-2">{review.date}</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">{review.text}</p>
    </div>
);

const RestaurantDetailPage = () => {
    const { restaurantSlug } = useParams();
    const [restaurant, setRestaurant] = useState(placeholderRestaurantData);
    const [visibleReviews, setVisibleReviews] = useState(3);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialModalImageIndex, setInitialModalImageIndex] = useState(0);

    const handleShowMoreReviews = () => {
        setVisibleReviews(prev => prev + 3);
    };

    const openImageModal = (startIndex = 0) => {
        setInitialModalImageIndex(startIndex);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setIsModalOpen(false);
    };

    if (!restaurant) {
        return (
            <>
                <Header />
                <div className="container mx-auto py-10 text-center">Loading restaurant details or restaurant not found...</div>
                <Footer />
            </>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">

            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    className="relative h-[50vh] md:h-[60vh] bg-cover bg-center text-white flex items-end p-6 md:p-10"
                    style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0) 70%), url(${heroBgImage})` }}
                >
                    <div className="container mx-auto relative z-10">
                        <p className="text-xs uppercase tracking-wider mb-2">Home / {restaurant.name}</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">{restaurant.name}</h1>
                        <div className="flex items-center mb-3">
                            <StarRating rating={restaurant.rating} />
                            <span className="ml-2 text-sm">({restaurant.reviewsCount} reviews)</span>
                        </div>
                        <p className="text-sm md:text-base max-w-xl mb-1">{restaurant.description1}</p>
                        <p className="text-sm md:text-base max-w-xl mb-4">{restaurant.description2}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                            <div className="flex items-center">
                                <img src={locationIcon} alt="Location" className="w-4 h-4 mr-2 invert brightness-0 filter" />
                                {restaurant.address}
                            </div>
                            <div className="flex items-center">
                                <img src={clockIcon} alt="Hours" className="w-4 h-4 mr-2 invert brightness-0 filter" />
                                {restaurant.hours}
                            </div>
                        </div>
                    </div>
                    {/* Floating Restaurant Logo */}
                    <img
                        src={restaurantLogo}
                        alt={`${restaurant.name} logo`}
                        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] md:bottom-[-60px] w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg bg-white"
                    />
                </section>

                {/* Main Content Area */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                    {/* Photo Gallery Section */}
                    <section className="mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Discover our magnificent place in photos</h2>
                        <p className="text-gray-600 text-sm mb-6 max-w-2xl">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing.</p>
                        
                        {restaurant.gallery && restaurant.gallery.length >= 1 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 h-[30rem] md:h-[32rem]">
                                {/* Main Large Image */}
                                <div className="lg:col-span-3 md:col-span-1 col-span-1 rounded-xl overflow-hidden relative shadow-lg group h-full cursor-pointer" onClick={() => openImageModal(0)}>
                                    <img 
                                        src={restaurant.gallery[0]} 
                                        alt="Main restaurant highlight" 
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    />
                                    <Button 
                                        variant="secondary"
                                        onClick={(e) => { e.stopPropagation(); openImageModal(0); }}
                                        className="absolute bottom-4 left-4 bg-white hover:bg-opacity-80 text-black px-3 py-1.5 rounded-full h-auto hover:cursor-pointer"
                                    >
                                        {/* 6 dots icon */}
                                        <img src={dotsIcon} alt="Dots" className="w-4 h-4 mr-1.5" />
                                        View all photos ({restaurant.gallery.length})
                                    </Button>
                                </div>

                                {/* Four Smaller Images */}
                                <div className="lg:col-span-2 md:col-span-1 col-span-1 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-full">
                                    {restaurant.gallery.slice(1, 5).map((imgSrc, index) => (
                                        <div 
                                            key={`gallery-small-${index}`} 
                                            className="rounded-xl overflow-hidden shadow-lg group h-full cursor-pointer"
                                            onClick={() => openImageModal(index + 1)}
                                        >
                                            <img 
                                                src={imgSrc} 
                                                alt={`Restaurant view ${index + 2}`} 
                                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {restaurant.gallery && restaurant.gallery.map((imgSrc, index) => (
                                    <div key={`gallery-fallback-${index}`} className="rounded-xl overflow-hidden shadow-lg group aspect-square">
                                        <img
                                            src={imgSrc}
                                            alt={`Restaurant view ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                                {(!restaurant.gallery || restaurant.gallery.length === 0) && <p>No photos available.</p>}
                            </div>
                        )}
                    </section>

                    {/* More Information & Map Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                        <div className="md:col-span-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">More informations</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center"><img src={menuIcon} alt="Menu" className="w-5 h-5 mr-3 text-gray-600" /><a href={restaurant.moreInfo.menuLink} className="text-gray-700 hover:text-black underline">See the menu</a></li>
                                <li className="flex items-center"><img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-3 text-gray-600" /><span className="text-gray-700">{restaurant.moreInfo.phone}</span></li>
                                <li className="flex items-center"><img src={locationPinIcon} alt="Location" className="w-5 h-5 mr-3 text-gray-600" /><span className="text-gray-700">{restaurant.moreInfo.location}</span></li>
                                <li className="flex items-center"><img src={websiteIcon} alt="Website" className="w-5 h-5 mr-3 text-gray-600" /><a href={`http://${restaurant.moreInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black underline">{restaurant.moreInfo.website}</a></li>
                            </ul>
                            <div className="flex space-x-3 mt-5">
                                {restaurant.moreInfo.social.map((social, index) => (
                                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                        <img src={social.icon} alt="Social media" className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-2 h-64 md:h-auto rounded-xl overflow-hidden shadow-md">
                            <img src={mapImage} alt="Map" className="w-full h-full object-cover hover:cursor-pointer" />
                        </div>
                    </section>

                    {/* Overall Rating & Reviews Section */}
                    <section className="mb-12 md:mb-16">
                        <div className="flex items-center mb-6">
                            <img src={overallRatingStar} alt="Overall rating star" className="w-10 h-10 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Overall rating</h3>
                                <p className="text-xs text-gray-500">{restaurant.overallRatingDetails.reviews} Reviews</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-center">
                            <div className="flex items-center justify-center md:justify-start col-span-1">
                                <StarRating rating={restaurant.rating} />
                                <span className="text-3xl font-bold text-gray-800 ml-3">{restaurant.rating.toFixed(1)}</span>
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-1.5">
                                {restaurant.overallRatingDetails.distribution.map(dist => (
                                    <div key={dist.stars} className="flex items-center text-xs">
                                        <span className="text-gray-600 w-12">{dist.stars} stars</span>
                                        <div className="flex-grow bg-gray-200 rounded-full h-2 mx-2">
                                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${dist.percentage}%` }}></div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 mb-6">
                            <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100 text-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.033a.75.75 0 01-1.5 0v-3.033a2.25 2.25 0 00-.659-1.59L4.682 6.22A2.25 2.25 0 014 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" /></svg>
                                Filter
                            </Button>
                            <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-100 text-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
                                Sort
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {restaurant.userReviews.slice(0, visibleReviews).map(review => (
                                <UserReviewCard key={review.id} review={review} />
                            ))}
                        </div>
                        {visibleReviews < restaurant.userReviews.length && (
                            <div className="text-center mt-8">
                                <Button onClick={handleShowMoreReviews} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg px-6 py-2.5">
                                    Show more reviews
                                </Button>
                            </div>
                        )}
                    </section>

                    {/* Also Discover Section */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Also discover...</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {alsoDiscoverData.map(item => (
                                <Link to={`/restaurant/${item.id}`} key={item.id} className="block group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                                    <div className="bg-white flex flex-col h-full">
                                        <div className="relative">
                                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                                                {/* Dots for image carousel indicator */}
                                                <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-100"></span>
                                                <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                                                <span className="block w-[7px] h-[7px] bg-white rounded-full opacity-60"></span>
                                            </div>
                                        </div>
                                        <div className="p-4 flex-grow flex flex-col">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                                            <p className="text-xs text-gray-500 mb-3 flex-grow leading-relaxed line-clamp-2">{item.description}</p>
                                            <div className="flex items-center space-x-1 mt-auto">
                                                <StarRating rating={item.rating} />
                                                <span className="text-xs font-semibold text-gray-700 ml-1">{item.rating.toFixed(1)}</span>
                                                <span className="text-xs text-gray-500">({item.reviews} reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                </div>
            </main>

            <Footer />

            {/* Render the Modal */}
            <ImageCarouselModal
                isOpen={isModalOpen}
                onClose={closeImageModal}
                images={restaurant.gallery}
                initialIndex={initialModalImageIndex}
            />
        </div>
    );
};

export default RestaurantDetailPage;