import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/useDispatch';
import { changePassword } from 'redux/user/operations';
import { toast } from 'react-toastify';
import { changePasswordSchema } from './changePasswordSchema';
import {
  Form,
  FormField,
  Field,
  IconContainer,
  ErrorIcon,
  CorrectIcon,
  ErrorTag,
  CorrectTag,
  CancelButton,
  StyledButton,
  WrapButton,
} from './ChangePassword.styles';

const initialValues = { password: '', confirmPassword: '' };

const ChangePasswordForm = ({ handlerCloseModal }) => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(changePassword({ newPassword: values.password }))
          .then(data => {
            if (data.error) {
              throw new Error(`Something went wrong`);
            }
            toast.success('Password changed successfully');
            handlerCloseModal();
            actions.resetForm();
          })
          .catch(error => {
            toast.error(error.message);
          });
      }}
      validationSchema={changePasswordSchema}
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
            htmlFor="confirmPassword"
            style={{
              color:
                (touched.confirmPassword &&
                  errors.confirmPassword &&
                  '#E74A3B') ||
                (touched.confirmPassword &&
                  !errors.confirmPassword &&
                  '#3CBC81'),
            }}
            confirmPassword
          >
            Confirm password
          </FormField>
          <IconContainer>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Repeat your new password"
              style={{
                borderColor:
                  (touched.confirmPassword &&
                    errors.confirmPassword &&
                    '#E74A3B') ||
                  (touched.confirmPassword &&
                    !errors.confirmPassword &&
                    '#3CBC81'),
              }}
            />
            {touched.confirmPassword && errors.confirmPassword && <ErrorIcon />}
            {touched.confirmPassword && !errors.confirmPassword && (
              <CorrectIcon />
            )}
          </IconContainer>

          {touched.confirmPassword && errors.confirmPassword && (
            <ErrorTag>Passwords must be the same</ErrorTag>
          )}
          {touched.confirmPassword && !errors.confirmPassword && (
            <CorrectTag>Passwords match</CorrectTag>
          )}

          <WrapButton>
            <StyledButton type="submit">Change</StyledButton>

            <CancelButton type="button" onClick={handlerCloseModal}>
              Cancel
            </CancelButton>
          </WrapButton>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
