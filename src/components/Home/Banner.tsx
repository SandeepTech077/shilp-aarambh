"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CountdownTimer } from "../common/CountdownTimer";
import { EventDetails } from "../common/EventDetails";

interface BannerSectionData {
  Banner: StaticImageData;
  MobileBanner?: StaticImageData;
  EventDate: string;
  EventTime: string;
  EventLocation: string;
}

interface HomeDataProps {
  data: {
    BannerSection: BannerSectionData;
  };
}

export const Banner: React.FC<HomeDataProps> = ({ data }) => {
  const { BannerSection } = data;
  const targetDate = new Date(`${BannerSection.EventDate} ${BannerSection.EventTime}`).getTime();

  return (
    <div className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block relative h-screen">
        <Image
          src={BannerSection.Banner}
          alt="Event Banner"
          fill
          priority
          sizes="100vh"
          className="object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden relative h-[400px]">
        <Image
          src={BannerSection.MobileBanner || BannerSection.Banner}
          alt="Event Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Countdown and Event Info */}
      <div className="absolute flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 md:gap-x-10 -bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 p-4 md:p-6 text-white w-[90%] md:w-[70%] rounded-lg shadow-lg">
        <CountdownTimer targetDate={targetDate} />
        <EventDetails
          date={BannerSection.EventDate}
          location={BannerSection.EventLocation}
        />
      </div>
    </div>
  );
};
