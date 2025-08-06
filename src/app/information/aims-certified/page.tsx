import Image from "next/image";
import React from "react";
import { AIIMSData } from "@/data/RaceDayInformation/RaceDayInformation";

export default function AimsCertified() {
  return (
    <div className=" mx-auto px-4 lg:px-16 py-10 text-center text-[#1D3A69]">
      <div className="mb-6">
        <Image
          src={AIIMSData.titleImageLogo}
          alt="AIMS Certified Logo"
          className="mx-auto"
        />
      </div>

      <p className="text-base  mb-10">
        {AIIMSData.describation}
      </p>

      <div className="mb-10">
        <Image
          src={AIIMSData.banner2}
          alt="Half Marathon Certificate"
          className="mx-auto w-full max-w-5xl"
        />
      </div>

      <div>
        <Image
          src={AIIMSData.banner1}
          alt="10K Certificate"
          className="mx-auto w-full max-w-5xl"
        />
      </div>
    </div>
  );
}
