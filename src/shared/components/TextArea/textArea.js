import React from 'react';

const TextArea = ({ id, placeholder, value, onChange }) => {
  return (
    <>
      <textarea
        id={id}
        rows='4'
        className='mb-5 block p-2.5 w-full text-sm text-neutral-500 rounded-lg border border-neutral-500 focus:ring-teal-600 focus:border-teal-600'
        placeholder={placeholder}
        value={value}
        onChange={onChange}></textarea>
    </>
  );
};

export default TextArea;
