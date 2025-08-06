
import Image, { StaticImageData } from "next/image";

// Types for the components
interface Ambassador {
  id: number;
  name: string;
  image: StaticImageData;
  descripation: string;
}

const AmbassadorCard: React.FC<{ ambassador: Ambassador }> = ({ ambassador }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-100 w-full relative">
        <Image
          src={ambassador.image}
          alt={ambassador.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-30 left-10 right-0 p-4 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {ambassador.name}
          </h3>
          <p className="text-sm md:text-base opacity-90 leading-tight">
            {ambassador.descripation}
          </p>
        </div>
      </div>
    </div>
  );
};


export default AmbassadorCard