import styled from 'styled-components';
import { ReactComponent as Goose } from 'images/svg/gooseMotivator.svg';

export const PageInfoWrap = styled.div`
  display: flex;
  margin: auto 0;
  gap: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GooseMotivator = styled(Goose)`
  height: 60px;
  width: 64px;
`;

export const LocationName = styled.h2`
  font-family: 'InterBold', sans-serif;
  font-size: 34px;
  color: ${({ theme }) => theme.mainTextColor};
`;

export const MotivationPhrase = styled.div`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
`;

export const MotivationStart = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

export const MotivationEnd = styled.span`
  color: ${({ theme }) => theme.mainTextColor};
`;
