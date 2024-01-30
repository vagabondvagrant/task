import React from 'react';
import BeGambleAwareIcon from '../FooterIco/BeGambleAware.png';
import BetfairIcon from '../FooterIco/Betfair.png';
import EighteenIcon from '../FooterIco/Eighteen.png';
import GamblingCommissionIcon from '../FooterIco/GamblingCommission.png';
import GamStopIcon from '../FooterIco/GamStop.png';
// import MaltaGamingIcon from '../FooterIco/MaltaGaming.jpg';
// import NationalGambIcon from '../FooterIco/NationalGamb.png';

const FirstFooter = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={BeGambleAwareIcon} alt="BeGambleAware" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" />
      <img src={BetfairIcon} alt="Betfair" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" />
      <img src={EighteenIcon} alt="Eighteen" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" />
      <img src={GamblingCommissionIcon} alt="GamblingCommission" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" />
      <img src={GamStopIcon} alt="GamStop" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" />
      {/* <img src={MaltaGamingIcon} alt="MaltaGaming" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" /> */}
      {/* <img src={NationalGambIcon} alt="NationalGamb" className="w-16 h-auto sm:w-24 sm:h-auto mx-2" /> */}
    </div>
  );
}

export default FirstFooter;
