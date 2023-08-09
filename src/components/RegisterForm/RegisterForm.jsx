import { Formik } from 'formik';
import { Field, Form, Label, SubmitBtn } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const initialState = { email: '', password: '' };

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, actions) => {
        dispatch(registerUser(values));
        actions.resetForm();
      }}
    >
      <Form>
        Registration Form
        <Label>
          Email
          <Field type="email" name="email" />
        </Label>
        <Label>
          Password
          <Field type="password" name="password" />
        </Label>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
