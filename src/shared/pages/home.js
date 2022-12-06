import React from 'react';
import Github from '../components/Static/Github';
import Instagram from '../components/Static/Instagram';
import Linkedin from '../components/Static/Linkedin';
import Logo from '../components/Static/Logo';
import Twitter from '../components/Static/Twitter';

const Home = ({ home }) => {
  return (
    <>
      <div
        className='h-screen w-full py-20 px-5 lg:px-32 flex flex-col justify-center'
        ref={home}>
        <Logo />
        <p className='px-0 text-white text-2xl py-0 pt-3 demo-typewriter'>
          <span>Junior Fullstack Developer</span>
        </p>
        <ul className='list-none flex flex-row justify-start pt-8 pb-5'>
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
      </div>
    </>
  );
};

export default Home;
