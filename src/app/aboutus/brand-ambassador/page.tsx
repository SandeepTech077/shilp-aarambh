import BrandAmbassadorBanner from "@/components/AboutUsComponent/BrandAmbassadorBanner";
import { aboutUsData } from "@/data/AboutUsData/aboutUsData";
import AmbassadorsSection from "@/components/AboutUsComponent/AmbassadorsSection"
export default function BrandAssbassadorPage() {
    const data =  aboutUsData.brandAmbassadorSection
  return (
    <>
      <BrandAmbassadorBanner
        banner={data.Banner}
        mobileBanner={data.mobileBanner}
        title={data.title}
      />
      <AmbassadorsSection
        ambassadorDetail={data.ambassadorDeatil}
      />

    </>
  );
}
