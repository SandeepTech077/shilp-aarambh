"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface Station {
  id: string | number;
  title: string;
  location: string;
  ImageIframeLink: string;
}

interface HowToReachDataType {
  titleImageLogo: StaticImageData;
  mapsDetails: Station[];
}

const HowToReach: React.FC<{ data: HowToReachDataType }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className=" px-4">
        {/* Header */}
        <div className="text-left mb-12">
          <div className="mb-6 flex justify-left">
            <div className=" w-40 md:w-80 mx-auto">
              <Image
                src={data.titleImageLogo}
                alt="How to Reach Logo"
                className="object-contain"
              />
            </div>
          </div>
        </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.mapsDetails.map((station) => (
            <div
              key={station.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 text-center"
            >
              <div className="p-6">
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  <iframe
                    src={station.ImageIframeLink}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing route to ${station.title}`}
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold text-[#1D3A69] mt-4">
                  {station.title}
                </h3>
                <p className="text-[#E51D25] font-medium mt-4">
                  {station.location}
                </p>
              </div>
            </div>
          ))}
        </div>

 
      </div>
    </div>
  );
};

export default HowToReach;
