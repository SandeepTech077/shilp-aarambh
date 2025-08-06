import { HowToReachData } from "@/data/RaceDayInformation/RaceDayInformation"
import HowToReach from "@/components/InformationRaceDayComponent/HowToReach" // Adjust path as needed

export default function HowToReachPage() {
  return (
    <HowToReach data={HowToReachData} />
  )
}