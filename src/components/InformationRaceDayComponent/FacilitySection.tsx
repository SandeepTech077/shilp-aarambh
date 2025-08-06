interface Props {
  facilities: string[];
  importantNotes: string[];
}

const FacilitySection = ({ facilities, importantNotes }: Props) => {
  return (
    <div className="text-[#1D3A69]">
      <h2 className="text-2xl font-bold  mb-2">
        Facilities At Event Venue
      </h2>

      <ul className="list-decimal pl-6 space-y-1 mb-6">
        {facilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="text-[#E51D25] font-bold mb-5">Important Note :</h3>

      <ol className="list-decimal pl-6 space-y-5 ">
        {importantNotes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ol>
    </div>
  );
};

export default FacilitySection;
