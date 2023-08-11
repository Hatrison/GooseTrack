import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string('Enter your password')
  .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Your password is incorrect")
  .required('This field is required'),
});