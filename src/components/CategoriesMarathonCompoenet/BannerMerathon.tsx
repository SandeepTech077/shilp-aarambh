import Image, { StaticImageData } from "next/image";
import React from "react";

interface BannerProps {
  data: {
    banner: StaticImageData;
    mobileBanner: StaticImageData;
    title: string;
  };
}

export default function BannerMerathon({ data }: BannerProps) {
  const { banner, mobileBanner, title } = data;

  return (
    <div className="relative w-full text-white px-4 lg:px-16 py-10 ">
      {/* Desktop Banner */}
      <div className="hidden sm:block w-full h-[300px] relative">
        <Image
          src={banner}
          alt={`${title} Banner`}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="outlined-text text-5xl font-extrabold uppercase">
            {title}
          </h1>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="block sm:hidden w-full h-[200px] relative">
        <Image
          src={mobileBanner}
          alt={`${title} Mobile Banner`}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className=" text-3xl font-bold uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
