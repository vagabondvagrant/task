import React from 'react';
import BegambleawareImage from './begambleaware.png';

const Gordon = () => {
  return (
    <div className="text-center">
      <h1 className='font-bold text-xl'>BEGAMBLEAWARE</h1>
      <a>www.begambleaware.org</a>
      <img src={BegambleawareImage} alt="BeGambleAware" style={{ width: '200px', height: 'auto', margin: 'auto' }} />
      <p>
      BeGambleAware provide information, advice and direct people to support to help keep people safe from gambling harms.
      <br/>
       You can find out more about the National Gambling Treatment Service, a network of organisations working together to provide confidential treatment and support for anyone experiencing gambling-related harms, free to access across England, Scotland and Wales.
       <br/>
        BeGambleAware also offer information on how to limit exposure to gambling advertising across social media platforms.
      </p>
    </div>
  );
}

export default Gordon;
