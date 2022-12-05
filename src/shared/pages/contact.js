import React, { useState } from 'react';
import Button from '../components/Button/button';
import Input from '../components/Input/input';
import TextArea from '../components/TextArea/textArea';

const Contact = ({ contacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div
      className='h-screen w-full py-40 px-40 flex flex-row justify-center align-middle select-none bg-pattern'
      ref={contacts}>
      <div className='w-full bg-white flex flex-row justify-center align-middle text-center items-center'>
        {console.log(name, email, message)}

        <div className='w-1/3 p-10 text-start text-semibold text-neutral-500 text-4xl'>
          Get in touch.
          <p>I would like to hear from you.</p>
        </div>
        <div className='w-2/3 p-10 flex flex-col justify-start text-start'>
          <p className='text-3xl text-teal-600 text-bold'>Get in Touch</p>
          <div>
            <form>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                value={name}
                onChange={setName}
              />
              <Input
                id='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={setEmail}
              />
              <TextArea
                id='message'
                placeholder='Message'
                value={message}
                onChange={setMessage}
              />
              <Button
                text='Send Message'
                onClick={() => console.log('yo!')}
                inverted
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
