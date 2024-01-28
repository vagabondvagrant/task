import React from 'react';
import GordonImage from './Gordon.png'; // Import the image

const Gordon = () => {
  return (
    <div className="text-center">
      <h1 className='text-xl font-bold'>GORDON MOODY</h1>
      <img src={GordonImage} alt="Gordon Moody" style={{ width: '150px', height: 'auto', margin: 'auto' }} />
      <p>
        Gordon Moody are a charity dedicated to helping people reclaim and rebuild their lives free from Gambling addiction through recovery in a safe supported environment. Their services include a global Gambling Therapy service, providing free practical advice and emotional support in multiple languages to anyone affected by gambling.
        For information on the additional tools and services Gordon Moody provides for UK-based residents, please visit
        <br/>
        <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer">www.gamblingtherapy.org</a>
      </p>
    </div>
  );
}

export default Gordon;
