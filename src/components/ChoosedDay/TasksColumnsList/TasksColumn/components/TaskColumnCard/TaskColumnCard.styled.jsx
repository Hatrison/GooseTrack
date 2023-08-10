import styled from 'styled-components';

export const TaskBox = styled.div`
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 18px;
  padding-left: 15px;

  width: 100%;
  height: 108px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background: #f7f6f9;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  @media (min-width: 768px) {
    height: 112px;
    padding-left: 14px;

    &:not(:last-child) {
      margin-bottom: 18px;
    }
  }
`;

export const TaskText = styled.p`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  margin-bottom: 28px;

  color: ${props => props.theme.mainTextColor};
  font-family: 'InterNormal';
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
