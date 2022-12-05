import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({
  percentage,
  textColor,
  trailColor,
  progressColor,
  mode,
  rotation,
  className,
  skill,
}) => {
  return (
    <div className='text-center '>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: textColor,
          pathColor: progressColor,
          trailColor: trailColor,
          strokeLinecap: mode,
          rotation: rotation,
        })}
        className={className}
      />
      <span className='text-sm text-neutral-500'>{skill}</span>
    </div>
  );
};

export default ProgressCircle;
