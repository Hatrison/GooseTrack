import { Formik } from 'formik';
import { Field, Form, Label, SubmitBtn, TitleForm } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';

import { ReactComponent as IconButton } from 'images/svg/buttonLogReg.svg';

const initialState = { email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          dispatch(registerUser(values));
          actions.resetForm();
        }}
      >
        <Form>
        <TitleForm>Sign Up</TitleForm>
          <Label>
            Email
            <Field type="email" name="email" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" />
          </Label>
          
          <SubmitBtn type="submit">Sign Up <IconButton
          style={{ width: '13px', height: '13px', marginLeft: '13px' }}
        /></SubmitBtn>
        </Form>
      </Formik>
      <AuthNavigate navigateTo="/login">Log In</AuthNavigate>
    </>
  );
};

export default RegisterForm;
