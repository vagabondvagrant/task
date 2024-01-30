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
        <img src={GamCareImage} alt="GamCare" style={{ width: '150px', height: 'auto', margin: 'auto' }} />
      </div>
      <p className='text-center'>
        GamCare provides advice, support, and free counseling for problem gambling. Its services and tools include:
      </p>
      <ul className="pl-6 text-center mx-auto">
        <li className="mb-2" style={{ paddingLeft: '20px' }}>
          &bull; GamCare operates the National Gambling Helpline and offers confidential information, advice, and support for anyone harmed by gambling in Great Britain. The Helpline is open 24 hours every day on Freephone 0808 8020 133 or via. Advisers will listen to you, they won’t judge, and your conversation is confidential.
        </li>
        <li className="mb-2" style={{ paddingLeft: '20px' }}>
          &bull; GamCare operates the National Gambling Helpline and offers confidential information, advice, and support for anyone harmed by gambling in Great Britain. The Helpline is open 24 hours every day on Freephone 0808 8020 133 or via. Advisers will listen to you, they won’t judge, and your conversation is confidential.
        </li>
        <li className="mb-2" style={{ paddingLeft: '20px' }}>
          &bull; A simple self-assessment tool which allows you to consider your gambling behavior.
        </li>
        <li className="mb-2" style={{ paddingLeft: '20px' }}>
          &bull; A list of financial services organizations in the UK that currently offer gambling blocks on debit cards. financial services organizations
        </li>
      </ul>
    </div>
  );
}

export default GAMCARE;
