'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";

interface RaceCategoryProfile {
  id: number;
  profileImage: StaticImageData;
  raceDistance: string;
  raceName: string;
  buttontext: string;
  buttonIcon: StaticImageData;
}

interface RaceCategoryData {
  icon: StaticImageData;
  backGroundImage: StaticImageData;
  title: string;
  profiles: RaceCategoryProfile[];
}

interface RaceCategoryProps {
  data: RaceCategoryData;
}

const RaceCategory: React.FC<RaceCategoryProps> = ({ data }) => {
  return (
    <div className="relative min-h-screen w-full bg-gray-100">
      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row w-full min-h-screen py-8 lg:py-20">
        
        {/* Left Section - Icon */}
        <div className="lg:w-2/5 w-full p-6 flex items-center justify-center lg:justify-start relative z-20">
          <div className="w-40 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-48 xl:w-56 xl:h-56 relative">
            <Image 
              src={data.icon} 
              alt="Race Icon" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Section with Background Image */}
        <div className="lg:w-3/5 w-full relative h-[100dvh] lg:h-[100vh] z-10">
          <div className="relative w-full h-full">
            <Image
              src={data.backGroundImage}
              alt="Race Background"
              fill
              className="object-cover rounded-lg"
              priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent rounded-lg" />

            {/* Text on Background */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 lg:right-10 z-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 drop-shadow-lg">
                RACE
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                CATEGORY
              </h2>
            </div>
          </div>
        </div>

        {/* Overlay Cards - Horizontal scroll on mobile, grid on sm+ */}
        <div className="absolute inset-x-0 bottom-6 lg:left-[25%] lg:top-[60%] lg:-translate-y-1/2 z-30 px-4 lg:px-0">
          {/* Mobile: horizontal scroll */}
          <div className="flex sm:hidden gap-4 overflow-x-auto pb-2 -mx-4 px-4">
            {data.profiles.map((profile: RaceCategoryProfile) => (
              <div
                key={profile.id}
                className="min-w-[250px] bg-red-600 bg-opacity-95 backdrop-blur-sm p-4 rounded-lg text-white shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-opacity-100 cursor-pointer flex-shrink-0"
              >
                {/* Profile Image */}
                <div className="relative w-full h-28 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.raceName} profile`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-lg font-bold tracking-wide">
                    {profile.raceDistance}
                  </div>
                  <div className="text-sm opacity-90 leading-tight">
                    {profile.raceName}
                  </div>

                  {/* Button */}
                  <div className="mt-4 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-yellow-300 transition-colors">
                      <span>{profile.buttontext}</span>
                      <div className="w-5 h-5 ml-2 relative transform transition-transform hover:translate-x-1">
                        <Image
                          src={profile.buttonIcon}
                          alt="Arrow icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and up: grid */}
          <div className="hidden sm:grid grid-cols-2 xl:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {data.profiles.map((profile: RaceCategoryProfile) => (
              <div
                key={profile.id}
                className="bg-red-600 bg-opacity-95 backdrop-blur-sm p-6 rounded-lg text-white shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-opacity-100 cursor-pointer"
              >
                {/* Profile Image */}
                <div className="relative w-full h-36 lg:h-60 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.raceName} profile`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-xl lg:text-2xl font-bold tracking-wide">
                    {profile.raceDistance}
                  </div>
                  <div className="text-base lg:text-lg opacity-90 leading-tight">
                    {profile.raceName}
                  </div>

                  {/* Button */}
                  <div className="mt-4 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between text-base font-semibold cursor-pointer hover:text-yellow-300 transition-colors">
                      <span>{profile.buttontext}</span>
                      <div className="w-5 h-5 ml-2 relative transform transition-transform hover:translate-x-1">
                        <Image
                          src={profile.buttonIcon}
                          alt="Arrow icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceCategory;
