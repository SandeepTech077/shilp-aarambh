import Image from "next/image";
import React from "react";
import { MediaData } from "@/data/common/Common";

export default function Result() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      {/* Title Logo */}
      <div className="mb-10">
        <Image
          src={MediaData.titleLogoImage}
          alt="Result Title Logo"
          className="mx-auto"
        />
      </div>

      {/* Grid for Winners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {MediaData.winnersOfSeason.map((season, index) => (
          <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-md">
            {/* Image */}
            <Image
              src={season.image}
              alt={season.title}
              className="w-full h-auto object-cover"
            />

            {/* Bottom-Center Overlay */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full py-4 text-white">
              <h3 className="text-[30px] lg:text-[40px] font-semibold">{season.title}</h3>
              <p className="text-[20px] lg:text-[26px]">{season.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
