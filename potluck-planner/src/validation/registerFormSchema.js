import * as yup from 'yup';

const registerFormSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .min(2, 'First name needs to be two or more characters')
    .max(20, 'First name can not be longer than 20 characters')
    .required('Please enter your first name'),
  last_name: yup
    .string()
    .trim()
    .min(2, 'Last name needs to be two or more characters')
    .max(20, 'Last name can not be longer than 20 characters')
    .required('Please enter your last name'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .trim()
    .required('An email address is required'),
  username: yup
    .string()
    .trim()
    .min(4, 'Your username must be at least four characters long')
    .max(100, 'Your username must be less than 100 characters')
    .required('A username is required'),
  password: yup
    .string()
    .trim()
    .min(4, 'Your password must be at least four characters long')
    .required('A password is required'),
});

export default registerFormSchema;
