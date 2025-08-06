import { notFound } from "next/navigation";
import { aboutUsData } from "@/data/AboutUsData/aboutUsData";
import EventHistorySeasonClient from "@/components/AboutUsComponent/EventHistorySeasonClient";

interface Props {
  params: Promise<{ id: string }>;
}

// This function generates static params for all seasons
export async function generateStaticParams() {
  console.log("generateStaticParams called");
  console.log("Seasons available:", aboutUsData.seasons.length);

  return aboutUsData.seasons.map((season) => {
    console.log(`Generating param for season ${season.id}`);
    return {
      id: String(season.id),
    };
  });
}

const EventHistorySeasonPage = async ({ params }: Props) => {
  const { id: idParam } = await params;
  const seasonId = parseInt(idParam);
  const seasonData = aboutUsData.seasons.find(
    (season) => season.id === seasonId
  );

  if (!seasonData) return notFound();

  return <EventHistorySeasonClient seasonData={seasonData} />;
};

export default EventHistorySeasonPage;
