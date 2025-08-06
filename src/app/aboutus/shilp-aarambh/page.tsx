import React from 'react';
import { aboutUsData } from '@/data/AboutUsData/aboutUsData'; 
import ShilpAarambhComponent from '@/components/AboutUsComponent/ShilpAarambhComponent';

const ShilpAarambhPage: React.FC = () => {
  return (
    <div className="">
      <ShilpAarambhComponent data={aboutUsData.shilpAarambh} />
    </div>
  );
};

export default ShilpAarambhPage;