import styled from 'styled-components';

export const StyledListTasks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  li {
    cursor: pointer;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;

    padding-top: 2px;
    padding-bottom: 2px;

    text-align: center;
    border-radius: 8px;
    width: 92%;
    transition: scale 250ms linear;

    &:hover,
    &:focus {
      scale: 1.05;
    }
  }

  // .low {
  //   background-color: #ceeefd;
  //   color: #3e85f3;
  // }
  .medium {
    color: #f3b249;
    background-color: #fcf0d4;
  }
  .high {
    color: #ea3d65;
    background-color: #ffd2dd;
  }

  .low {
    color: ${({ theme }) => theme.lowPriorityColor};
    background-color: ${({ theme }) => theme.lowPriorityBackgoundColor};
  }
  // .medium {
  //   color: ${({ theme }) => theme.mediumPriorityColor};
  //   background-color: ${({ theme }) => theme.mediumPriorityBackgroundColor};
  // }
  // .high {
  //   color: ${({ theme }) => theme.highPriorityColor};
  //   background-color: ${({ theme }) => theme.highPriorityBackgroundColor};
  // }

  @media (min-width: 768px) {
    li {
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: 1440px) {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;
