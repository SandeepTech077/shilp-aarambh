import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageData {
  image: StaticImageData;
  alt: string;
}

interface GiftCityPageData {
  titleLogo: string;
  title: string;
  describation: string[];
  images: ImageData[];
}

interface GiftCityContentProps {
  data: GiftCityPageData;
}

const GiftCityContent: React.FC<GiftCityContentProps> = ({ data }) => {
  const { titleLogo, title, describation, images } = data;

  return (
    <main className=" mx-auto px-4 sm:px-6 py-10 bg-white px-4 lg:px-16 text-[#1D3A69]">
      
      {/* Logo at Top Center */}
      <div className="flex ">
        <div className="relative w-20 h-auto lg:w-72 sm:h-24">
          <Image
            src={titleLogo}
            alt="GIFT City Logo"
            className="object-contain"
          />
        </div>
      </div>

      {/* Title Centered Below Logo */}
      <h1 className="text-left text-[26px] lg:text-[40px] font-bold  mb-4">
        {title}
      </h1>

      {/* Description Paragraphs */}
      <section className="space-y-4 text-[14px] lg:text-[16px] leading-relaxed  mx-auto mb-10">
        {describation.map((paragraph, index) => (
          <p
            key={`description-${index}`}
            className="text-sm sm:text-base lg:text-lg text-justify"
          >
            {paragraph}
          </p>
        ))}
      </section>

      {/* Map/Grid-like Image Layout */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.map((imageData, index) => (
          <div
            key={`gallery-image-${index}`}
            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-56 sm:h-64 lg:h-100"
          >
            <Image
              src={imageData.image}
              alt={imageData.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
        ))}
      </section>

    </main>
  );
};

export default GiftCityContent;
