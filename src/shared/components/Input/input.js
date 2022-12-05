import React from 'react';

const Input = ({ type, id, placeholder, label, value, onChange }) => {
  return (
    <>
      {label && (
        <label
          for={id}
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          {placeholder}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={
          label
            ? 'border border-neutral-500 text-neutral-500 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 '
            : 'border border-neutral-500 text-neutral-500 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 my-5'
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;
