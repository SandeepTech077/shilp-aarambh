import Image, { StaticImageData } from "next/image";
import React from "react";

interface VijayDiwasProps {
  data: {
    leftSection: {
      imageBanner: StaticImageData;
    };
    rightSection: {
      logoTitleImage: StaticImageData;
      subTilte: string;
      describation: string[];
      btnText: string;
    };
  };
}

const VijayDiwasSection: React.FC<VijayDiwasProps> = ({ data }) => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto  lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-[#1D3A69]">
        {/* Left Image Section */}
            <Image
            src={data.rightSection.logoTitleImage}
            alt="Vijay Diwas Title"
            width={400}
            height={100}
            className=" block md:hidden"
          />
        <div className="relative w-full h-full flex justify-start">
   

          <Image
            src={data.leftSection.imageBanner}
            alt="Vijay Diwas Banner"
            width={600}
            height={600}
            className="rounded shadow-lg w-full h-auto object-cover relative z-10"
          />
        </div>

        {/* Right Content Section */}
        <div>
          <Image
            src={data.rightSection.logoTitleImage}
            alt="Vijay Diwas Title"
            width={400}
            height={100}
            className="mb-6 hidden md:block"
          />
          <h3 className="text-xl font-semibold  mb-4">
            {data.rightSection.subTilte}
          </h3>
          {data.rightSection.describation.map((para, index) => (
            <p key={index} className=" mb-4">
              {para}
            </p>
          ))}
          <button className="bg-[#1D3A69] cursor-pointer text-white font-semibold py-3 px-6 rounded mt-4">
            {data.rightSection.btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VijayDiwasSection;
