import React from 'react';
import Image from '../assets/IMG_0232.JPG.png';
import Button from '../components/Button/button';

const About = ({ about }) => {
  return (
    <div
      className='h-screen w-full py-20 px-32 flex flex-row justify-center align-middle'
      ref={about}>
      <div className='w-1/2'>
        <div className='bg-dots p-4 bg-100 bg-no-repeat mr-none w-11/12'>
          <img src={Image} alt='Luis Ribeiro' className='w-5/6 mr-none' />
        </div>
      </div>
      <div className='flex flex-col p-6 w-1/2 justify-center'>
        <h2 className='text-3xl text-teal-600 font-bold'>About Me</h2>
        <p className='text-lg text-white pt-4 font-normal'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button text='Download CV' />
      </div>
    </div>
  );
};

export default About;
