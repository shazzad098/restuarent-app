// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Collections from './components/Collections';
import Carousel from './components/Carousel';
import Latest_trends from './components/Latest_trends';
import Feedback from './components/Feedback';
import RecentActivities from './components/RecentActivities';
import RestaurantListPage from './components/RestaurantListPage';
import RestaurantDetailPage from './components/RestaurantDetailPage'; // Import the new detail page

function HomePage() {
  return (
    <>
      <Collections />
      <Carousel />
      <Latest_trends />
      <Feedback />
      <RecentActivities />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants/singapore" element={<RestaurantListPage />} />
        {/* Add the new route for restaurant details */}
        {/* :restaurantSlug is a URL parameter */}
        <Route path="/restaurant/:restaurantSlug" element={<RestaurantDetailPage />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;