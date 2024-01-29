import React from 'react';
import MoneyAdviceServiceImage from './ds52404_money_advise_v1.webp';

const SCarouselTw = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center'>MONEY ADVICE SERVICE</h1>
      <img src={MoneyAdviceServiceImage} alt="Money Advice Service" style={{ width: '150px', height: 'auto' }} />
      <a href="https://www.moneyadviceservice.org.uk/en">www.moneyadviceservice.org.uk/en</a>
      <p>
        The Money Advice Service helps people manage their money. They do this directly through their free and impartial advice service. They also work in partnership with other organisations to help people make the most of their money. They are an independent service, set up by the government.
      </p>
    </div>
  );
}

export default SCarouselTw;
