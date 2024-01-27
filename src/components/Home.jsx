import React from 'react';
import YourImage from '../assets/Screenshot_20240128-163433.png'
import HomeSec from './HomeSec';

const Home = () => {
  return (
    <div className='mt-2'>
      <img src={YourImage} alt="Your Alt Text" className='md:w-full' />
      <div className='mt-3'>
        <HomeSec/>
      </div>
    </div>
  );
};

export default Home;
