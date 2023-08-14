import { Formik } from 'formik';
import {  
  FormContainer,Field, Form, FormField, ErrorMessage, ButtonIcon, FormTitle, SubmitBtn, GooseIMG} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import AuthNavigate from 'components/AuthNavigate';
import { loginFormSchema } from './loginFormSchema';
import { toast } from 'react-toastify';


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
          dispatch(loginUser({email: values.email,
            password: values.password}))
            .then(data => {
              if (data.error) {
                throw new Error(data.payload);
              }
            })
            .catch(error => {
              toast.error(error.message);
            });
              actions.resetForm();
              
         
          
        }}
        validationSchema={loginFormSchema}
      >
        <Form >
        <FormTitle>Log In</FormTitle>
        <FormField htmlFor="email">Email</FormField>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          

            <FormField htmlFor="password">Password</FormField>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />

          <SubmitBtn type="submit">Log in
          <ButtonIcon
                // style={{ width: '13px', height: '13px', marginLeft: '13px' }}
              />
          </SubmitBtn>
          
        </Form>
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
