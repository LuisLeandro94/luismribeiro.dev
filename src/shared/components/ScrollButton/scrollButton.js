import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollButton = ({ active, setActive }) => {
  return (
    <button
      className='fixed right-0 bottom-0 mr-10 mb-10'
      style={{ display: active ? 'block' : 'none' }}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
      <BsFillArrowUpCircleFill className='text-teal-500 text-5xl' />
    </button>
  );
};

export default ScrollButton;
