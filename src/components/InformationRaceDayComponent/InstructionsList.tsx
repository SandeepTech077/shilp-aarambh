"use client";

import React from "react";

interface InstructionsListProps {
  instructions: string[];
  title?: string;
}

const InstructionsList: React.FC<InstructionsListProps> = ({
  instructions,
}) => {
  return (
    <div className=" p-6 mb-6 text-[#1D3A69]">
      <ol className="space-y-4">
        {instructions.map((instruction, index) => (
          <li key={index} className="flex items-start group">
            <span className="font-semibold text-white mr-3 mt-0.5 min-w-6 bg-[#1D3A69] rounded-full h-6 w-6 flex items-center justify-center text-sm">
              {index + 1}
            </span>
            <span className="leading-relaxed">
              {instruction}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
