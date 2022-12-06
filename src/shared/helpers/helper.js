export const validate = (values) => {
  const errors = {};

  if (!values.from_name) {
    errors.from_name = 'Name is required';
  }
  if (!values.from_email) {
    errors.from_email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.from_email)
  ) {
    errors.from_email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};
