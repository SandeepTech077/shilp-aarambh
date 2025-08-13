'use client';

import React, { useState } from 'react';
import Image from 'next/image';


interface Route {
  category: string;
  flagOffTime: string;
  cutOffTime: string;
}

interface RouteLink {
  label: string;
  image: string; // Instead of URL, we use image path
}

interface RoutesMapDataType {
  titleLogoImage: string;
  routes: Route[];
  links: RouteLink[];
}

interface RoutesMapChildProps {
  data: RoutesMapDataType;
}

const RoutesMapChild: React.FC<RoutesMapChildProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (imgPath: string) => {
    setActiveImage(imgPath);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="mx-auto p-6 text-[#1D3A69] px-4 lg:px-16">
      {/* Header */}
      <div className="flex items-center justify-left mb-8">
        <div className="relative h-16 w-auto">
          <Image
            src={data.titleLogoImage}
            alt="Route Maps"
            height={64}
            width={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* Routes Table */}
      <div className="mb-8 max-w-2xl">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 border-r border-b text-left text-sm font-semibold text-red-600 uppercase tracking-wider">Race Category</th>
                <th className="px-6 py-4 border-r border-b text-left text-sm font-semibold text-red-600 uppercase tracking-wider">Flag-Off Time</th>
                <th className="px-6 py-4 border-b text-left text-sm font-semibold text-red-600 uppercase tracking-wider">Cut-Off Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.routes.map((route, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm border-r">{route.category}</td>
                  <td className="px-6 py-4 text-sm border-r">{route.flagOffTime}</td>
                  <td className="px-6 py-4 text-sm">{route.cutOffTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Links with Modal */}
      <div className="space-y-4">
        {data.links.map((link, index) => (
          <div key={index} className="bg-[#FFEBEB] border border-pink-200 rounded-lg p-4">
            <div className="flex items-center">
              <span className="text-[16px] lg:text-[20px] font-bold">{link.label}</span>
              <button
                onClick={() => openModal(link.image)}
                className="text-red-600 hover:text-red-800 text-sm font-medium underline cursor-pointer ms-6"
              >
                Click Here.
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg p-4  w-full h-full flex justify-center items-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            {activeImage && (
              <Image
                src={activeImage}
                alt="Route Map"
                width={800}
                height={600}
                className="rounded max-w-full h-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutesMapChild;
