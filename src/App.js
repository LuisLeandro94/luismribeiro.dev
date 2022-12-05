import { useEffect, useRef, useState } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import Footer from './shared/components/Footer/footer';
import Header from './shared/components/Header/header';
import Layout from './shared/pages/layout';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);
  const about = useRef(null);
  const skills = useRef(null);
  const home = useRef(null);
  const work = useRef(null);

  const sectionRefs = [home, about, skills, work];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition > 400) {
      return setshowGoTop(true);
    } else if (scrollPosition < 400) {
      return setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  return (
    <div className='min-h-screen h-full bg-gradient-to-b from-neutral-900 to-neutral-700 '>
      <Header sectionRefs={sectionRefs} activeSection={activeSection} />
      <Layout
        active={showGoTop}
        setActive={setshowGoTop}
        sectionRefs={sectionRefs}
      />
      <Footer />
    </div>
  );
}

export default App;
