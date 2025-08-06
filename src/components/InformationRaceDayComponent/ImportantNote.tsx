import React from 'react';

interface ImportantNoteProps {
  note: string;
}

const ImportantNote: React.FC<ImportantNoteProps> = ({ note }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-[#E51D25] font-bold text-center text-[20px] lg:text-[30px] ">
        {note}
      </p>
    </div>
  );
};

export default ImportantNote;