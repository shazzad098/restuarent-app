// src/components/StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; // Check for decimal part (though star3.png is used for empty)
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      // Use public path for images in public folder
      stars.push(<img key={`star-full-${i}`} src="/images/star.png" alt="Full star" className="w-4 h-4 shrink-0" />);
    } else {
       // Using star3.png for empty as requested. If you had a half-star image:
       // else if (hasHalfStar && i === fullStars + 1) {
       //   stars.push(<img key={`star-half-${i}`} src="/images/star2.png" alt="Half star" className="w-4 h-4 shrink-0" />);
       // }
      stars.push(<img key={`star-empty-${i}`} src="/images/star3.png" alt="Empty star" className="w-4 h-4 shrink-0" />);
    }
  }
  return <div className="flex items-center space-x-0.5">{stars}</div>;
};

export default StarRating;