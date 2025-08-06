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

interface PrizeMoney {
  potion: string;
  prizeMoney: string;
}

interface TableTwo {
  title: string;
  ageCategoryWinnersPrizeMoney: PrizeMoney[];
}

interface ThirdTable {
  title: string;
  catagorys: string[];
}

interface TableOne {
  title: string;
  fastestWinnersPrizeMoney: PrizeMoney[];
  describation: string;
  tableTwo: TableTwo;
  thirdTable: ThirdTable;
}

interface PrizeMoneySection {
  title: string;
  subTitle: string;
  tableOne: TableOne;
}

interface PrizeMoneyRules {
  title: string;
  describation: string[];
}

interface ProtestAndAppeals {
  title: string;
  describations: string[];
}

interface PrizeToggle {
  id: string;
  prizeMoney: PrizeMoneySection;
  prizeMoneyRules: PrizeMoneyRules;
  protestAndApperals: ProtestAndAppeals;
}

interface PacerProfile {
  id: number;
  profileImage: StaticImageData;
  name: string;
  time: string;
}

interface PacersToggle {
  id: string;
  title: string;
  subTitle?: string;
  describation?: string | string[];
  profiles: PacerProfile[];
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

type ToggleDetail =
  | InformationToggle
  | EntryToggle
  | PrizeToggle
  | PacersToggle
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

