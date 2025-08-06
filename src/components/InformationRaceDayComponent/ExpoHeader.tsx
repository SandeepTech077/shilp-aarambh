import Image from 'next/image';
import { Helper } from '@/helper/InformationRaceDayHelper/Helper';
import React from 'react';

interface BibCollection {
  title: string;
  date: string;
  time: string;
  venue: string;
  googleMapLink: string;
}

interface RunningDetails {
  expoTitle: string;
  date: string;
  time: string;
  venue: string;
  googleMapLink: string;
  bibCollection: BibCollection;
}

interface ExpoHeaderProps {
  data: RunningDetails;
}

const ExpoHeader: React.FC<ExpoHeaderProps> = ({ data }) => {
  return (
    <div className=" p-6 mb-6 text-[#1D3A69]" >
      {/* Logo */}
      <div className="flex items-center mb-4">
      
          <Image src={Helper.BiboLogo} alt="Event Logo"  />
       
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">
        {data.expoTitle}
      </h1>

      {/* Main Event Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-start">
          <span className="font-semibold  min-w-16">Date:</span>
          <span className="">{data.date}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold  min-w-16">Time:</span>
          <span className="">{data.time}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold  min-w-16">Venue:</span>
          <span className="">{data.venue}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold  min-w-16">Google Map:</span>
          <a
            href={data.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline break-all"
          >
            {data.googleMapLink}
          </a>
        </div>
      </div>

      {/* BIB Collection for Outstation */}
      <div className="border-t pt-4">
        <h3 className="font-bold  mb-3">{data.bibCollection.title}</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="font-semibold  min-w-16">Date:</span>
            <span className="">{data.bibCollection.date}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold  min-w-16">Time:</span>
            <span className="">{data.bibCollection.time}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold  min-w-16">Venue:</span>
            <span className="">{data.bibCollection.venue}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold  min-w-16">Google Map:</span>
            <a
              href={data.bibCollection.googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline break-all"
            >
              {data.bibCollection.googleMapLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoHeader;
