
import PlacesToVisitContent from "@/components/AboutUsComponent/PlacesToVisitContent";
import { aboutUsData } from "@/data/AboutUsData/aboutUsData"

export default function PlacesToVisit() {
  const { placeToVisit } = aboutUsData;

  return (
    <div className="min-h-screen bg-gray-50">
      <PlacesToVisitContent data={placeToVisit} />
    </div>
  );
}