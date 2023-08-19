import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 14px;
  padding-top: 18px;
  padding-right: 18px;
  padding-bottom: 10px;
  margin-top: 14px;

  min-width: 335px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.tasksColumnBorder};
  background: ${props => props.theme.mainBackgroundColor};

  @media (min-width: 768px) {
    min-width: 344px;
  }

  @media (min-width: 1440px) {
    min-width: 344px;
  }
`;
