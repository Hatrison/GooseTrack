import * as Yup from 'yup';

const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

export const RegisterValidSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .matches(
      passwordMatches,
      'Password must contain lowecase letters, uppercase letters and numbers'
    )
    .required('Required'),
});
