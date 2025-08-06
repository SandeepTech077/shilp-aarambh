import Image, { StaticImageData } from "next/image";

interface Props {
  title: StaticImageData;
  raceCategories: {
    category: string;
    flagOffTime: string;
    cutOffTime: string;
  }[];
  note: string;
}

const RaceCategorySection = ({ title, raceCategories, note }: Props) => {
  return (
    <div className="text-[#1D3A69]">
      <div className="flex items-start gap-6 mb-4 ">
        <div className="flex-shrink-0">
          <Image src={title} alt="Race Title" width={600} height={120} />
        </div>
      </div>

      <table className="w-full border-collapse mt-6 text-[14px] lg:text-[16px] max-w-4xl">
        <thead className="">
          <tr className="border-[#D2D2D2]  text-[#E51D25]">
            <th className="p-2 border border-[#D2D2D2]">RACE CATEGORY</th>
            <th className="p-2 border border-[#D2D2D2]">FLAG-OFF TIME</th>
            <th className="p-2 border border-[#D2D2D2]">CUT-OFF TIME</th>
          </tr>
        </thead>
        <tbody>
          {raceCategories.map((item, i) => (
            <tr key={i} className="text-center text-[#1D3A69]" >
              <td className="p-2 border border-[#D2D2D2] ">{item.category}</td>
              <td className="p-2 border border-[#D2D2D2] ">{item.flagOffTime}</td>
              <td className="p-2 border border-[#D2D2D2] ">{item.cutOffTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="font-semibold mt-10 ">{note}</p>
    </div>
  );
};

export default RaceCategorySection;
