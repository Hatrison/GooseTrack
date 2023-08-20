import { Formik } from 'formik';
import {
  FormContainer,
  Field,
  Form,
  FormField,
  ButtonIcon,
  ErrorIcon,
  CorrectIcon,
  FormTitle,
  SubmitBtn,
  GooseIMG,
  ErrorTag,
  CorrectTag,
  IconContainer,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import AuthNavigate from 'components/AuthNavigate';
import { loginFormSchema } from './loginFormSchema';

import GooseRocket from 'images/png/goose-rocket-login/goose-login.png';
import GooseRocketRetina from 'images/png/goose-rocket-login/goose-login@2x.png';

const initialState = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={initialState}
          onSubmit={(values, actions) => {
            dispatch(
              loginUser({ email: values.email, password: values.password })
            )
              .then(data => {
                if (data.payload.name) {
                }
                if (data.error) {
                  throw new Error(`Your email or password is incorrect`);
                }
                actions.resetForm();
              })
              .catch(error => {
                toast.error(error.message);
              });
          }}
          validationSchema={loginFormSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <FormTitle>Log In</FormTitle>
              <FormField
                htmlFor="email"
                style={{
                  color:
                    (touched.email && errors.email && '#E74A3B') ||
                    (touched.email && !errors.email && '#3CBC81'),
                }}
              >
                Email
              </FormField>
              <IconContainer>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your email"
                  style={{
                    borderColor:
                      (touched.email && errors.email && '#E74A3B') ||
                      (touched.email && !errors.email && '#3CBC81'),
                  }}
                />
                {touched.email && errors.email && <ErrorIcon />}
                {touched.email && !errors.email && <CorrectIcon />}
              </IconContainer>

              {touched.email && errors.email && (
                <ErrorTag>Invalid email format</ErrorTag>
              )}
              {touched.email && !errors.email && (
                <CorrectTag>Valid email format</CorrectTag>
              )}

              <FormField
                htmlFor="password"
                style={{
                  color:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81'),
                }}
              >
                Password
              </FormField>
              <IconContainer>
                <Field
                  type="password"
                  name="password"
                  placeholder="Your password"
                  style={{
                    borderColor:
                      (touched.password && errors.password && '#E74A3B') ||
                      (touched.password && !errors.password && '#3CBC81'),
                  }}
                />
                {touched.password && errors.password && <ErrorIcon />}
                {touched.password && !errors.password && <CorrectIcon />}
              </IconContainer>

              {touched.password && errors.password && (
                <ErrorTag>
                  Password must contain lowecase letters, uppercase letters and
                  numbers
                </ErrorTag>
              )}
              {touched.password && !errors.password && (
                <CorrectTag>Valid password format</CorrectTag>
              )}

              <AuthNavigate navigateTo='/password'>Forgot your password?</AuthNavigate>

              <SubmitBtn type="submit">
                Log in
                <ButtonIcon />
              </SubmitBtn>
            </Form>
          )}
        </Formik>
        <AuthNavigate navigateTo="/register">Sign up</AuthNavigate>
        <GooseIMG
          srcset={`${GooseRocket} 1x, ${GooseRocketRetina} 2x`}
          src={`${GooseRocket}`}
          alt="goose"
        />
      </FormContainer>
    </>
  );
};

export default LoginForm;
