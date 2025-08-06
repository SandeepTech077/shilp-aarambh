import { HalfMerathonData } from "@/data/RaceCategoriesData/HalfMerathonData"
import BannerMerathon from "@/components/CategoriesMarathonCompoenet/BannerMerathon"
import ToggleSection from "@/components/CategoriesMarathonCompoenet/ToggleSection"

export default function HalfMarathon(){
    return (
        <div>
            <BannerMerathon data={HalfMerathonData.banner}/>
            <ToggleSection 
                toggles={HalfMerathonData.toggles} 
                togglesDetails={HalfMerathonData.togglesDetails} 
            />
        </div>
    )
}