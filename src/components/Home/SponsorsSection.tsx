import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Logo {
  id: number;
  logo: StaticImageData;
}

interface TopSection {
  leftArrowSvg: StaticImageData;
  MiddleTitle: StaticImageData;
  RihjtArrowSvq: StaticImageData;
}

interface SponsorsSectionData {
  topSection: TopSection;
  BelowLogos: Logo[];
}

interface SponsorsSectionProps {
  data: SponsorsSectionData;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ data }) => {
  const { topSection, BelowLogos } = data;

  return (
    <section className="py-12 sm:py-16">
      {/* Header Section */}
      <div className="flex w-full flex-row items-center justify-between gap-6 sm:gap-12 mb-12  mx-auto">
        {/* Left Arrow */}
        <div className="flex-shrink-0 w-20 h-20 lg:w-42 lg:h-42 ">
          <Image
            src={topSection.leftArrowSvg}
            alt="Left Arrow"
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Title */}
        <div className="flex-shrink max-w-xs sm:max-w-md">
          <Image
            src={topSection.MiddleTitle}
            alt="Sponsors & Partners"
            width={600}
            height={80}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right Arrow */}
        <div className="flex-shrink-0 w-20 h-20 lg:w-42 lg:h-42">
          <Image
            src={topSection.RihjtArrowSvq}
            alt="Right Arrow"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className=" mx-auto border-t border-gray-300 mb-16"></div>

      {/* Sponsors Grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16">
        {/* Initiated By */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Initiated By</h3>
          {BelowLogos[0] && (
            <div className="mx-auto w-48 sm:w-60 md:w-72">
              <Image
                src={BelowLogos[0].logo}
                alt="Sneh Foundation"
                width={300}
                height={120}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          )}
        </div>

        {/* Managed By */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">Managed By</h3>
          {BelowLogos[1] && (
            <div className="mx-auto w-48 sm:w-60 md:w-72">
              <Image
                src={BelowLogos[1].logo}
                alt="PEFI"
                width={300}
                height={120}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Certifications / Bottom Row */}
      <div className="max-w-5xl mx-auto mt-16 flex justify-center">
        {BelowLogos[2] && (
          <div className="w-100 lg:w-[80%]">
            <Image
              src={BelowLogos[2].logo}
              alt="AIMS Certified"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;
