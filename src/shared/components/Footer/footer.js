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
        <li className='px-2'>
          <a
            aria-label='github'
            href='https://github.com/LuisLeandro94'
            rel='noopener noreferrer'
            target='_blank'
            className='icon'>
            <Github />
          </a>
        </li>
        <li className='px-2'>
          <a
            aria-label='linkedin'
            href='https://www.linkedin.com/in/luisleandro94/'
            rel='noopener noreferrer'
            target='_blank'
            className='icon'>
            <Linkedin />
          </a>
        </li>
        <li className='px-2'>
          <a
            aria-label='twitter'
            href='https://twitter.com/jsdevmaycry'
            rel='noopener noreferrer'
            target='_blank'
            className='icon'>
            <Twitter />
          </a>
        </li>
        <li className='px-2'>
          <a
            aria-label='instagram'
            href='https://www.instagram.com/sirluisdealvalade/'
            rel='noopener noreferrer'
            target='_blank'
            className='icon'>
            <Instagram />
          </a>
        </li>
      </ul>
      <span className='text-white'>
        All Rights Reserved © 2022 LuisRibeiroDev
      </span>
    </div>
  );
};

export default Footer;
