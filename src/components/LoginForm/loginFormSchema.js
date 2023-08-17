import * as Yup from 'yup';

const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const loginFormSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('This is an ERROR email')
    .required('This field is required'),
  password: Yup.string('Enter your password')
  .matches( passwordMatches, 'Password must contain lowecase letters, uppercase letters and numbers')
  .required('This field is required'),
});