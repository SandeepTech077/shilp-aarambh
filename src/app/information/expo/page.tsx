// app/expo/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { ExpoRaceDayData } from '@/data/RaceDayInformation/RaceDayInformation';
import ExpoHeader from '@/components/InformationRaceDayComponent/ExpoHeader';
import InstructionsList from '@/components/InformationRaceDayComponent/InstructionsList';
import GroupRegistration from '@/components/InformationRaceDayComponent/GroupRegistration';
import ImportantNote from '@/components/InformationRaceDayComponent/ImportantNote';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'BIB EXPO - Collect ',
  description: 'Information about BIB collection for the running event. Get your running number and t-shirt at the designated venues.',
  keywords: ['BIB collection', 'running event', 'marathon', 'registration'],
  openGraph: {
    title: 'BIB EXPO - Collect Your Running Number & T-shirt',
    description: 'Information about BIB collection for the running event',
    type: 'website',
  },
};

const ExpoPage: React.FC = () => {
  const { runningDetails } = ExpoRaceDayData;
  
  return (
    <main className="min-h-screen bg-gray-50 px-4 lg:px-16">
      <div className="mx-auto p-6">
        {/* Header with event details */}
        <ExpoHeader 
          data={runningDetails} 
        />
        
        {/* Instructions section */}
        <InstructionsList 
          instructions={runningDetails.descripation}
        />
        
        {/* Group registration section */}
        <GroupRegistration 
          data={runningDetails.groupRegistration} 
        />
        
        {/* Important notice */}
        <ImportantNote 
          note={runningDetails.mote}
        />
      </div>
    </main>
  );
};

export default ExpoPage;