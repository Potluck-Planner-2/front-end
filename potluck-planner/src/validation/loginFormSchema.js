import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(4, 'Current username is too short')
    .required('Your username is required'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password as entered is too short')
    .required('Your password is required'),
});

export default loginFormSchema;
