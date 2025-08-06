import { aboutUsData } from "@/data/AboutUsData/aboutUsData"
import GiftCityContent from "@/components/AboutUsComponent/GiftCityContent"

export default function GiftCity() {
  const { giftCityPageData } = aboutUsData;

  return (
    <div className="min-h-screen bg-gray-50">
      <GiftCityContent data={giftCityPageData} />
    </div>
  );
}