import React from "react";
import Map from "../../../public/SVG/Map.svg"
import Date from "../../../public/SVG/Date.svg"
import Image from "next/image";

interface EventDetailsProps {
  date: string;
  location: string;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ date, location }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex items-center gap-2">
       
        <Image src={Date} width={25} height={25} alt="Date" />
        <span className="text-white text-sm md:text-lg">{date}</span>
      </div>
      <div className="flex items-center gap-2">
     
        <Image src={Map} width={25} height={25} alt="Map" />
        <span className="text-white text-sm md:text-lg">{location}</span>
      </div>
    </div>
  );
};