  const renderInformationContent = (content: InformationToggle) => {
    return (
      <div className="space-y-6 text-[#1D3A69]">
        <h2 className="text-[30px] lg:text-[40px] font-bold  mb-6">
          INFORMATION
        </h2>

        {/* Race Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <strong>Race Day:</strong> {content.inforamtion.raceDay}
            </div>
            <div>
              <strong>Race Category Distance:</strong>{" "}
              {content.inforamtion.raceDistance}
            </div>
            <div>
              <strong>Registration Dates :</strong>{" "}
              {content.inforamtion.RegistrationDate}
            </div>
            <div>
              <strong> Start:</strong> {content.inforamtion.Start}
            </div>
            <div>
              <strong> End:</strong> {content.inforamtion.End}
            </div>
            <div className="md:col-span-2">
              <strong>The minimum age eligibility</strong>{" "}
              {content.inforamtion.theMinimumAge}
            </div>
          </div>
        </div>

        {/* Important Section */}
        <div>
          <h3 className="text-[30px] lg:text-[40px] font-bold  mb-6">
            IMPORTANT
          </h3>
          <div className="space-y-2">
            {content.important.paragraph.map((para: string, index: number) => (
              <p
                key={index}
                className={`text-[14px] lg:text-[16px] font-senibold ${
                  index === content.important.paragraph.length - 1 ? "mt-5" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Registration Fees */}
        <div>
          <h3 className="text-[30px] lg:text-[40px] font-bold  mb-6">
            {content.registration.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300 space-y-3">
              <h4 className="font-semibold text-green-800">
                {content.registration.earlybird.title}
              </h4>
              <p className="text-sm text-gray-600">
                {content.registration.earlybird.date}
              </p>
              <p className="text-2xl font-bold text-green-600">
                {content.registration.earlybird.rupess}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h4 className="font-semibold text-blue-800">
                {content.registration.ragularFees.title}
              </h4>
              <p className="text-sm text-gray-600">
                {content.registration.ragularFees.data}
              </p>
              <p className="text-2xl font-bold text-blue-600">
                {content.registration.ragularFees.rupess}
              </p>
            </div>
          </div>

          <p className=" text-[12px] lg:text-[14px]">
            {content.registration.describation}
          </p>
        </div>

        {/* Payment Modes */}
        <div>
          <h3 className="text-[18px] lg:text-[22px] font-bold mb-4">
            {content.payment.title}
          </h3>
          <ul className="space-y-2 mb-4">
            {content.payment.describation.map((mode: string, index: number) => (
              <li
                key={index}
                className="flex items-center  text-[12px] lg:text-[14px] fond-medium mb-4"
              >
                {mode}
              </li>
            ))}
          </ul>
          <button className="bg-[#1D3A69] text-white px-8 py-3 cursor-pointer mt-6 transition-colors">
            {content.payment.btnTitle}
          </button>
        </div>
      </div>
    );
  };

  const renderEntryContent = (content: EntryToggle) => {
    return (
      <div className="space-y-10 text-[#1D3A69]">
        <h2 className="text-[30px] lg:text-[40px] font-bold  mb-6">
          {content.entry.title}
        </h2>
        <p className="mb-4 text-[20px] lg:text-[26px] font-bold ">{content.entry.subTitle}</p>
        <div className="space-y-3">
          {content.entry.points.map((point: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-[#1D3A69] text-[14px] font-bold mr-3 mb-2 ">
                •
              </span>
              <p className="text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderPrizeContent = (content: PrizeToggle) => {
    return (
      <div className="space-y-6 text-[#1D3A69]">
        <h2 className="text-[30px] lg:text-[40px] font-bold  mb-6">
          {content.prizeMoney.title}
        </h2>
        <p
          className="
        text-[16px] lg:text-[20px] font-bold mb-4 "
        >
          {content.prizeMoney.subTitle}
        </p>

        <div className="border border-gray-300 rounded-md overflow-hidden max-w-2xl  text-sm">
          {/* Table Title */}
          <div className="text-center text-[14px] lg:text-[16px] font-semibold text-[#1D3A69] py-4 border-b border-gray-300">
            {content.prizeMoney.tableOne.title}
          </div>

          {/* Table */}
          <table className="w-full text-center border-collapse">
            <thead>
              <tr>
                <th className="border border-gray-300 py-4 px-4 text-red-500">
                  Position
                </th>
                <th className="border border-gray-300 py-4 px-4 text-red-500">
                  Prize Money
                </th>
              </tr>
            </thead>
            <tbody>
              {content.prizeMoney.tableOne.fastestWinnersPrizeMoney.map(
                (winner: PrizeMoney, index: number) => (
                  <tr key={index}>
                    <td className="border border-gray-300 py-4 px-4 text-[#1D3A69]">
                      {winner.potion}
                    </td>
                    <td className="border border-gray-300 py-4 px-4 text-[#1D3A69] font-semibold">
                      {winner.prizeMoney}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Age Category Winners */}
        <div>
          <p className="text-[12px] lg:text-[14px]  py-4">
            {content.prizeMoney.tableOne.describation}
          </p>
          <div className="border border-gray-300 rounded-md overflow-hidden max-w-2xl text-sm">
            {/* Table Title */}
            <div className="text-center font-bold text-[#1D3A69] py-4 border-b border-gray-300">
              {content.prizeMoney.tableOne.tableTwo.title}
            </div>

            {/* Table */}
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 py-4 px-4 text-red-500">
                    Position
                  </th>
                  <th className="border border-gray-300 py-4 px-4 text-red-500">
                    Prize Money
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.prizeMoney.tableOne.tableTwo.ageCategoryWinnersPrizeMoney.map(
                  (winner: PrizeMoney, index: number) => (
                    <tr key={index}>
                      <td className="border border-gray-300 py-4 px-4 text-[#1D3A69]">
                        {winner.potion}
                      </td>
                      <td className="border border-gray-300 py-4 px-4 text-[#1D3A69] font-semibold">
                        {winner.prizeMoney}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Age Groups */}
        <div className="bg-gray-50 p-6 rounded-lg  mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-[#1D3A69]">
            {content.prizeMoney.tableOne.thirdTable.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.prizeMoney.tableOne.thirdTable.catagorys.map(
              (category: string, index: number) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg border border-gray-300 text-center text-sm font-semibold text-[#1D3A69]"
                >
                  {category}
                </div>
              )
            )}
          </div>
        </div>

        {/* Prize Money Rules */}
        <div>
          <h3 className="text-[30px] lg:text-[40px] font-bold text-[#1D3A69] mb-4">
            {content.prizeMoneyRules.title}
          </h3>
          <div className="space-y-3 border border-[#D2D2D2] p-5">
            {content.prizeMoneyRules.describation.map(
              (rule: string, index: number) => (
                <div key={index} className="flex items-start">
                  <span className=" flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {rule}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Protests and Appeals */}
        <div>
          <h3 className="text-[30px] lg:text-[40px] font-bold text-[#1D3A69] mb-4">
            {content.protestAndApperals.title}
          </h3>
          <div className="space-y-3 border border-[#D2D2D2] p-5">
            {content.protestAndApperals.describations.map(
              (desc: string, index: number) => (
                <div key={index} className="flex items-start">
                  <span className="flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className=" text-sm leading-relaxed">{desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPacersContent = (content: PacersToggle) => {
    return (
      <div className="space-y-6 text-[#1D3A69]">
        <h2 className="text-[30px] lg:text-[40px] font-bold mb-4">
          {content.title}
        </h2>

        {/* Subtitle below Title */}
        {content.subTitle && (
          <p className="text-[16px] lg:text-[22px] font-bold mt-2">
            {content.subTitle}
          </p>
        )}

        {/* Description below Subtitle */}
        {content.describation && (
          <p className="text-[14px] lg:text-[16px] mt-1">
            {content.describation}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {content.profiles.map((profile: PacerProfile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 p-5 "
            >
              {/* Image container with aspect ratio to maintain square */}
              <div className="w-full relative">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-[16px] lg:text-[20px] mb-2">
                  {profile.name}
                </h3>
                <p className="text-[#E51D25] font-medium">{profile.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

 const renderRunnerContent = (content: RunnerToggle) => {
  return (
    <div className="space-y-6 text-[#1D3A69]">
      <h2 className="text-[30px] lg:text-[40px] font-bold mb-6">
        {content.runnerInformation.title}
      </h2>

      <div className="space-y-4 mb-8">
        {content.runnerInformation.describation.map(
          (desc: string, index: number) => (
            <p key={index} className="leading-relaxed text-[14px] lg:text-[16px]">
              {desc}
            </p>
          )
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.runnerInformation.iconsDetails.map((item: IconDetail) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-100">
              <Image
                src={item.iconSvg}
                alt={item.profileName}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold ">{item.profileName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};  

  const renderContent = () => {
    const activeContent = getActiveContent();
    if (!activeContent) return null;

    switch (activeToggle) {
      case "information":
        return renderInformationContent(activeContent as InformationToggle);
      case "entry":
        return renderEntryContent(activeContent as EntryToggle);
      case "prize":
        return renderPrizeContent(activeContent as PrizeToggle);
      case "pacers":
        return renderPacersContent(activeContent as PacersToggle);
      case "runner":
        return renderRunnerContent(activeContent as RunnerToggle);
      default:
        return null;
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
