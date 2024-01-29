import React from 'react';
import Gamstop from './Gamstop.png';

const GamStop = () => {
  return (
    <div className='text-center flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>BLOCKING GAMBLING SITES</h1>
      <div className='mt-2 flex flex-col items-center'>
        <img src={Gamstop} alt="Gamstop" style={{ width: '150px', height: 'auto' }} />
        <p className='text-center'>
          Gamstop lets you put controls in place to restrict your online gambling activities.

          It’s a free service that enables you to self exclude from gambling websites and apps run by companies licensed in Great Britain, for a period of your choosing.

          You can find information on other multi-operator self-exclusion schemes here.
        </p>
        <a href='https://www.gamban.com' className='text-xl'>Gamstop.co.uk</a>
        <p>
        MOSES lets you restrict your betting in multiple betting shops – usually the ones near where you work or live. It works by uploading a photo, that is passed on to the shops in your area, who then intervene if one of the staff recognise an individual who has self-excluded.
        </p>
        <a>Self-exclusion.co.uk</a>
      </div>
    </div>
  );
}

export default GamStop;
