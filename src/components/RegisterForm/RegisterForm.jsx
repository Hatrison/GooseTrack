import { Formik } from 'formik';
import { useState } from 'react';
import { Field, Form, Label, SubmitBtn, TitleForm,
  ToggleHidePassword,} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';
import { toast } from 'react-toastify';

import { ReactComponent as ShowIcon } from 'images/svg/show.svg';
import { ReactComponent as HideIcon } from 'images/svg/hide.svg';
import { ReactComponent as IconButton } from 'images/svg/buttonLogReg.svg';

const initialState = { name: '', email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          dispatch(
            registerUser({
              email: values.email,
              password: values.password,
            })
          )
            .then(data => {
              if (data.error) {
                throw new Error(data.payload);
              }
              actions.resetForm();
              return dispatch(
                loginUser({
                  email: values.email,
                  password: values.password,
                })
              );
            })
            .then(loginData => {
              if (loginData.error) {
                throw new Error(loginData.payload);
              }
              toast.success('Registration successful', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
              });
            })
            .catch(error => {
              toast.error('Registration failed', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
              });
            });
        }}
      >
        {() => (
          <Form>
            <TitleForm>Sign Up</TitleForm>
            <Label>
              Name
              <Field type="name" name="name"  placeholder="Enter your name"/>
            </Label>
            <Label>
              Email
              <Field type="email" name="email"  placeholder="Enter your e-mail" />
            </Label>
            <Label>
              Password
              <Field type={showPassword ? 'text' : 'password'} name="password"  placeholder="Enter your password"
              />
              <ToggleHidePassword type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <ShowIcon style={{ marginLeft: '10px' }} />
                ) : (
                  <HideIcon style={{ marginLeft: '10px' }} />
                )}
              </ToggleHidePassword>
            </Label>
          
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
