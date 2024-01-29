import React from 'react';
import { HiOutlineChatAlt } from 'react-icons/hi';

const Answer = () => {
  return (
    <div className='mt-2 mb-2'>
      <h1 className='text-center font-bold text-xl md:text-2xl'>Not found the answer you were after?</h1>
      <div className='bg-gray-200'>
        <div className='flex flex-col items-center justify-center mt-2'>
          <HiOutlineChatAlt className='text-2xl mb-2 mt-2' />
          <p className='text-center'>The quickest way to get in touch</p>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='bg-white font-bold hover:bg-gray-400 px-9 py-2 rounded-md border border-black mb-3'>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Answer;
