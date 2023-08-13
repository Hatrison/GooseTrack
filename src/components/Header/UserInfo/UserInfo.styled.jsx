import styled from 'styled-components';
export const UserWrap = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
  @media screen and (max-width: 240px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const UserName = styled.div`
  font-family: 'InterBold', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.headerBurgerIcon};
  @media screen and (max-width: 240px) {
    font-size: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentColor};
  position: relative;
  @media screen and (max-width: 240px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarFirstLetter = styled.span`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 30px;

  color: ${({ theme }) => theme.buttontextColor};
  @media screen and (max-width: 240px) {
    font-size: 15px;
  }
`;

export const UserImage = styled.img`
  border-radius: 50%;
  position: absolute;
`;
