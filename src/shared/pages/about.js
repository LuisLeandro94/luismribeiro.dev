import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from '../assets/luis_photo.webp';
import Button from '../components/Button/button';

const About = ({ about }) => {
  return (
    <div
      className='h-screen w-full py-20 px-32 flex flex-row justify-center align-middle'
      ref={about}>
      <div className='w-1/2'>
        <AnimationOnScroll animateIn='animate__fadeInLeft' className='h-full'>
          <div className='bg-dots h-full p-4 bg-100 bg-no-repeat mr-none w-4/5'>
            <div className='w-full h-full m-0 p-0 clip-left flex justify-center items-center overflow-hidden'>
              <img
                src={Image}
                alt='Luis Ribeiro'
                className='min-w-full min-h-full shrink-0 object-cover'
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='flex flex-col p-6 w-1/2 justify-center'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <h2 className='text-3xl text-teal-600 font-bold'>About Me</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <p className='text-lg text-white pt-4 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <Button
            text='Download CV'
            onClick={() => window.open('../assets/luis.resume.pdf')}
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default About;
