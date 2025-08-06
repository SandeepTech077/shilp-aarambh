import React from "react";
import Image, { StaticImageData } from "next/image";

interface RaceDirectorProps {
  data: {
    topLogo: StaticImageData;
    title: string;
    Banner: StaticImageData;
    descripation: string[];
  };
}

export default function RaceDirectorComponent({ data }: RaceDirectorProps) {
  return (
    <div className=" mx-auto px-4 py-8 text-[#1D3A69] ">
      {/* Header Section */}
      <div className="text-center mb-8">
        {/* Logo Section */}
        {data.topLogo && (
          <div className="flex justify-center mb-6">
            <div className="w-100 h-14     relative">
              <Image
                src={data.topLogo}
                alt="Race Director Logo"
                className="object-contain"
              />
            </div>
          </div>
        )}
        <h2 className="text-[26px] lg:text-[40px] font-bold">
          {data.title}
        </h2>
      </div>

      <div className="rounded-lg  overflow-hidden">
        <div className="relative">
          <div className="relative h-80 md:h-[100vh]  overflow-hidden">
            <Image
              src={data.Banner}
              alt="Race Director Banner"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="p-6 lg:p-22">
          <div className="space-y-6">
            {data.descripation.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-justify text-[14px] md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
