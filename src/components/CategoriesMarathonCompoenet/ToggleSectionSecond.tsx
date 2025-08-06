"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Toggle {
  id: string;
  title: string;
}

interface Information {
  title: string;
  raceDay: string;
  raceDistance: string;
  RegistrationDate: string;
  Start: string;
  End: string;
  theMinimumAge: string;
}

interface Important {
  paragraph: string[];
}

interface EarlyBird {
  title: string;
  date: string;
  rupess: string;
}

interface RegularFees {
  title: string;
  data: string;
  rupess: string;
}

interface Registration {
  title: string;
  earlybird: EarlyBird;
  ragularFees: RegularFees;
  describation: string;
}

interface Payment {
  title: string;
  describation: string[];
  btnTitle: string;
}

interface InformationToggle {
  id: string;
  inforamtion: Information;
  important: Important;
  registration: Registration;
  payment: Payment;
}

interface Entry {
  title: string;
  subTitle: string;
  points: string[];
}

interface EntryToggle {
  id: string;
  entry: Entry;
}

interface IconDetail {
  id: number;
  iconSvg: StaticImageData;
  profileName: string;
}

interface RunnerInformation {
  title: string;
  describation: string[];
  iconsDetails: IconDetail[];
}

interface RunnerToggle {
  id: string;
  runnerInformation: RunnerInformation;
}

interface GroupRegistration {
  id: string;
  title: string;
  describation: string | string[];
  shortDescribation: string;
}

type ToggleDetail =
  | InformationToggle
  | EntryToggle
  | GroupRegistration
  | RunnerToggle;

interface ToggleSectionProps {
  toggles: Toggle[];
  togglesDetails: ToggleDetail[];
}

const ToggleSection: React.FC<ToggleSectionProps> = ({
  toggles,
  togglesDetails,
}) => {
  const [activeToggle, setActiveToggle] = useState<string>("information");

  const getActiveContent = (): ToggleDetail | undefined => {
    return togglesDetails.find((detail) => detail.id === activeToggle);
  };

  const renderInformationContent = (content: InformationToggle) => (
    <div className="space-y-6 text-[#1D3A69]">
      <h2 className="text-[30px] lg:text-[40px] font-bold mb-6">INFORMATION</h2>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-4">
          <div><strong>Race Day:</strong> {content.inforamtion.raceDay}</div>
          <div><strong>Race Category Distance:</strong> {content.inforamtion.raceDistance}</div>
          <div><strong>Registration Dates :</strong> {content.inforamtion.RegistrationDate}</div>
          <div><strong> Start:</strong> {content.inforamtion.Start}</div>
          <div><strong> End:</strong> {content.inforamtion.End}</div>
          <div><strong>The minimum age eligibility:</strong> {content.inforamtion.theMinimumAge}</div>
        </div>
      </div>

      <div>
        <h3 className="text-[30px] lg:text-[40px] font-bold mb-6">IMPORTANT</h3>
        <div className="space-y-2">
          {content.important.paragraph.map((para, index) => (
            <p key={index} className={`text-[14px] lg:text-[16px] font-senibold ${index === content.important.paragraph.length - 1 ? "mt-5" : ""}`}>
              {para}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[30px] lg:text-[40px] font-bold mb-6">{content.registration.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 space-y-3">
            <h4 className="font-semibold text-green-800">{content.registration.earlybird.title}</h4>
            <p className="text-sm text-gray-600">{content.registration.earlybird.date}</p>
            <p className="text-2xl font-bold text-green-600">{content.registration.earlybird.rupess}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
            <h4 className="font-semibold text-blue-800">{content.registration.ragularFees.title}</h4>
            <p className="text-sm text-gray-600">{content.registration.ragularFees.data}</p>
            <p className="text-2xl font-bold text-blue-600">{content.registration.ragularFees.rupess}</p>
          </div>
        </div>
        <p className="text-[12px] lg:text-[14px]">{content.registration.describation}</p>
      </div>

      <div>
        <h3 className="text-[18px] lg:text-[22px] font-bold mb-4">{content.payment.title}</h3>
        <ul className="space-y-2 mb-4">
          {content.payment.describation.map((mode, index) => (
            <li key={index} className="flex items-center text-[12px] lg:text-[14px] font-medium mb-4">{mode}</li>
          ))}
        </ul>
        <button className="bg-[#1D3A69] text-white px-8 py-3 cursor-pointer mt-6 transition-colors">
          {content.payment.btnTitle}
        </button>
      </div>
    </div>
  );

  const renderEntryContent = (content: EntryToggle) => (
    <div className="space-y-10 text-[#1D3A69]">
      <h2 className="text-[30px] lg:text-[40px] font-bold mb-6">{content.entry.title}</h2>
      <p className="mb-4 text-[20px] lg:text-[26px] font-bold">{content.entry.subTitle}</p>
      <div className="space-y-3">
        {content.entry.points.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="text-[#1D3A69] text-[14px] font-bold mr-3 mb-2">•</span>
            <p className="text-sm leading-relaxed">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRunnerContent = (content: RunnerToggle) => (
    <div className="space-y-6 text-[#1D3A69]">
      <h2 className="text-[30px] lg:text-[40px] font-bold mb-6">{content.runnerInformation.title}</h2>
      <div className="space-y-4 mb-8">
        {content.runnerInformation.describation.map((desc, index) => (
          <p key={index} className="leading-relaxed text-[14px] lg:text-[16px]">{desc}</p>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.runnerInformation.iconsDetails.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-100">
              <Image src={item.iconSvg} alt={item.profileName} width={32} height={32} className="object-contain" />
            </div>
            <h3 className="font-semibold">{item.profileName}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  const groupRegistration = (content: GroupRegistration) => (
    <div className="space-y-6 text-[#1D3A69]">
      <h2 className="text-[30px] lg:text-[40px] font-bold mb-6">{content.title}</h2>
      <div className="space-y-4 mb-8">
        {Array.isArray(content.describation) ? (
          content.describation.map((desc, index) => (
            <p key={index} className={`leading-relaxed text-[14px] lg:text-[16px] ${index === content.describation.length - 1 ? 'font-semibold' : ''}`}>{desc}</p>
          ))
        ) : (
          <p className="leading-relaxed text-[14px] lg:text-[16px]">{content.describation}</p>
        )}
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
        <p className="text-[16px] lg:text-[18px] font-semibold text-blue-800">{content.shortDescribation}</p>
      </div>
    </div>
  );

  const renderContent = () => {
    const activeContent = getActiveContent();
    if (!activeContent) return null;
    switch (activeToggle) {
      case "information": return renderInformationContent(activeContent as InformationToggle);
      case "entry": return renderEntryContent(activeContent as EntryToggle);
      case "group": return groupRegistration(activeContent as GroupRegistration);
      case "runner": return renderRunnerContent(activeContent as RunnerToggle);
      default: return null;
    }
  };

  return (
     <div className=" mx-auto px-4 lg:px-16 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar - Toggle Navigation */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 sticky top-8">
            <div className="p-4 border-b border-gray-200">
            </div>
            <nav className="p-2">
              {toggles.map((toggle) => (
                <button
                  key={toggle.id}
                  onClick={() => setActiveToggle(toggle.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 font-medium cursor-pointer ${
                    activeToggle === toggle.id
                      ? "bg-[#1D3A69] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{toggle.title}</span>
                    <span
                      className={`text-xl transition-transform duration-200 ${
                        activeToggle === toggle.id ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSection;
