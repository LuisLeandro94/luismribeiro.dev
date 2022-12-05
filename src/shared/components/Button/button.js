import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='text-xl text-white border-solid border-teal-600 border-2 w-1/3 p-3 my-5 hover:bg-teal-600 transition-colors duration-300'>
      {text}
    </button>
  );
};

export default Button;
