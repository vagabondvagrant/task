import React from 'react';
import SCarouselOn from './SCarouselOn';
import SCarouselTw from './SCarouselTw';
import ThCarousel from './ThCarousel';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarRender = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <SCarouselOn />
      </div>
      <div>
        <SCarouselTw />
      </div>
      <div>
        <ThCarousel />
      </div>
    </Slider>
  );
};

export default CarRender;
