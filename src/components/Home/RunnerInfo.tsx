import Image from "next/image";

type LeftSectionItem = {
  id: number;
  title: string;
  Svg: string;
};

type RunnerInfoProps = {
  leftSection: {
    sections: LeftSectionItem[];
  };
  rightSection: {
    titleImage: string;
    describation: string;
    btnText: string;
  };
};

export default function RunnerInfo({ leftSection, rightSection }: RunnerInfoProps) {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-20  lg:px-8 py-12 text-[#1D3A69]">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <Image
          src={rightSection.titleImage}
          alt="Title"
       
          className="w-full lg:w-[60%] h-auto"
        />
        <p className=" text-base">{rightSection.describation}</p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
        {leftSection.sections.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <Image
              src={item.Svg}
              alt={item.title}
              width={60}
              height={60}
              className="w-14 h-14"
            />
            <p className="text-[14px] lg:text-[16px] font-medium ">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
