import React, { useState } from 'react';
import { validate } from '../../helpers/helper';
import Alert from '../Alert/alert';
import Button from '../Button/button';
import Input from '../Input/input';
import TextArea from '../TextArea/textArea';

const FORM_ENDPOINT = '';

const ContactForm = ({
  showAlert,
  setShowAlert,
  title,
  setTitle,
  text,
  setText,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    const errors = validate({ name, email, message });

    if (!errors) {
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      console.log(conFom);
      setSubmitted(true);
    } else {
      console.log(errors);
      setTitle('Validation error');
      setText(errors);
      setShowAlert(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input id='name' type='text' placeholder='Name' />
      <Input id='email' type='text' placeholder='Email' />
      <TextArea id='message' placeholder='Message' />
      <Button text='Send Message' type='submit' inverted />
    </form>
  );
};

export default ContactForm;
