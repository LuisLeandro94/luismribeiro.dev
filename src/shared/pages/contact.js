import React, { useState } from 'react';
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
      <div className='w-full bg-white flex flex-row justify-center align-middle text-center items-center'>
        <div className='w-1/2 p-10 text-start text-semibold text-neutral-500 text-5xl'>
          Get in touch.
          <p>I would like to hear from you.</p>
        </div>
        <div className='w-1/2 p-10 flex flex-col justify-start text-start'>
          <p className='text-3xl text-teal-600 text-bold'>Get in Touch</p>
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
    </div>
  );
};

export default Contact;
