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
} from '../../components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import AuthNavigate from 'components/AuthNavigate';
import { loginFormSchema } from '../../components/LoginForm/loginFormSchema';

import GooseRocket from 'images/png/goose-rocket-login/goose-login.png';
import GooseRocketRetina from 'images/png/goose-rocket-login/goose-login@2x.png';

const PasswordResetPage = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Formik
        initialValues={{ email: '' }}
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
            <FormTitle>Reset password</FormTitle>
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

            <SubmitBtn type="submit">
              Reset password
              <ButtonIcon />
            </SubmitBtn>
          </Form>
        )}
      </Formik>
      <GooseIMG
        srcset={`${GooseRocket} 1x, ${GooseRocketRetina} 2x`}
        src={`${GooseRocket}`}
        alt="goose"
      />
    </FormContainer>
  );
};

export default PasswordResetPage;
