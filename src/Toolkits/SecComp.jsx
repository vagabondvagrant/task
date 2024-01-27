import React from 'react';
import Icon1Webp from './ds98431_gamblinghelpline_bell_icon_v1.webp';
import Icon2Webp from './ds98431_gamblinghelpline_budget_calculator_icon_v1.webp';
import Icon3Webp from './ds98431_gamblinghelpline_deposit_limit_icon_v1.webp';
import Icon4Webp from './ds98431_gamblinghelpline_download_icon_v1.webp';
import Icon5Webp from './ds98431_gamblinghelpline_self_exclusion_icon_v1.webp';
import Icon6Webp from './ds98431_gamblinghelpline_timeout_v1.webp';
import Icon7Webp from './profitloss_icon_v3.webp';

const SecComp = () => {
  return (
    <div className="bg-black p-4 rounded-[3rem] m-4 md:rounded-[10rem]">
      <h1 className='text-white text-center font-bold md:text-2xl'>SET UP YOUR TOOLS HERE</h1>
      <div className="grid grid-cols-3 md:flex flex-row lg:grid-cols-4 gap-4 p-4">
        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon3Webp} type="image/webp" />
            <img src={Icon3Webp} alt="Icon 1" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>DEPOSIT LIMIT</p>
        </div>

        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon4Webp} type="image/webp" />
            <img src={Icon4Webp} alt="Icon 2" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>LOSS LIMIT</p>
        </div>

        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon7Webp} type="image/webp" />
            <img src={Icon7Webp} alt="Icon 3" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>MY PROFIT AND LOSS</p>
        </div>

        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon2Webp} type="image/webp" />
            <img src={Icon2Webp} alt="Icon 4" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>BUDGET CALCULATOR</p>
        </div>

        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon6Webp} type="image/webp" />
            <img src={Icon6Webp} alt="Icon 5" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>TIME OUT</p>
        </div>

        <div className="text-center md:w-full">
          <picture>
            <source srcSet={Icon1Webp} type="image/webp" />
            <img src={Icon1Webp} alt="Icon 6" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>GAMING TIME CHECK</p>
        </div>

        <div className="text-center md:w-full">
          <picture className=''>
            <source srcSet={Icon5Webp} type="image/webp" />
            <img src={Icon5Webp} alt="Icon 7" className="w-full h-auto" />
          </picture>
          <p className='text-white font-bold'>SELF EXCLUSION</p>
        </div>
      </div>
    </div>
  );
};

export default SecComp;
