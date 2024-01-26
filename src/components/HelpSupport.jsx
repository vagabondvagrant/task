import React from 'react';

const HelpSupport = () => {
  return (
    <div className='border p-4 border-black bg-gray-300 opacity-90 flex flex-col md:flex-row'>
      <div className="md:w-1/2">
        <p className='font-bold'>THE BETFAIR WAY</p>
        <p>Making it safer for everyone</p>
        <br />
      </div>
      <div className="md:w-1/2 md:pl-4">
        <p className='font-bold'>TOOLS TO HELP</p>
        <br />
      </div>
      <div className="md:w-1/2 ">
        <p className='font-bold'>LOOKING OUT FOR EVERYONE</p>
        <ul>
          <li>On the look out</li>
          <li>How you can help</li>
          <li>Protecting Minors</li>
        </ul>
        <br />
      </div>
      <div className="md:w-1/2">
        <p className='font-bold'>HELP AND SUPPORT</p>
        <ul>
          <li>Support Organizations</li>
          <li>Blocking Gambling Sites</li>
          <li>Debt & Financial Advice</li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default HelpSupport;
