import React from "react";
import Image, { StaticImageData } from "next/image";

interface VijaySectionProps {
  data: {
    iconTitle: StaticImageData;
    description: string;
    btnTitle: string;
    VijayLogo: StaticImageData;
  };
}

const VijaySection: React.FC<VijaySectionProps> = ({ data }) => {
  const { iconTitle, description, btnTitle, VijayLogo } = data;

  return (
    <div className="w-full py-12 px-4  text-[#1D3A69]">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-10">

        <div className="w-full md:w-2/3 flex flex-col items-start gap-6 order-2 md:order-none">
          <Image src={iconTitle} alt="Icon Title" className="object-contain" />
                <div className="w-full h-full block md:hidden ">
            <Image
              src={VijayLogo}
              alt="Vijay Logo"
              className="object-contain  mx-auto"
            />
          </div>

          <p className=" text-base md:text-lg">{description}</p>
          <button className="bg-[#1D3A69] text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-300">
            {btnTitle}
          </button>
        </div>
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-none">
          <div className="w-64 h-64 hidden md:block ">
            <Image
              src={VijayLogo}
              alt="Vijay Logo"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VijaySection;
