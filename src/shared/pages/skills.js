import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Image from '../assets/skills.webp';
import ProgressCircle from '../components/ProgressCircle/progressCircle';
import { SkillList } from '../components/Static/skillList';

const Skills = ({ skills }) => {
  return (
    <div ref={skills}>
      <div className='h-screen w-full py-20 px-32 flex flex-row justify-center align-middle'>
        <div className='flex flex-col p-6 w-1/2 justify-center'>
          <AnimationOnScroll animateIn='animate__slideInLeft'>
            <h2 className='text-3xl text-teal-600 font-bold'>Skills</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__slideInLeft'>
            <p className='text-lg text-white pt-4 font-normal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <div className='w-1/2'>
          <AnimationOnScroll
            animateIn='animate__slideInRight'
            className='h-full'>
            <div className='bg-dots h-full p-4 bg-100 bg-no-repeat mr-none w-4/5'>
              <div className='w-full h-full m-0 p-0 clip-right flex justify-center items-center overflow-hidden'>
                <img
                  src={Image}
                  alt='Luis Ribeiro'
                  className='min-w-full min-h-full shrink-0 object-cover'
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
