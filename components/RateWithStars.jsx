
"use client";
import React, { useState } from "react";
import "@styles/RateWithStars.css";

function RateWithStars({ onRatingChange }) {
  const [starsRate, setStarsRate] = useState(4);
  const [switchDefault , setSwitch] = useState(true);

  const handleRateChange = (rate) => {
    setSwitch(false);
    setStarsRate(rate);
  
    if (onRatingChange) {
      onRatingChange(rate);
    }

  };

  return (
    <div className="rate">
      <input
        type="radio"
        id="star5"
        name="rate"
        {
          ...(switchDefault ? { defaultChecked: true } : {})
        }
        onClick={() => handleRateChange(5)}
        value="5"
      />
      <label htmlFor="star5" title="text">5 stars</label>
      <input
        type="radio"
        id="star4"
        name="rate"
        onClick={() => handleRateChange(4)}
        value="4"
      />
      <label htmlFor="star4" title="text">4 stars</label>
      <input
        type="radio"
        id="star3"
        name="rate"
        onClick={() => handleRateChange(3)}
        value="3"
      />
      <label htmlFor="star3" title="text">3 stars</label>
      <input
        type="radio"
        id="star2"
        name="rate"
        onClick={() => handleRateChange(2)}
        value="2"
      />
      <label htmlFor="star2" title="text">2 stars</label>
      <input
        type="radio"
        id="star1"
        name="rate"
        onClick={() => handleRateChange(1)}
        value="1"
      />
      <label htmlFor="star1" title="text">1 star</label>
    </div>
  );
}

export default RateWithStars;
