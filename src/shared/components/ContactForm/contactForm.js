import emailjs from 'emailjs-com';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { validate } from '../../helpers/helper';
import Button from '../Button/button';
import Input from '../Input/input';
import TextArea from '../TextArea/textArea';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const ContactForm = ({ setShowAlert, setTitle, setText }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    let validateObject = {
      from_name: name.value,
      from_email: email.value,
      message: message.value,
    };

    const errors = validate(validateObject);
    if (Object.keys(errors).length === 0) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, validateObject, USER_ID).then(
        (result) => {
          setTitle('Success');
          setText({ name: 'Thank you for your contact!' });
          setShowAlert(true);
        },
        (error) => {
          setTitle('Error');
          setText({ name: 'Oops something went wrong!' });
          setShowAlert(true);
        }
      );
      debugger;
      e.target.reset();
    } else {
      setTitle('Error');
      setText(errors);
      setShowAlert(true);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <form onSubmit={onSubmit}>
      <AnimationOnScroll animateIn='animate__backInRight'>
        <Input id='name' type='text' placeholder='Name' />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__backInRight'>
        <Input id='email' type='text' placeholder='Email' />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__backInRight'>
        <TextArea id='message' placeholder='Message' />
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__backInUp'>
        <Button text='Send Message' type='submit' inverted />
      </AnimationOnScroll>
    </form>
  );
};

export default ContactForm;
