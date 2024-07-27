import React from "react";
import "../styles/TestimonialCard.css";
function StarsRating({ rating }) {
  const Stars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<div className="rating__star star_1"></div>);
    }
    return stars;
  };
  return (
    <div
      style={{
        margin: 0,
      }}
      className="rating_black"
    >
      <Stars />
    </div>
  );
}

export default StarsRating;
