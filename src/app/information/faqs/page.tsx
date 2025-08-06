import { FaqsData } from "@/data/RaceDayInformation/RaceDayInformation";
import FaqAccordion from "@/components/InformationRaceDayComponent/FaqAccordion"; // Adjust path as needed

export default function Faqs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <FaqAccordion faqsData={FaqsData} />
        </div>
    );
}