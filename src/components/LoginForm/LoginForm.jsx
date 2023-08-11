import { Formik } from 'formik';
import {  Wrapper,
  FormContainer,Field, Form, FormField, ErrorMessage, FormTitle, SubmitBtn, GooseIMG, Svg } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate';
import { loginFormSchema } from './loginFormSchema';


import GooseRocket from 'images/png/goose-rocket-login/goose-login.png';
import GooseRocketRetina from 'images/png/goose-rocket-login/goose-login@2x.png';

const initialState = { email: '', password: '' };

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
   <Wrapper>
   <FormContainer>
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          dispatch(loginUser(values));
          actions.resetForm();
        }}
        validationSchema={loginFormSchema}
      >
        <Form >
        <FormTitle>Log In</FormTitle>
        <FormField htmlFor="email">Email</FormField>
          <ErrorMessage name="email" component="span" />
            <Field type="email" name="email" />
          

            <FormField htmlFor="password">Password</FormField>
          <ErrorMessage name="password" component="span" />
            <Field type="password" name="password" />
          

          <SubmitBtn type="submit">Log in</SubmitBtn>
          <Svg style={{ width: '13px', height: '13px', marginLeft: '13px' }}/>
        </Form>
      </Formik>
      <AuthNavigate navigateTo="/register">Sign up</AuthNavigate>
      <GooseIMG
          srcset={`${GooseRocket} 1x, ${GooseRocketRetina} 2x`}
          src={`${GooseRocket}`}
          alt="goose"
        />
         </FormContainer>
    </Wrapper>

    </>
  );
};

export default LoginForm;
