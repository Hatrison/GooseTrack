import { Formik } from 'formik';
import { useState } from 'react';
import {
  Field,
  Form,
  Label,
  PasswordWrap,
  SubmitBtn,
  TitleForm,
  ToggleHidePassword,
  IconButton,
  ErrorMessage
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate';
import { toast } from 'react-toastify';
import { RegisterValidSchema } from './RegisterValidSchema';
import { ReactComponent as ShowIcon } from 'images/svg/show.svg';
import { ReactComponent as HideIcon } from 'images/svg/hide.svg';
import { useNavigate } from 'react-router';

const initialState = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();
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
              navigate('/', { replace: true });
            })
            .catch(error => toast.error(`Error: ${'Registartion failed'}`));
        }}
        validationSchema={RegisterValidSchema}
      >
        {() => (
          <Form>
            <TitleForm>Sign Up</TitleForm>
            <Label>
              Name
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Label>
            <ErrorMessage name="email" component="span" />
            <Label>
              Email
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </Label>
            <ErrorMessage name="email" component="span" />
            <Label>
              Password
              <PasswordWrap>
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <ToggleHidePassword type="button" onClick={handleShowPassword}>
                  {showPassword ? (
                    <ShowIcon style={{ marginLeft: '10px' }} />
                  ) : (
                    <HideIcon style={{ marginLeft: '10px' }} />
                  )}
                </ToggleHidePassword>
              </PasswordWrap>
            </Label>
            <ErrorMessage name="password" component="span" />

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
