interface SectionProps {
  title: string;
  points: string[];
}

interface PrizeMoneyDetailsProps {
  prizeMoneyRules: SectionProps;
  protestAndAppeals: SectionProps;
}

const PrizeMoneyDetails: React.FC<PrizeMoneyDetailsProps> = ({
  prizeMoneyRules,
  protestAndAppeals,
}) => {
  const sections: SectionProps[] = [prizeMoneyRules, protestAndAppeals];

  return (
    <div>
      {sections.map(({ title, points }) => (
        <div key={title} className="bg-white p-6 mb-8 text-[#1D3A69] px-4 lg:px-16 ">
          <h3 className="text-[20px] lg:text-[26px] font-bold  mb-3">{title}</h3>
          <ul className="list-none border border-[#D2D2D2] p-12 rounded-lg space-y-2 text-[14px] lg:text-[16px]">
            {points.map((point, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <span className="font-semibold">{idx + 1}.</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PrizeMoneyDetails;
