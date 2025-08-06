import {FunRunData  } from "@/data/RaceCategoriesData/HalfMerathonData"
import BannerMerathon from "@/components/CategoriesMarathonCompoenet/BannerMerathon"
import ToggleSectionSecond from "@/components/CategoriesMarathonCompoenet/ToggleSectionSecond"

export default function FunRun(){
    return (
        <div>
            <BannerMerathon data={FunRunData.banner}/>
            <ToggleSectionSecond 
                toggles={FunRunData.toggles} 
                togglesDetails={FunRunData.togglesDetails} 
            />
        </div>
    )
}