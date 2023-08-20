import RegisterForm from 'components/RegisterForm/RegisterForm';
import {
  Сontainer,
  ImageContainer,
  Text,
  Goose,
  Message,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <Сontainer>
      <RegisterForm />

      <ImageContainer>
        <Text>
          Quickly
          <span style={{ fontStyle: 'italic', color: '#3E85F3' }}>
            register
          </span>{' '}
          and familiarize yourself with the application!
        </Text>
        <Message />
        <Goose />
      </ImageContainer>
    </Сontainer>
  );
};

export default RegisterPage;
