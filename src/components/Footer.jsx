import React from 'react';
import TtttLogotypeV1 from '../assets/tttt_logotype_v1.svg';
import TttLogo from '../assets/tttt-logo.svg';
import Bgaorg18Logo from '../assets/bgaorg-18-logo.svg';

const Footer = () => {
  return (
    <footer>
      <div className='bg-yellow-300'>
        <img
          src={TtttLogotypeV1}
          alt="Taketimetothink Logo"
          className='w-14 sm:w-16 md:w-40 md:mt-2 lg:w-24'
        />

        <img
          src={TttLogo}
          alt="Taketimetothink Logo"
          className='w-12 sm:w-14 md:w-27 md:mt-2 lg:w-24'
        />

        <img
          src={Bgaorg18Logo}
          alt="Bgaorg 18 Logo"
          className='w-12 sm:w-14 md:w-18 md:mt-2 lg:w-28'
        />
      </div>
    </footer>
  );
};

export default Footer;
