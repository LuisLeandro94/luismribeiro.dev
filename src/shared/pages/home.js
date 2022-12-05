import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import Logo from '../components/Static/Logo';

const Home = ({ home }) => {
  return (
    <>
      <div
        className='h-screen w-full py-20 px-32 flex flex-col justify-center'
        ref={home}>
        <Logo />
        <p className='px-0 text-white text-2xl py-0 pt-3'>
          Junior Fullstack Developer
        </p>
        <ul className='list-none flex flex-row justify-start pt-8 pb-5'>
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
      </div>
    </>
  );
};

export default Home;
