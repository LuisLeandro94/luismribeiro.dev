import React from 'react';
import ScrollButton from '../components/ScrollButton/scrollButton';
import About from './about';
import Home from './home';
import Skills from './skills';
import Work from './work';

const Layout = ({ active, setActive, sectionRefs }) => {
  return (
    <>
      <ScrollButton active={active} setActive={setActive} />
      <Home home={sectionRefs[0]} />
      <About about={sectionRefs[1]} />
      <Skills skills={sectionRefs[2]} />
      <Work work={sectionRefs[3]} />
    </>
  );
};

export default Layout;
