import React from 'react';
import MabsImage from './ds52404_mabs_v1.webp';

const ThCarousel = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>MABS</h1>
      <img src={MabsImage} alt="MABS" style={{ width: '170px', height: 'auto' }} />
      <a href="https://www.mabs.ie">www.mabs.ie</a>
      <p>
        MABS is a free, independent, non-judgmental and confidential service for people who are in debt or at risk of getting into debt. MABS will work with you to determine the type of support you need, including assessing whether it is necessary to meet with a Money Adviser.
      </p>
      <p className='font-bold'>PHONE: 0761 07 2000</p>
    </div>
  );
}

export default ThCarousel;
