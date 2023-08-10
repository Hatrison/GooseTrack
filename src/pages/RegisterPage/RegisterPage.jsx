import { Сontainer, ImageContainer, Text } from './RegisterPage.styled';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate';
import { ReactComponent as Message } from 'images/svg/message.svg';
import { ReactComponent as Goose } from 'images/svg/Goose.svg';

export default function RegisterPage() {
  const redirectLogin = '/login';

  return (
    <Сontainer>
      <RegisterForm />
      <AuthNavigate redirect={redirectLogin} nameLink="Log in" />
      <ImageContainer>
        <Text>
          Quickly
          <span style={{ fontStyle: 'italic', color: '#3E85F3' }}>
            register
          </span>{' '}
          and familiarize yourself with the application!
        </Text>
        <Message style={{ position: 'absolute', top: '0px', right: '130px' }} />
        <Goose style={{ position: 'absolute', bottom: '0px', left: '50px' }} />
      </ImageContainer>
    </Сontainer>
  );
}
