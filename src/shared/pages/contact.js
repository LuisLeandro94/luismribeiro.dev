import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ContactForm from '../components/ContactForm/contactForm';

const Contact = ({
  contacts,
  title,
  setTitle,
  text,
  setText,
  showAlert,
  setShowAlert,
}) => {
  return (
    <div
      className='lg:h-screen w-full p-10 lg:py-40 lg:px-40 flex flex-row justify-center align-middle select-none bg-pattern'
      ref={contacts}>
      <AnimationOnScroll animateIn='animate__fadeInUp' className='w-full'>
        <div className='w-full bg-white flex flex-col lg:flex-row justify-center align-middle text-center items-center h-full'>
          <div className=' w-full lg:w-1/2 p-10 text-start text-semibold text-neutral-500 text-5xl'>
            <AnimationOnScroll
              animateIn='animate__backInLeft'
              className='text-center lg:text-start'>
              <p>Get in touch.</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn='animate__backInLeft'
              className='text-center lg:text-start'>
              <p>I would like to hear from you.</p>
            </AnimationOnScroll>
          </div>
          <div className='w-full lg:w-1/2 p-10 flex flex-col justify-start text-start'>
            <AnimationOnScroll animateIn='animate__backInDown'>
              <p className='text-3xl text-teal-600 text-bold text-center lg:text-start'>
                Get in Touch
              </p>
            </AnimationOnScroll>
            <div>
              <ContactForm
                title={title}
                setTitle={setTitle}
                text={text}
                setText={setText}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
              />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
