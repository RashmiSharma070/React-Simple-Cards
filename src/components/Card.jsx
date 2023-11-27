import React from "react";import { TfiLocationPin } from "react-icons/tfi";

import { PiClockDuotone } from "react-icons/pi";



import "./Card.css";

export const Card = ({
  status,
  title,
  description,
  venue,
  timeslot,
}) => {
  return (
    <div className="card-container">
      {status && <h2 className="card-status">{status}</h2>}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {venue && <h3 className="card-title"><TfiLocationPin/> {venue}</h3>}
      {timeslot && <h3 className="card-title"><PiClockDuotone/>{timeslot}</h3>}
    </div>
  );
};
