import { DescriptionSection } from "@/components/VijayDiwasComponent/DescriptionSection"
import HeaderSection from "@/components/VijayDiwasComponent/HeaderSection"
import ImageGrid from "@/components/VijayDiwasComponent/ImageGrid"
import { VijayDiwasData } from "@/data/VijayDiwasPageData/VijayDIwasData"

export default function VijayDiwasPage(){
    return (
        <div className="min-h-screen py-8 px-4 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <HeaderSection 
                    logoTitle={VijayDiwasData.logoTitle}
                    title={VijayDiwasData.title}
                />
                
                <DescriptionSection 
                    describation={VijayDiwasData.describation}
                    btnText={VijayDiwasData.btnText}
                />
                
                <ImageGrid images={VijayDiwasData.Images} />
                
            </div>
        </div>
    )
}