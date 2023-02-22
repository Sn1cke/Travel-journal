import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  id: number;
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}

export default function Card(prop: Props) {
  return (
    <div className="content">
      <div className="card-wrapper">
        <img src={`${prop.imageUrl}`} />
        <div className="location-info">
          <span className="location-name">{prop.location}</span>
          <a href={`${prop.googleMapsUrl}`}>View on Google Maps</a>
          <h2>{prop.title}</h2>
          <p className="location-date">
            {prop.startDate} - {prop.endDate}
          </p>
          <p>{prop.description}</p>
        </div>
      </div>
    </div>
  );
}
