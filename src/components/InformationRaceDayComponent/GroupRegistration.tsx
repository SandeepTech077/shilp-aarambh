'use client';

import React from 'react';
import { Users, FileText } from 'lucide-react';

interface GroupRegistrationItem {
  id: number;
  describation: string;
  points?: string[];
}

interface GroupRegistrationData {
  title: string;
  describation: GroupRegistrationItem[];
}

interface GroupRegistrationProps {
  data: GroupRegistrationData;
}

const GroupRegistration: React.FC<GroupRegistrationProps> = ({ data }) => {
  return (
    <div className="p-6 mb-6 text-[#1D3A69]">
      <h2 className="text-xl font-bold  mb-4 flex items-center gap-2">
        <Users className="h-5 w-5 text-[#1D3A69]" />
        {data.title}
      </h2>
      
      <div className="space-y-6">
        {data.describation.map((item) => (
          <div key={item.id} className="flex items-start group">
            <span className="font-semibold text-white mr-3 mt-0.5 min-w-6 bg-[#1D3A69] rounded-full h-6 w-6 flex items-center justify-center text-sm flex-shrink-0">
              {item.id}
            </span>
            <div className="flex-1">
              <p className="text-[1D3A69] leading-relaxed mb-3 group-hover:text-gray-900 transition-colors">
                {item.describation}
              </p>
              {item.points && (
                <div className="ml-2">
                  <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    Required Documents:
                  </h4>
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-[#1D3A69] mr-2 mt-1 text-xs">●</span>
                        <span className=" text-sm leading-relaxed hover:text-gray-800 transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupRegistration;