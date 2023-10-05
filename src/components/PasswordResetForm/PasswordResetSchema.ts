import * as Yup from 'yup';

export const PasswordResetSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
});
