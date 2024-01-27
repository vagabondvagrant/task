import React from 'react';
import TtttLogotypeV1 from '../assets/tttt_logotype_v1.svg';
import TttLogo from '../assets/tttt-logo.svg';
import Bgaorg18Logo from '../assets/bgaorg-18-logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='bg-yellow-300 flex flex-wrap justify-around p-1 md:p-2'>
        <img
          src={TtttLogotypeV1}
          alt="Taketimetothink Logo"
          className='w-25 sm:w-22 md:w-22'
        />

        <img
          src={TttLogo}
          alt="Taketimetothink Logo"
          className='w-25 sm:w-22 md:w-22'
        />

        <img
          src={Bgaorg18Logo}
          alt="Bgaorg 18 Logo"
          className='w-25 sm:w-22 md:w-22'
        />
      </div>
    </footer>
  );
};

export default Footer;
