import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from '../assets/skills.webp';
import ProgressCircle from '../components/ProgressCircle/progressCircle';
import { SkillList } from '../components/Static/skillList';

const Skills = ({ skills }) => {
  return (
    <div ref={skills}>
      <div className='lg:h-screen w-full items-center py-20 px-5 lg:px-32 flex flex-col lg:flex-row justify-center align-middle'>
        <div className='flex flex-col p-6 w-full lg:w-1/2 justify-center order-2 lg:order-1 text-center lg:text-start'>
          <AnimationOnScroll animateIn='animate__slideInLeft'>
            <h2 className='text-3xl text-teal-600 font-bold'>Skills</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__slideInLeft'>
            <p className='text-lg text-white pt-4 font-normal'>
              I enjoy creating things, wether that be websites or applications.
            </p>
          </AnimationOnScroll>
          <div className='grid-container grid grid-cols-4 gap-4 my-5'>
            {SkillList.map((skill, index) => (
              <AnimationOnScroll animateIn='animate__slideInLeft' key={index}>
                <ProgressCircle
                  percentage={skill.percentage}
                  textColor='rgb(115 115 115)'
                  trailColor='rgb(115 115 115)'
                  progressColor='rgb(13 148 136)'
                  mode='butt'
                  rotation='0.5'
                  skill={skill.name}
                />
              </AnimationOnScroll>
            ))}
          </div>
        </div>
        <div className='w-full lg:w-1/2 order-1 lg:order-2'>
          <AnimationOnScroll
            animateIn='animate__slideInRight'
            className='h-full'>
            <div className='bg-dots h-full p-4 bg-100 bg-no-repeat mr-none w-full lg:w-4/5'>
              <div className='w-full h-full m-0 p-0 clip-right flex justify-center items-center overflow-hidden'>
                <img
                  src={Image}
                  alt='Luis Ribeiro'
                  className='w-full h-full min-w-full min-h-full shrink-0 object-cover'
                />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Skills;
