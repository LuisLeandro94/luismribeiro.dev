import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  AiFillGithub,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import sanityClient from '../../client';

const Work = ({ work }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      projectName,
      projectDescription,
      slug,
      projectImage{
        asset->{
          _id,
          url
        },
      },
      projectLanguages,
      projectLinks,
      hexCode,
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div
      className='lg:h-screen w-full items-center py-20 px-5 lg:px-32 flex flex-col lg:flex-row justify-center align-middle'
      ref={work}>
      <div className='w-full lg:w-1/2 relative h-full'>
        <AnimationOnScroll animateIn='animate__slideInLeft' className='h-full'>
          <div className='bg-dots h-full p-4 bg-100 bg-no-repeat m-0 w-full lg:w-4/5'>
            <div className='w-full h-full m-0 p-0 clip-right flex justify-center items-center overflow-hidden'>
              <img
                src={projects[currentProject]?.projectImage?.asset?.url}
                alt='Luis Ribeiro'
                className='min-w-full min-h-full shrink-0 object-cover'
              />
              <div
                className={
                  currentProject === 0
                    ? 'absolute w-full lg:w-10/12 h-full top-0 flex justify-end align-middle text-center items-center p-4 '
                    : 'absolute w-full lg:w-10/12 h-full top-0 flex justify-between align-middle text-center items-center p-4 '
                }>
                {currentProject !== 0 && (
                  <span className='w-1/6 text-center align-middle justify-center items-center flex right-0 bg-neutral-500 cursor-pointer'>
                    <AiOutlineArrowLeft
                      onClick={() => setCurrentProject(currentProject - 1)}
                      className='text-5xl text-teal-500 m-2'
                    />
                  </span>
                )}
                {currentProject !== projects?.length - 1 && (
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
      <div className='flex flex-col p-6 w-full lg:w-1/2 justify-center lg:text-start text-center'>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <h2 className='text-3xl text-teal-600 font-bold pb-5'>Works</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <h3 className='text-xl text-teal-600 font-semibold'>
            {projects[currentProject]?.projectName}
          </h3>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <p className='text-lg text-white pt-4 font-normal'>
            {projects[currentProject]?.projectDescription}
          </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn='animate__slideInRight'>
          <div className='flex flex-row justify-center lg:justify-start w-full my-5'>
            {projects[currentProject]?.projectLanguages?.map(
              (language, index) => (
                <span
                  className='bg-neutral-500 text-teal-500 text-xs font-semibold mr-2 px-2.5 py-2.5 rounded dark:bg-neutral-600 dark:text-teal-500'
                  key={index}>
                  {language}
                </span>
              )
            )}
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__slideInRight'>
          <div className='flex flex-row justify-center lg:justify-start w-full'>
            {projects[currentProject]?.projectLinks?.map((link, index) => (
              <span key={index}>
                {link?.name === 'Github' ? (
                  <a
                    href={link?.url}
                    rel='noopener noreferrer'
                    target='_blank'
                    key={index}>
                    <AiFillGithub className='text-4xl text-neutral-500 hover:text-neutral-800 transition-colors duration-300' />
                  </a>
                ) : (
                  <a href={link?.url}>
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
