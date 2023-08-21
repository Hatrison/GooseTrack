import * as Yup from 'yup';

const passwordMatches = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

export const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string('Enter your password')
    .matches(
      passwordMatches,
      'Password must contain lowecase letters, uppercase letters and numbers'
    )
    .required(),
  confirmPassword: Yup.string('Enter your password')
    .matches(
      passwordMatches,
      'Password must contain lowecase letters, uppercase letters and numbers'
    )
    .required(),
});
