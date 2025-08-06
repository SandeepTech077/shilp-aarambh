"use client";

import EventHistory from "@/components/EventComponent/EventHistory";
import { aboutUsData } from "@/data/AboutUsData/aboutUsData";

export default function EventHistorySeasonPage() {
  return (
    <div className="">
      <EventHistory data={aboutUsData} />
    </div>
  );
}
