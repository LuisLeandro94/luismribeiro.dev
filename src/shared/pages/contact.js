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
      className='h-screen w-full py-40 px-40 flex flex-row justify-center align-middle select-none bg-pattern'
      ref={contacts}>
      <AnimationOnScroll animateIn='animate__fadeInUp' className='w-full'>
        <div className='w-full bg-white flex flex-row justify-center align-middle text-center items-center h-full'>
          <div className='w-1/2 p-10 text-start text-semibold text-neutral-500 text-5xl'>
            <AnimationOnScroll animateIn='animate__backInLeft'>
              <p>Get in touch.</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__backInLeft'>
              <p>I would like to hear from you.</p>
            </AnimationOnScroll>
          </div>
          <div className='w-1/2 p-10 flex flex-col justify-start text-start'>
            <AnimationOnScroll animateIn='animate__backInDown'>
              <p className='text-3xl text-teal-600 text-bold'>Get in Touch</p>
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
