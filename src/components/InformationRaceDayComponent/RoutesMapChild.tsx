'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// TypeScript interfaces
interface Route {
  category: string;
  flagOffTime: string;
  cutOffTime: string;
}

interface RouteLink {
  label: string;
  url: string;
}

interface RoutesMapDataType {
  titleLogoImage: string; // Should be a path or StaticImageData if imported
  routes: Route[];
  links: RouteLink[];
}

interface RoutesMapChildProps {
  data: RoutesMapDataType;
}

// Component
const RoutesMapChild: React.FC<RoutesMapChildProps> = ({ data }) => {
  return (
    <div className=" mx-auto p-6 text-[#1D3A69] px-4 lg:px-16">
      {/* Header with Logo */}
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-red-600 uppercase tracking-wider border-r border-b border-gray-200">
                  Race Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-red-600 uppercase tracking-wider border-r border-b border-gray-200">
                  Flag-Off Time
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-red-600 border-b border-gray-200 uppercase tracking-wider">
                  Cut-Off Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.routes.map((route, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm  border-r border-gray-200">
                    {route.category}
                  </td>
                  <td className="px-6 py-4 text-sm  border-r border-gray-200">
                    {route.flagOffTime}
                  </td>
                  <td className="px-6 py-4 text-sm ">
                    {route.cutOffTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Route Map Links */}
      <div className="space-y-4">
        {data.links.map((link, index) => {

          return (
            <div key={index} className="bg-[#FFEBEB] border border-pink-200 rounded-lg p-4">
              <div className="flex items-center">
                <span className="text-[16px] lg:text-[20px]  font-bold ">{link.label}</span>
              
                  <Link href={link.url}>
                    <span className="text-red-600 hover:text-red-800 text-sm font-medium underline cursor-pointer ms-6">
                      Click Here.
                    </span>
                  </Link>
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoutesMapChild;
