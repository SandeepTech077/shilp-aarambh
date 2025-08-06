import { PrizeMoney as PrizeMoneyData } from "@/data/RaceDayInformation/RaceDayInformation";
import PrizeMoneyMarathonTables from "@/components/InformationRaceDayComponent/PrizeMoneyMarathonTables";
import PrizeMoneyDetails from "@/components/InformationRaceDayComponent/PrizeMoneyDetails";

export default function PrizeMoneyPage() {
  // Use the correct property name from your data (merathonsTable)
  const marathonData = PrizeMoneyData.merathonsTable;
  

  
  return (
    <div className="mx-auto py-10">
      <PrizeMoneyMarathonTables
        data={marathonData}
        titleLogoSvg={PrizeMoneyData.titleLogoSvg}
        subTitle={PrizeMoneyData.subTitle}
      />

      <PrizeMoneyDetails
        prizeMoneyRules={PrizeMoneyData.prizeMoneyRules}
        protestAndAppeals={PrizeMoneyData.protestAndAppeals}
      />
    </div>
  );
}