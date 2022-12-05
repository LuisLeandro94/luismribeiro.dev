import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full p-7 bottom-0 flex flex-col justify-center align-middle text-center bg-neutral-900'>
      <span className='align-middle text-white font-semibold pb-5'>
        LuisRibeiroDev
      </span>
      <ul className='list-none flex flex-row justify-center pb-5'>
        <a href='/' className='px-2'>
          <AiFillGithub className='text-neutral-500 hover:text-teal-600 transition-colors duration-300 text-4xl' />
        </a>
        <a href='/' className='px-2'>
          <AiFillLinkedin className='text-neutral-500 hover:text-teal-600 transition-colors duration-300 text-4xl' />
        </a>
        <a href='/' className='px-2'>
          <AiFillTwitterCircle className='text-neutral-500 hover:text-teal-600 transition-colors duration-300 text-4xl' />
        </a>
        <a href='/' className='px-2'>
          <AiFillInstagram className='text-neutral-500 hover:text-teal-600 transition-colors duration-300 text-4xl' />
        </a>
      </ul>
      <span className='text-white'>
        All Rights Reserved © 2022 LuisRibeiroDev
      </span>
    </div>
  );
};

export default Footer;
