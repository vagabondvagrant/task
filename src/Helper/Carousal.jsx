import React, { useState } from 'react';
import Slider from 'react-slick';

import GAMCARE from './GAMCARE';
import Gordon from './Gordon';
import BeAware from './BeAware';
import Anonymous from './Anonymous';
import Addiction from './Addiction';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselWrapper = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div>
      <h1 className='font-bold text-center text-2xl'>SUPPORT ORGANIZATIONS</h1>
      <div className='mt-2'>
        <Slider {...settings}>{React.Children.toArray(children)}</Slider>
        <div className='flex justify-center mt-2'>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Carousal = () => {
  return (
    <CarouselWrapper>
      <GAMCARE />
      <Gordon />
      <BeAware />
      <Anonymous />
      <Addiction />
    </CarouselWrapper>
  );
};

export default Carousal;
