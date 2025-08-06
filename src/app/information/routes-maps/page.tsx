import { RoutesMapData } from "@/data/RaceDayInformation/RaceDayInformation"
import RoutesMapChild from "@/components/InformationRaceDayComponent/RoutesMapChild"

export default function RoutesMap() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <RoutesMapChild data={RoutesMapData} />
    </div>
  );
}