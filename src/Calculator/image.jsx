import React from 'react';
import YourImage from './Screenshot_20240130-165353_1.png';

const ImageComponent = () => {
  return (
    <div>
      <img src={YourImage} alt="Your Alt Text" className='md:w-full'/>
    </div>
  );
};

export default ImageComponent;
