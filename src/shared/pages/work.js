import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  AiFillGithub,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { Projects } from '../components/Static/projects';

const Work = ({ work }) => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div
      className='h-screen w-full py-20 px-32 flex flex-row justify-center align-middle select-none'
      ref={work}>
      <div className='w-1/2 relative h-full'>
        <AnimationOnScroll animateIn='animate__slideInLeft' className='h-full'>
          <div className='bg-dots h-full p-4 bg-100 bg-no-repeat w-11/12 m-0 h-full'>
            <div className='w-full h-full m-0 p-0 clip-right flex justify-center items-center overflow-hidden'>
              <img
                src={Projects[currentProject].image}
                alt='Luis Ribeiro'
                className='min-w-full min-h-full shrink-0 '
              />
              <div
                className={
                  currentProject === 0
                    ? 'absolute w-11/12 h-full top-0 flex justify-end align-middle text-center items-center p-4 '
                    : 'absolute w-11/12 h-full top-0 flex justify-between align-middle text-center items-center p-4 '
                }>
                {currentProject !== 0 && (
                  <span className='w-1/6 text-center align-middle justify-center items-center flex right-0 bg-neutral-500 cursor-pointer'>
                    <AiOutlineArrowLeft
                      onClick={() => setCurrentProject(currentProject - 1)}
                      className='text-5xl text-teal-500 m-2'
                    />
                  </span>
                )}
                {currentProject !== Projects.length - 1 && (
                  <span className='w-1/6 text-center align-middle justify-center items-center flex right-0 bg-neutral-500 cursor-pointer'>
                    <AiOutlineArrowRight
                      onClick={() => setCurrentProject(currentProject + 1)}
                      className='text-5xl text-teal-500 m-2'
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      <div className='flex flex-col p-6 w-1/2 justify-center'>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <h2 className='text-3xl text-teal-600 font-bold'>Works</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <h3 className='text-xl text-teal-600 font-semibold'>
            {Projects[currentProject].name}
          </h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <p className='text-lg text-white pt-4 font-normal'>
            {Projects[currentProject].description}
          </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__slideInRight'>
          <div className='flex flex-row justify-start w-full my-5'>
            {Projects[currentProject].languages.map((language, index) => (
              <span
                className='bg-neutral-500 text-teal-500 text-xs font-semibold mr-2 px-2.5 py-2.5 rounded dark:bg-neutral-600 dark:text-teal-500'
                key={index}>
                {language}
              </span>
            ))}
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <div className='flex flex-row justify-start w-full'>
            {Projects[currentProject].links.map((link, index) => (
              <span key={index}>
                {link.title === 'Github' ? (
                  <a href={link.url} key={index}>
                    <AiFillGithub className='text-4xl text-neutral-500 hover:text-neutral-800 transition-colors duration-300' />
                  </a>
                ) : (
                  <a href={link.url}>
                    <TbWorld className='text-4xl text-neutral-500 hover:text-neutral-800 transition-colors duration-300' />
                  </a>
                )}
              </span>
            ))}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Work;
