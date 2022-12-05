import React from 'react';
import { MenuList } from './menuList';

const Header = ({ sectionRefs, activeSection }) => {
  const handleClick = (section) => {
    const ref =
      section === 'about'
        ? sectionRefs[1]
        : section === 'home'
        ? sectionRefs[0]
        : section === 'skills'
        ? sectionRefs[2]
        : section === 'work'
        ? sectionRefs[3]
        : '';
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='w-full py-6 px-32 top-0 fixed bg-neutral-900 z-10'>
      <ul className='list-none flex-row flex '>
        {MenuList.map((item, index) => (
          <li
            key={index}
            className={
              activeSection === index
                ? 'pr-10 font-semibold App-navigation-item App-navigation-item--active'
                : 'pr-10 font-semibold App-navigation-item'
            }>
            <button
              className=' text-xl cursor-pointer hover:text-teal-600 transition-colors duration-300'
              onClick={() => handleClick(item.title)}>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
