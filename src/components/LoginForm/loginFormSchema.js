import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('This is an ERROR email')
    .required('This field is required'),
  password: Yup.string('Enter your password')
  .matches( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "This is an ERROR password")
  .required('This field is required'),
});