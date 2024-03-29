import React from 'react';
import NationalDebtlineImage from './ds52404_my_money_v1.webp';

const SCarouselOn = () => {
  return (
    <div className="text-center flex flex-col items-center mt-2">
      <h1 className='text-2xl font-bold'>NATIONAL DEBTLINE</h1>
      <img src={NationalDebtlineImage} alt="National Debtline" style={{ width: '170px', height: 'auto' }} />
      <a href="https://www.nationaldebtline.org">www.nationaldebtline.org</a>
      <p>National Debtline offers free, confidential, and independent advice on how to deal with debt problems.</p>
      <a href="tel:08088084000" className='font-bold'>PHONE: 0808 808 4000</a>
    </div>
  );
}

export default SCarouselOn;
