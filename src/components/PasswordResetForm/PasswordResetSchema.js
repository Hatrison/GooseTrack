import * as Yup from 'yup';

export const PasswordResetSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Invalid email format')
    .required('This field is required'),
});
