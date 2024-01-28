import React from 'react';
import IconRow from './IconsRow';

const Anonymous = () => {
  return (
    <div className="text-center">
      <h1 className='text-xl font-bold'>GAMBLERS ANONYMOUS</h1>
      <IconRow/>
        <a href="https://www.gamblingtherapy.org" target="_blank" rel="noopener noreferrer">www.gamblersanpnymous.org.uk</a>
      <p>
      Gamblers Anonymous is a support group for people who wish to do something about their gambling problem and help others do the same through attending meetings.
        <br/>
      </p>
    </div>
  );
}

export default Anonymous;
