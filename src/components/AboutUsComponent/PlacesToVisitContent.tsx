import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Types
interface VisitingPlace {
  id: number;
  title: string;
  alt: string;
  image: StaticImageData;
}

interface PlaceToVisitData {
  logo: StaticImageData;
  visitingPlace: VisitingPlace[];
}

interface PlacesToVisitContentProps {
  data: PlaceToVisitData;
}


const PlacesToVisitContent: React.FC<PlacesToVisitContentProps> = ({ data }) => {
  const { logo, visitingPlace } = data;

  return (
    <main className=" mx-auto px-6 lg:px-16 py-10 bg-gray-50">
      {/* Header Section */}
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative w-82 h-12">
            <Image 
              src={logo} 
              alt="Places to Visit Logo" 
              
              className="object-contain"
              
            />
          </div>
      
        </div>
      </header>

      {/* Places Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
        {visitingPlace.map((place) => (
          <div 
            key={place.id} 
            className="group bg-white rounded-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 md:h-72 lg:h-100 overflow-hidden">
              <Image
                src={place.image}
                alt={place.alt}
                
                className="object-contain group-hover:scale-110 transition-transform duration-500 w-full"
               
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Title Section */}
            <div className="p-6 bg-white">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center tracking-wide">
                {place.title}
              </h3>
              
              {/* Decorative line */}
              <div className="mt-3 flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
};


export default PlacesToVisitContent