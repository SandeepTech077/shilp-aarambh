import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface PacerWinner {
  id: number;
  name: string;
  title: string;
  image: StaticImageData;
}

interface PacerCategory {
  title: string;
  winners: PacerWinner[];
}

interface PacersData {
  titleLogoImage: StaticImageData;
  subTitle: string;
  describation: string;
  vijayDiwas: PacerCategory;
  halfMarathon: PacerCategory;
}

interface PacersComponentProps {
  data: PacersData;
}

const PacersComponent: React.FC<PacersComponentProps> = ({ data }) => {
  return (
    <div className="overflow-hidden text-[#1D3A69]">
      {/* Header Section */}
      <div className="p-8 text-left">
        <div className="mb-4">
          <Image
            src={data.titleLogoImage}
            alt="Pacers Logo"
            width={400}
            height={80}
          />
        </div>

        <p className="text-[30px] lg:text-[40px] font-bold mb-4">{data.subTitle}</p>
        <p className="text-[14px] lg:text-[16px] leading-relaxed opacity-90">
          {data.describation}
        </p>
      </div>

      {/* Category Sections */}
      <div className="p-8">
        {[data.vijayDiwas, data.halfMarathon].map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-[30px] lg:text-[40px] font-bold text-left mb-8">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.winners.map((pacer) => (
                <div
                  key={pacer.id}
                  className="p-[2px] rounded-lg border border-[#D2D2D2] "
                >
                  <div className="bg-white overflow-hidden p-5 h-full flex flex-col">
                    <div className="aspect-square relative mb-4">
                      <Image
                        src={pacer.image}
                        alt={pacer.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="text-center mt-auto">
                      <h3 className="font-bold text-[16px] lg:text-[20px]  mb-2">
                        {pacer.name}
                      </h3>
                      <p className="text-[#E51D25] font-medium text-[14px] lg:text-[16px]">
                        {pacer.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PacersComponent;
