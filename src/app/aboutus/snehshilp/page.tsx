import { aboutUsData } from "@/data/AboutUsData/aboutUsData";
import SnehshilpFoundationDetail from "@/components/AboutUsComponent/SnehshilpFoundationDetail"


// Parent Component
export default function EventHistorySeasonPage() {
  const  snehshilpDetail  = aboutUsData.snehshilpDetail;

  return (
    <SnehshilpFoundationDetail data={snehshilpDetail} />
  );
}