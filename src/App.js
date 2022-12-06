import { useEffect, useRef, useState } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import Alert from './shared/components/Alert/alert';
import Footer from './shared/components/Footer/footer';
import Header from './shared/components/Header/header';
import Layout from './shared/pages/layout';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState({});
  const about = useRef(null);
  const skills = useRef(null);
  const home = useRef(null);
  const work = useRef(null);
  const contacts = useRef(null);

  const sectionRefs = [home, about, skills, work, contacts];

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
      {showAlert && (
        <Alert title={title} text={text} setShowAlert={setShowAlert} />
      )}
      <Layout
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        active={showGoTop}
        setActive={setshowGoTop}
        sectionRefs={sectionRefs}
      />
      <Footer />
    </div>
  );
}

export default App;
