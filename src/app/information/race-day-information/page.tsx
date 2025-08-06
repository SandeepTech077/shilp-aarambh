import { RaceDayInformation  } from "@/data/RaceDayInformation/RaceDayInformation";
import RaceCategorySection from "@/components/InformationRaceDayComponent/RaceCategorySection";
import FacilitySection from "@/components/InformationRaceDayComponent/FacilitySection";
import VenueSection from "@/components/InformationRaceDayComponent/VenueSection";

export default function RaceDayInformationPage() {
  return (
    <div className=" mx-auto px-4 lg:px-16 py-8 space-y-10">
      <RaceCategorySection
        title={RaceDayInformation.titleLogo}
        raceCategories={RaceDayInformation.raceCategories}
        note={RaceDayInformation.note}
      />
      <FacilitySection
        facilities={RaceDayInformation.facilities}
        importantNotes={RaceDayInformation.importantNotes}
      />
      <VenueSection venue={RaceDayInformation.raceVenue} parkingVenue={RaceDayInformation.raceParking}/>
    </div>
  );
}
