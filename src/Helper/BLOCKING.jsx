import React from 'react';
import GambanImage from './gamban.webp';

const BLOCKING = () => {
  return (
    <div className='text-center flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>BLOCKING GAMBLING SITES</h1>
      <div className='mt-2 flex flex-col items-center'>
        <img src={GambanImage} alt="Gamban" style={{ width: '150px', height: 'auto' }} />
        <p className='text-center'>
          If you are looking to take a break from gambling online, consider installing Gamban. Gamban is a software product that blocks all types of online gambling sites and apps on all personal devices. Gamban is easy to use and provides an effective barrier to online gambling. Gamban can be simply installed on Android, iOS, Mac, and Windows devices.

          Betfair is offering a free 6-month subscription to download this on an unlimited number of devices. To avail of this free software, visit the website here.
        </p>
        <a href='https://www.gamban.com' className='text-xl'>Gamban.com</a>
      </div>
    </div>
  );
}

export default BLOCKING;
