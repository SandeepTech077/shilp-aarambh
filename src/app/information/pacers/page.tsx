import { pacers } from "@/data/RaceDayInformation/RaceDayInformation";
import PacersComponent from "@/components/InformationRaceDayComponent/PacersComponent";

export default function PacersPage() {
  return (
    <div className="min-h-screen px-4 lg:px-16  py-8">
    
        <PacersComponent data={pacers} />
      
    </div>
  );
}