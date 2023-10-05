import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/useDispatch';
import {
  FormContainer,
  Field,
  FormField,
  ErrorIcon,
  CorrectIcon,
  FormTitle,
  ErrorTag,
  CorrectTag,
  IconContainer,
} from 'components/LoginForm/LoginForm.styled';

import { resetPassword } from 'redux/user/operations';
import { toast } from 'react-toastify';

import { PasswordResetSchema } from './PasswordResetSchema';
import { Form, SubmitBtn } from './PasswordResetForm.styled';
import { useNavigate } from 'react-router-dom';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';

const initialState = { email: '' };

const PasswordResetForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={initialState}
          onSubmit={(values, actions) => {
            dispatch(resetPassword({ email: values.email }))
              .then(data => {
                if (data.payload?.error) {
                  throw new Error(`Email not found`);
                }
                toast.success(`Password reset email sent to ${values.email}`);
                navigate('/login', { replace: true });
                actions.resetForm();
              })
              .catch(error => {
                toast.error(error.message);
              });
          }}
          validationSchema={PasswordResetSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <FormTitle>Reset password</FormTitle>
              <FormField
                htmlFor="email"
                style={{
                  color:
                    (touched.email && errors.email && '#E74A3B') ||
                    (touched.email && !errors.email && '#3CBC81') ||
                    'inherit',
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

              <SubmitBtn type="submit">Reset password</SubmitBtn>
            </Form>
          )}
        </Formik>
        <AuthNavigate navigateTo="/login">Log In</AuthNavigate>
      </FormContainer>
    </>
  );
};

export default PasswordResetForm;
