import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from '../assets/luis_photo.webp';
import Button from '../components/Button/button';

const About = ({ about }) => {
  return (
    <div
      className='lg:h-screen w-full items-center py-20 px-5 lg:px-32 flex flex-col lg:flex-row justify-center align-middle'
      ref={about}>
      <div className='w-full lg:w-1/2'>
        <AnimationOnScroll animateIn='animate__fadeInLeft' className='h-full'>
          <div className='bg-dots h-full p-4 bg-100 bg-no-repeat mr-0 w-full lg:w-4/5'>
            <div className='w-full h-full m-0 p-0 clip-left flex justify-center items-center overflow-hidden'>
              <img
                src={Image}
                alt='Luis Ribeiro'
                className='h-full w-full min-w-full min-h-full shrink-0 object-cover'
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='flex flex-col p-6 w-full lg:w-1/2 justify-center text-center lg:text-start'>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <h2 className='text-3xl text-teal-600 font-bold '>About Me</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__fadeInRight'>
          <p className='text-lg text-white pt-4 font-normal'>
            Since a very young age, I've always loved technology and, in
            particular computers. I've always dreamt about learning how the
            magic box worked. Now, I was finally able to pursue my dream and
            become a developer. I enrolled in a Web Development and Multimedia
            course @IPCA in 2020 and started working on side projects to sharpen
            my skills. <br /> Today, I am a Fullstack Developer, working with
            React, SQL, .Net, and a lot more technologies. I'm always on the
            hunt for new things to learn and new experiences that can develop me
            as a person and make me a better developer.
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
