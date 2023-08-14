import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px), @media (min-width: 1440px) {
    gap: 16px;
  }
`;

export const Link = styled(LinkRouter)` 
  display: inline-block;
  width: 185px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 12px, 10px, 65px, 10px;
  background-color: transparent;

  @media (min-width: 768px) {
  width: 225px;
  height: 56px;
  padding: 20px, 16px, 80px, 16px;
  font-size: 16px;
}

  @media (min-width: 1440px) {
  width: 241px;
  height: 56px;
  padding: 20px, 16px, 96px, 16px;
  font-size: 16px;
}

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(color: #000000) : (color: #FFFFFF)};

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (background-color: #E3F3FF) : (background-color: #3E85F3)};

  }
`;
