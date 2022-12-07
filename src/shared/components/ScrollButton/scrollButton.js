import React from 'react';
import ArrowUp from '../Static/ArrowUp';

const ScrollButton = ({ active }) => {
  return (
    <button
      aria-label='to top button'
      name='toTopButton'
      className='fixed right-0 bottom-0 mr-10 mb-10 arrowUp'
      style={{ display: active ? 'block' : 'none' }}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
      <ArrowUp />
    </button>
  );
};

export default ScrollButton;
