import { homeData } from "@/data/HomeData/homeData";
import { Banner } from "@/components/Home/Banner";
import RegisterNow from "@/components/Home/RegisterNow";
import YoutubeSection from "@/components/Home/YoutubeSection";
import RaceCategory from "@/components/Home/RaceCategory";
import VijaySection from "@/components/Home/VijaySection";
import VijayDiwasSection from "@/components/Home/VijayDiwasSection";
import RunnerInfo from "@/components/Home/RunnerInfo";
import SponsorsSection from "@/components/Home/SponsorsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Banner data={homeData} />
      <div className="px-4 lg:px-8">
        <RegisterNow data={homeData.resgisterSection} />
        <YoutubeSection data={homeData.youtubeSection} />
      </div>
      <RaceCategory data={homeData.raceCategary} />
      <div className="px-4 lg:px-8">
        <VijaySection data={homeData.vijaySection} />
        <VijayDiwasSection data={homeData.vijayDiwasSection} />
        <RunnerInfo
          leftSection={homeData.runnerInfo.leftSection}
          rightSection={homeData.runnerInfo.rightSection}
        />
        <SponsorsSection data={homeData.sponsourSection} />
      </div>
    </div>
  );
}