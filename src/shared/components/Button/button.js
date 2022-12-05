import React from 'react';

const Button = ({ text, onClick, inverted, type }) => {
  return (
    <>
      {!inverted && (
        <button
          type={type}
          onClick={onClick}
          className='text-xl text-white border-solid border-teal-600 border-2 w-1/3 p-3 my-5 hover:bg-teal-600 transition-colors duration-300'>
          {text}
        </button>
      )}

      {inverted && (
        <button
          type={type}
          onClick={onClick}
          className='text-xl bg-teal-600 text-white border-solid border-teal-600 border-2 w-1/3 p-3 my-5 hover:bg-teal-900 hover:border-teal-900 transition-colors duration-300'>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
