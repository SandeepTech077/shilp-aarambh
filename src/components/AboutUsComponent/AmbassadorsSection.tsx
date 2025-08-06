import AmbassadorCard from "@/components/AboutUsComponent/AmbassadorCard"
import { StaticImageData } from "next/image";


interface Ambassador {
  id: number;
  name: string;
  image: StaticImageData;
  descripation: string;
}
interface AmbassadorDetail {
  title: string;
  ambassadors: Ambassador[];
}

interface AmbassadorSectionProps {
  ambassadorDetail: AmbassadorDetail;
}

const AmbassadorsSection: React.FC<AmbassadorSectionProps> = ({ ambassadorDetail }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      {/* Section Title */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
          {ambassadorDetail.title}
        </h2>
      </div>
      
      {/* Ambassadors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {ambassadorDetail.ambassadors.map((ambassador) => (
          <AmbassadorCard key={ambassador.id} ambassador={ambassador} />
        ))}
      </div>
    </div>
  );
};

export default AmbassadorsSection;