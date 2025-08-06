import React from 'react';
import Image from 'next/image';

interface ShilpAarambhProps {
  data: {
    logo: string;
    describation: string[];
  };
}

const ShilpAarambhComponent: React.FC<ShilpAarambhProps> = ({ data }) => {
  return (
    <div className=" mx-auto px-4 lg:px-16 py-8 text-[#1D3A69]">


      {/* Content Section */}
      <div className="bg-white rounded-lg p-6 md:p-8">
        {/* Logo Section */}
        {data.logo && (
          <div className="flex justify-center mb-6">
            <div className="w-100 h-20 relative">
              <Image
                src={data.logo}
                alt="Shilp Aarambh Logo"
                
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Description Content */}
        <div className="space-y-4  leading-relaxed">
          {data.describation.map((paragraph, index) => (
            <p key={index} className="text-[14px] md:text-[16px] text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default ShilpAarambhComponent;