import React from 'react';
import OurCommitmentImage from '../assets/Screenshot_20240130-113742.png'; 
import CommitPara from './CommitPara';

const OurCommitment = () => {
  return (
    <div>
      <img src={OurCommitmentImage} alt="Our Commitment" className="md:w-full" />
      <CommitPara/>
    </div>
  );
}

export default OurCommitment;
