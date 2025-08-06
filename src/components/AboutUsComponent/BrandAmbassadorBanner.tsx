import Image, { StaticImageData } from "next/image";





interface BannerProps {
  banner: StaticImageData;
  mobileBanner: StaticImageData;
  title: string;
}



// Banner Child Component
const BrandAmbassadorBanner: React.FC<BannerProps> = ({ banner, mobileBanner, title }) => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-140 ">
      {/* Desktop Banner */}
      <div className="hidden md:block w-full h-full">
        <Image
          src={banner}
          alt="Brand Ambassador Banner"
          fill
          className="object-contain"
          
        />
      </div>
      
      {/* Mobile Banner */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={mobileBanner}
          alt="Brand Ambassador Mobile Banner"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Banner Content */}
      <div className="absolute inset-0   flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
        {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BrandAmbassadorBanner