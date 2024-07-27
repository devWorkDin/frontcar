import React from "react";
import '../styles/TestimonialCard.css';
import StarsRating from "./StarsRating";
import { Fade } from "react-awesome-reveal";
function TestimonialCard({ testimonial }) {
  const date = new Date(testimonial.date);
  const dateString = date.toLocaleDateString("fr-FR"); // Format the date in French format
  const timeString = date.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }); // Format the time in French format
  return (
    <Fade>
      <div className="card-testimonial">
        <div className="card-testimonial-image">
          <img src="/assets/svg/user.svg" alt="user" />
        </div>
        <div className="card-testimonial-content">
          <h3>{testimonial.username}</h3>
          <StarsRating rating={testimonial.rating} />
          <p className="content-description">{testimonial.content}</p>
          <hr className="hr" />
          <div className="flex items-center justify-between">
            {" "}
            <p>{dateString}</p>
            <p className="text-xs bg-red-200">{timeString}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default TestimonialCard;
