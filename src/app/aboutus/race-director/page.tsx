import React from 'react';
import { aboutUsData } from "@/data/AboutUsData/aboutUsData";
import RaceDirectorComponent from '@/components/AboutUsComponent/RaceDirectorComponent';

export default function RaceDirector() {
    return (
        <div className="min-h-screen bg-gray-50">
            <RaceDirectorComponent data={aboutUsData.raceDirectorDeatils} />
        </div>
    );
}