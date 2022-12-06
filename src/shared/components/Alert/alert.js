import React, { useEffect, useState } from 'react';

const Alert = ({ title, text, setShowAlert }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (title === 'Error') {
      setError(true);
    }
  }, []);

  return (
    <div
      className={
        error
          ? 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-10 -translate-x-1/2 left-1/2 w-1/2 z-20'
          : 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-10 -translate-x-1/2 left-1/2 w-1/2 z-20'
      }
      role='alert'>
      <strong className='font-bold'>{title} </strong>
      <p className='block '>{text.name}</p>
      <p className='block '>{text.email}</p>
      <p className='block '>{text.message}</p>

      <span
        className='absolute top-0 bottom-0 right-0 px-4 py-3'
        onClick={() => setShowAlert(false)}>
        <svg
          className={
            error
              ? 'fill-current h-6 w-6 text-red-500'
              : 'fill-current h-6 w-6 text-green-500'
          }
          role='button'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'>
          <title>Close</title>
          <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
        </svg>
      </span>
    </div>
  );
};

export default Alert;
