import React from 'react';
import './Review.css';

const reviews = [
  {
    name: "Sarah Ahmed",
    comment: "Amazing food and super quick service! Highly recommended.",
    rating: 5
  },
  {
    name: "Ali Khan",
    comment: "The biryani was spicy and perfect. Will order again!",
    rating: 4
  },
  {
    name: "Hira Malik",
    comment: "Fresh, hot, and delivered on time. Very happy!",
    rating: 5
  },
];

const Review = () => {
  return (
    <div className="review-section" id="reviews">
      <h2>What Our Customers Say</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-stars">
              {'⭐️'.repeat(review.rating)}
            </div>
            <p className="review-comment">"{review.comment}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
