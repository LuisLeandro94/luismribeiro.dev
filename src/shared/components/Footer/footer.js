import React from 'react';
import Github from '../Static/Github';
import Instagram from '../Static/Instagram';
import Linkedin from '../Static/Linkedin';
import Twitter from '../Static/Twitter';

const Footer = () => {
  return (
    <div className='w-full p-7 bottom-0 flex flex-col justify-center align-middle text-center bg-neutral-900'>
      <span className='align-middle text-white font-semibold pb-5'>
        LuisRibeiroDev
      </span>
      <ul className='list-none flex flex-row justify-center pb-5'>
        <a
          href='https://github.com/LuisLeandro94'
          rel='noopener noreferrer'
          target='_blank'
          className='px-2 icon'>
          <Github />
        </a>
        <a
          href='https://www.linkedin.com/in/luisleandro94/'
          rel='noopener noreferrer'
          target='_blank'
          className='px-2 icon'>
          <Linkedin />
        </a>
        <a
          href='https://twitter.com/jsdevmaycry'
          rel='noopener noreferrer'
          target='_blank'
          className='px-2 icon'>
          <Twitter />
        </a>
        <a
          href='https://www.instagram.com/sirluisdealvalade/'
          rel='noopener noreferrer'
          target='_blank'
          className='px-2 icon'>
          <Instagram />
        </a>
      </ul>
      <span className='text-white'>
        All Rights Reserved © 2022 LuisRibeiroDev
      </span>
    </div>
  );
};

export default Footer;
