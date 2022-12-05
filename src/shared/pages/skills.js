import React from 'react';
import Image from '../assets/skills.png';
import ProgressCircle from '../components/ProgressCircle/progressCircle';
import { SkillList } from '../components/Static/skillList';

const Skills = ({ skills }) => {
  return (
    <div ref={skills}>
      <div className='h-screen w-full py-20 px-32 flex flex-row justify-center align-middle'>
        <div className='flex flex-col p-6 w-1/2 justify-center'>
          <h2 className='text-3xl text-teal-600 font-bold'>Skills</h2>
          <p className='text-lg text-white pt-4 font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='grid-container grid grid-cols-4 gap-4 my-5'>
            {SkillList.map((skill, index) => (
              <ProgressCircle
                percentage={skill.percentage}
                textColor='rgb(115 115 115)'
                trailColor='rgb(115 115 115)'
                progressColor='rgb(13 148 136)'
                mode='butt'
                rotation='0.5'
                key={index}
                skill={skill.name}
              />
            ))}
          </div>
        </div>
        <div className='w-1/2'>
          <div className='bg-dots p-4 bg-100 bg-no-repeat mr-none'>
            <img src={Image} alt='Luis Ribeiro' className='w-5/6 mr-none' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
