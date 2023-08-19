import styled from 'styled-components';

export const TaskBox = styled.li`
  display: block;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 15px;

  min-width: 296px;
  width: 100%;
  min-height: 108px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.tasksColumnBorder};
  background: ${({ theme }) => theme.secondaryBackgroundColor};

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  @media (min-width: 768px) {
    min-height: 112px;
    padding-left: 14px;
    min-width: 300px;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
`;

export const TaskText = styled.p`
  margin-bottom: 28px;

  font-family: 'InterMedium', sans-serif;
  font-size: 14px;
  line-height: 1.28;
  color: ${({ theme }) => theme.mainTextColor};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const ToolbarBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: 1.8px solid #3e85f3;
`;

export const PriorityLow = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt', sans-serif;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.priorTextColor};

  background-color: #72c2f8;
`;

export const PriorityMedium = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt', sans-serif;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.priorTextColor};

  background-color: #f3b249;
`;

export const PriorityHigh = styled.p`
  padding: 4px 12px;
  border-radius: 4px;
  max-height: 20px;

  font-family: 'InterSemiBolt', sans-serif;
  font-size: 10px;
  line-height: 1.2;
  color: ${({ theme }) => theme.priorTextColor};

  background-color: #ea3d65;
`;
