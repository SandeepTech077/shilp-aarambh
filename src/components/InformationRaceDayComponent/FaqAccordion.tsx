"use client"

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Calendar, Trophy, CreditCard, Clock, Users } from "lucide-react";
import Image from "next/image";

interface FaqAnswer {
  title?: string;
  question?: string;
  description?: string;
  points?: string[];
  options?: string[];
}

interface FaqItem {
  id: number;
  question: string;
  answer: string[] | FaqAnswer[];
}

interface FaqsDataType {
  titleLogo: string;
  faqDataArray: FaqItem[];
}

const FaqAccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const iconMap = {
    registration: <Calendar className="w-5 h-5" />,
    apply: <Calendar className="w-5 h-5" />,
    fee: <CreditCard className="w-5 h-5 " />,
    payment: <CreditCard className="w-5 h-5 " />,
    time: <Clock className="w-5 h-5 " />,
    age: <Trophy className="w-5 h-5 " />,
    prize: <Trophy className="w-5 h-5 " />,
    course: <Users className="w-5 h-5 " />,
    race: <Users className="w-5 h-5 " />,
    default: <HelpCircle className="w-5 h-5 " />,
  };

  const getIcon = (question: string) => {
    const q = question.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (q.includes(key)) return icon;
    }
    return iconMap.default;
  };

  const renderAnswer = (answer: string[] | FaqAnswer[]) => {
    if (typeof answer[0] === "string") {
      return (
        <div className="mt-3 pl-9 space-y-2.5 text-gray-600">
          {(answer as string[]).map((a, i) => (
            <p key={i} className="leading-relaxed">{a}</p>
          ))}
        </div>
      );
    }

    return (
      <div className="mt-3 pl-9 space-y-3">
        {(answer as FaqAnswer[]).map((section, i) => (
          <div key={i} className="bg-gray-50/50 p-3.5 rounded-lg border border-gray-100">
            {section.title && (
              <h4 className="font-medium  mb-1.5">{section.title}</h4>
            )}
            {section.question && (
              <p className="text-sm ">{section.question}</p>
            )}
            {section.description && (
              <p className="text-xs  mt-1.5">{section.description}</p>
            )}
            {section.points && (
              <ul className="space-y-2 mt-2 text-sm ">
                {section.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400 before:mt-1.5 before:mr-2 before:shrink-0">
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            {section.options && (
              <div className="flex flex-wrap gap-2 mt-3">
                {section.options.map((opt, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 bg-white border border-gray-200 text-xs rounded-lg shadow-xs hover:bg-gray-50 transition-colors"
                  >
                    {opt}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? "bg-white shadow-sm" : "bg-gray-50 hover:bg-gray-100"
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex justify-between items-center p-5 focus:outline-none cursor-pointer transition-colors ${
          isOpen ? "pb-3" : ""
        }`}
      >
        <div className="flex items-center space-x-4">
          <span className={`p-2 rounded-lg ${isOpen ? "bg-indigo-50" : "bg-gray-200"}`}>
            {getIcon(item.question)}
          </span>
          <span className="font-medium  text-left text-sm sm:text-base">
            {item.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5">{renderAnswer(item.answer)}</div>
      </div>
    </div>
  );
};

const FaqAccordion = ({ faqsData }: { faqsData: FaqsDataType }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  return (
    <div className="px-4 lg:px-16 mx-auto px-4 sm:px-6 py-10 text-[#1D3A69]">
      <div className="flex justify-center mb-10">
        <div className="p-4 border border-gray-100">
          <Image
            src={faqsData.titleLogo}
            alt="FAQ Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-4">
        {faqsData.faqDataArray.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onToggle={() =>
              setOpenItemId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;