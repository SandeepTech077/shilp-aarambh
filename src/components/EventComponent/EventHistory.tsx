'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageCarousel {
  sliderImage: StaticImageData;
  alt: string;
}

interface MainSection {
  titleImage?: StaticImageData;
  titleText: string;
  inception: string[];
}

interface SeasonDetail {
  title: string;
  description: string[];
  imagesCarousel: ImageCarousel[];
}

interface EventHistoryData {
  EventHistoryPageData: {
    mainSection: MainSection;
    seasonDetail: SeasonDetail;
  };
}

interface EventHistoryProps {
  data: EventHistoryData;
}

const EventHistory: React.FC<EventHistoryProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { mainSection, seasonDetail } = data?.EventHistoryPageData;
  const images = seasonDetail.imagesCarousel;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white px-6 lg:px-16 text-[#1D3A69] py-16 ">
      {/* Header */}
      <div className="">
        <div className=" items-center justify-center mb-8">
          {mainSection.titleImage && (
            <Image
              src={mainSection.titleImage}
              alt="Event Logo"
              className="h-12 w-auto mr-4"
            />
          )}
          <div>
           
            <h2 className="text-[26px] lg:text-[40px] font-bold mt-2">
              {mainSection.titleText}
            </h2>
          </div>
        </div>
      </div>

      {/* Inception */}
      <div className=" mx-auto py-6">
        <h4 className='text-red-500 mb-4'>Inception :</h4>
        {mainSection.inception.map((text, index) => (
          <p key={index} className=" text-[14px] lg:text-[16px] mb-6">
            {text}
          </p>
        ))}

        {/* Season Details */}
        <h3 className="text-[26px] lg:text-[40px] font-bold py-2">
          {seasonDetail.title}
        </h3>
        {seasonDetail.description.map((desc, idx) => (
          <p key={idx} className=" text-[14px] lg:text-[16px] mb-6">
            {desc}
          </p>
        ))}

        {/* Carousel */}
        {images.length > 0 && (
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <Image
                      src={img.sliderImage}
                      alt={img.alt}
                    
                      className="w-full h-[90dvh] object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

        

            </div>

            {/* Thumbnails */}
            <div className="flex justify-center mt-6 gap-2 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-20 h-16 border-2 rounded-lg overflow-hidden transition-all ${
                    currentSlide === idx
                      ? 'border-blue-500 opacity-100'
                      : 'border-gray-300 opacity-60 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={img.sliderImage}
                    alt={img.alt}
                    width={80}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHistory;
