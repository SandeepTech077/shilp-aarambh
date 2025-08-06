import { NearByHotel } from "@/data/RaceDayInformation/RaceDayInformation";
import NearByHotelComponent from "@/components/InformationRaceDayComponent/NearByHotel";

export default function NearByHotelPage() {
  return (
    <div>
      <NearByHotelComponent data={NearByHotel} />
    </div>
  );
}