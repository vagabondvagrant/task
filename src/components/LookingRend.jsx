import React from 'react';
import { LookOut } from './LookOut';
import ValAssetImage from '../assets/valasset.png'; 
import ProtectingMinors from './ProtectingMinors';

const LookingRend = () => {
  return (
    <div className="md:w-full mt-2">
      <img src={ValAssetImage} alt="ValAsset" className="w-full md:max-w-full" />

      <LookOut />
      <ProtectingMinors/>
    </div>
  );
}

export default LookingRend;
