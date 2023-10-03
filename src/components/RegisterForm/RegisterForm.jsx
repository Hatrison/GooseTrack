import { Formik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from 'hooks/useDispatch';
import {
  Field,
  Form,
  FormField,
  PasswordWrap,
  SubmitBtn,
  TitleForm,
  ToggleHidePassword,
  IconButton,
  Error,
  ErrorTag,
  CorrectTag,
  IconContainer,
  ErrorIcon,
  CorrectIcon,
} from './RegisterForm.styled';

import { registerUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate';
import { toast } from 'react-toastify';
import { RegisterValidSchema } from './RegisterValidSchema';

import { ReactComponent as ShowIcon } from 'images/svg/show.svg';
import { ReactComponent as HideIcon } from 'images/svg/hide.svg';

import { useNavigate } from 'react-router';

const initialState = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={values => {
          dispatch(registerUser(values))
            .then(data => {
              if (data.error) throw new Error(data.payload);
              toast.success(`Success: verification email was sent`, {
                autoClose: 5000,
              });
              navigate('/', { replace: true });
            })
            .catch(error => toast.error(`Error: ${'Registration failed'}`));
        }}
        validationSchema={RegisterValidSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <TitleForm>Sign Up</TitleForm>

            <FormField
              htmlFor="name"
              style={{
                color:
                  (touched.name && errors.name && '#E74A3B') ||
                  (touched.name && !errors.name && '#3CBC81'),
              }}
            >
              Name
            </FormField>
            <IconContainer>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                style={{
                  borderColor:
                    (touched.name && errors.name && '#E74A3B') ||
                    (touched.name && !errors.name && '#3CBC81'),
                }}
              />
              {touched.name && errors.name && <ErrorIcon />}
              {touched.name && !errors.name && <CorrectIcon />}
            </IconContainer>

            {touched.name && errors.name && (
              <ErrorTag>This is an ERROR name</ErrorTag>
            )}
            {touched.name && !errors.name && (
              <CorrectTag>This is an CORRECT name</CorrectTag>
            )}

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
                placeholder="Enter your email"
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
              <ErrorTag>This is an ERROR email</ErrorTag>
            )}
            {touched.email && !errors.email && (
              <CorrectTag>This is an CORRECT email</CorrectTag>
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
            <PasswordWrap>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                style={{
                  borderColor:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81'),
                }}
              />
              <ToggleHidePassword type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <ShowIcon style={{ marginLeft: '10px' }} />
                ) : (
                  <HideIcon style={{ marginLeft: '10px' }} />
                )}
              </ToggleHidePassword>
            </PasswordWrap>

            {touched.password && errors.password && (
              <ErrorTag>
                Password must contain lowecase letters, uppercase letters and
                numbers
              </ErrorTag>
            )}
            {touched.password && !errors.password && (
              <CorrectTag>This is an CORRECT password</CorrectTag>
            )}

            <SubmitBtn type="submit">
              Sign Up
              <IconButton
                style={{ width: '13px', height: '13px', marginLeft: '13px' }}
              />
            </SubmitBtn>
          </Form>
        )}
      </Formik>
      <AuthNavigate navigateTo="/login">Log In</AuthNavigate>
    </>
  );
};

export default RegisterForm;
