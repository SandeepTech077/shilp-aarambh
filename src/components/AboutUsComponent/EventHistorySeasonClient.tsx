// Create this as EventHistorySeasonClient.tsx in the same directory
"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ZoomModalProps {
  src: StaticImageData | string;
  alt?: string;
  onClose: () => void;
}

const ZoomModal: React.FC<ZoomModalProps> = ({ src, alt = "", onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 text-2xl font-bold cursor-pointer"
        >
          ×
        </button>
        <Image
          src={src}
          alt={alt}
          className="max-w-[100vw] max-h-[100vh] object-contain"
        />
      </div>
    </div>
  );
};

// Define the season data type based on your data structure
interface SeasonData {
  id: number;
  title: string;
  youtubeLink?: string;
  rightSideDescribation: string[];
  belowDescribation: string[];
  images: {
    sliderImage: StaticImageData;
    alt: string;
  }[];
}

interface EventHistorySeasonClientProps {
  seasonData: SeasonData;
}

export default function EventHistorySeasonClient({ seasonData }: EventHistorySeasonClientProps) {
  const [zoomedImg, setZoomedImg] = useState<StaticImageData | null>(null);

  return (
    <div className=" mx-auto px-4 py-10 text-[#1D3A69] px-6 lg:px-16">
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* YouTube Video */}
        <div className="w-full aspect-video bg-gray-200">
          {seasonData.youtubeLink ? (
            <iframe
              className="w-full h-full"
              src={seasonData.youtubeLink.replace("watch?v=", "embed/")}
              title="Season Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500 text-center p-4">
              <p>No video available for this season.</p>
            </div>
          )}
        </div>
        {/* Title & Description */}
        <div className="flex flex-col">
          <h2 className="text-[34px] lg:text-[64px] font-bold">
            {seasonData.title}
          </h2>
          <div className="space-y-4  text-[14px] lg:text-[18px] linear-[100px]">
            {seasonData.rightSideDescribation.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
      {/* Below Description */}
      <div className="space-y-6 text-[14px] lg:text-[18px] mb-12">
        {seasonData.belowDescribation.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      {/* Images Section */}
      {/* Mobile Carousel */}
      <div className="md:hidden flex space-x-4 overflow-x-auto pb-4">
        {seasonData.images.map((img, idx) => (
          <div key={idx} className="min-w-[80%] flex-shrink-0">
            <Image
              src={img.sliderImage}
              alt={img.alt}
              onClick={() => setZoomedImg(img.sliderImage)}
              className="rounded w-full h-60 object-cover cursor-zoom-in"
            />
          </div>
        ))}
      </div>
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {seasonData.images.map((img, idx) => (
          <div key={idx}>
            <Image
              src={img.sliderImage}
              alt={img.alt}
              onClick={() => setZoomedImg(img.sliderImage)}
              className="rounded w-full h-60 object-cover cursor-zoom-in"
            />
          </div>
        ))}
      </div>
      {/* Zoom Modal */}
      {zoomedImg && (
        <ZoomModal src={zoomedImg} onClose={() => setZoomedImg(null)} />
      )}
    </div>
  );
}