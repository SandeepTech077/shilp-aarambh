import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Types for the component props
interface SocialMediaIcon {
  id: number;
  icon: StaticImageData;
  link: string;
}

interface VisionMission {
  title: string;
  descripation: string;
}

interface SnehshilpDetailProps {
  logo: StaticImageData;
  title: string;
  descripation: string;
  ourVision: VisionMission;
  ourMission: VisionMission;
  socialMedioIcons: SocialMediaIcon[];
  ImageLastBanner: StaticImageData;
}

// Child Component
const SnehshilpFoundationDetail: React.FC<{ data: SnehshilpDetailProps }> = ({
  data,
}) => {
  return (
    <div className=" px-4 lg:px-16 py-8 bg-white text-[#1D3A69]">
      {/* Logo and Header Section */}
      <div className=" mb-8">
        <div className="flex mb-6">
          <Image
            src={data.logo}
            alt="Snehshilp Foundation Logo"
            width={200}
            height={80}
            className="h-auto"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          {data.title}
        </h1>

        <p className="text-base lg:text-lg leading-[40px]  mx-auto mb-12">
          {data.descripation}
        </p>
      </div>

      {/* Vision and Mission Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Our Vision Card */}
        <div className=" rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold  mb-4 tracking-wide">
            {data.ourVision.title}
          </h2>
          <p className=" leading-relaxed">{data.ourVision.descripation}</p>
        </div>

        {/* Our Mission Card */}
        <div className=" rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold  mb-4 tracking-wide">
            {data.ourMission.title}
          </h2>
          <p className=" leading-relaxed">{data.ourMission.descripation}</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className=" border-gray-200 pt-8">
        <div className="flex items-center justify-start gap-6">
          <h3 className="text-lg font-semibold">Social media :</h3>
          <div className="flex gap-3">
            {data.socialMedioIcons.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-14 hover:bg-green-600 rounded-md flex items-center justify-center transition-colors duration-200"
              >
                <Image
                  src={social.icon}
                  alt="Social Media Icon"
                  className="w-12 h-12"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Image
          src={data.ImageLastBanner}
          alt="Snehshilp Foundation Banner"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default SnehshilpFoundationDetail;
