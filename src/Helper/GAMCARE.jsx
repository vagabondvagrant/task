import React from 'react';
import GamCareImage from './GamCare.png';

const GAMCARE = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='text-center font-bold text-xl'>GAMCARE</h1>
      <div className='text-center mt-1'>
        <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">www.gamcare.org.uk</a>
      </div>
      <div className='text-center mt-2'>
        <img src={GamCareImage} alt="GamCare" style={{ width: '100px', height: 'auto', margin: 'auto' }} />
      </div>
      <p className='text-center'>
        GamCare provides advice, support and free counselling for problem gambling. its services and tools include:
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default GAMCARE;
