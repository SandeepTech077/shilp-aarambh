import { VijayDiwasData } from "@/data/RaceCategoriesData/HalfMerathonData"
import BannerMerathon from "@/components/CategoriesMarathonCompoenet/BannerMerathon"
import ToggleSection from "@/components/CategoriesMarathonCompoenet/ToggleSection"

export default function VijayDiwas(){
    return (
        <div>
            <BannerMerathon data={VijayDiwasData.banner}/>
            <ToggleSection 
                toggles={VijayDiwasData.toggles} 
                togglesDetails={VijayDiwasData.togglesDetails} 
            />
        </div>
    )
}