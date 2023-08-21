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
} from '../LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';

import { changePassword } from 'redux/user/operations';
import { toast } from 'react-toastify';
import AuthNavigate from 'components/AuthNavigate';
import { loginFormSchema } from '../LoginForm/loginFormSchema';

import GooseRocket from 'images/png/goose-rocket-login/goose-login.png';
import GooseRocketRetina from 'images/png/goose-rocket-login/goose-login@2x.png';

const initialState = { password: '', repeatedPassword: '' };

const ChangePasswordForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={initialState}
          onSubmit={(values, actions) => {
            dispatch(changePassword({ newPassword: values.password }))
              .then(data => {
                if (data.payload.name) {
                }
                if (data.error) {
                  throw new Error(`Something went wrong`);
                }
                actions.resetForm();
              })
              .catch(error => {
                toast.error(error.message);
              });
          }}
          validationSchema={loginFormSchema}
        >
          {({ errors, touched, values }) => (
            <Form>
              <FormField
                htmlFor="password"
                style={{
                  color:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81'),
                }}
              >
                New password
              </FormField>
              <IconContainer>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your new password"
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

              <FormField
                htmlFor="repeatedPassword"
                style={{
                  color:
                    (touched.password && errors.password && '#E74A3B') ||
                    (touched.password && !errors.password && '#3CBC81'),
                }}
              >
                Repeat password
              </FormField>
              <IconContainer>
                <Field
                  type="password"
                  name="repeatedPassword"
                  placeholder="Repeat your new password"
                  style={{
                    borderColor:
                      (touched.password && errors.password && '#E74A3B') ||
                      (touched.password && !errors.password && '#3CBC81'),
                  }}
                />
                {touched.repeatedPassword && errors.repeatedPassword && (
                  <ErrorIcon />
                )}
                {touched.repeatedPassword && !errors.repeatedPassword && (
                  <CorrectIcon />
                )}
              </IconContainer>

              {values.password !== values.repeatedPassword && (
                <ErrorTag>The passwords must be the same</ErrorTag>
              )}
              {values.password === values.repeatedPassword && (
                <CorrectTag>OK</CorrectTag>
              )}

              <SubmitBtn type="submit">
                Change password
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
    </>
  );
};

export default ChangePasswordForm;
