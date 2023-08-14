import styled from 'styled-components';

export const SidebarOverlay = styled.div`
  @media (max-width: 1439px) {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const SidebarWrap = styled.div`
  border: 1px solid #3E85F3;
  background-color: #ffffff;
  min-height: 100vh;
  width: 290px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 250ms ease-in-out;

  @media (max-width: 1440px) {
    position: absolute;
    z-index: 2;

    transition: 250ms ease-in-out;
    @media (min-width: 768px) {
      width: 290px;
    }
    @media (min-width: 1440px) {
      z-index: 1;
      position: relative;
    }
  }
`;

export const SidebarCover = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  gap: 16px;
}
`;

export const ButtonIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 6px;
  stroke: #ffffff;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 20px;
  height: 20px;
  margin-left: 11px;
}
`;

export const User = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) => !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;

export const Calendar = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) => !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;

export const Chart = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: #000000;

  @media (min-width: 768px),
  @media (min-width: 1440px) {
  width: 24px;
  height: 24px;
  margin-right: 11px;
}

&:hover {
    {background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
    (stroke: #3E85F3) : (stroke: #ffffff)};
  }

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};

{{background-color: ${({ theme }) => !theme.secondaryBackgroundColor}} && {isActive}
 ? 
(stroke: #3E85F3) : (stroke: #000000)};
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 131px;
  height: 46px;
  border: 0;
  border-radius: 16px;
  background-color: #3E85F3;
  color: #FFFFFF;
  cursor: pointer;

  font-family: 'InterSemiBolt';
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
  font-size: 24px;

  padding: 28px 14px;
  margin-top: 20px 424px 74px 24px;

  &:hover ${ButtonIcon} {
 
  animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@media (min-width: 768px) {
  width: 141px;
  height: 56px;
  margin: 32px 563px 116px 24px;
  padding: 23px 16px;
}

@media (min-width: 1440px) {
  width: 141px;
  height: 56px;
  margin: 24px 439px 124px 24px;
  padding: 23px 16px;
}
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 25px;
  border: 0;
  stroke: #000000;
  fill: transparent;

  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
    margin-left: 31px;
}

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(stroke: #000000) : (stroke: #ffffff)};
`;

export const Logo = styled.logo`
  margin-bottom: 64px;

@media (min-width: 768px) {
  margin-bottom: 50px;
}

@media (min-width: 1440px) {
  margin-bottom: 32px;
}

{background-color: ${({ theme }) => !theme.secondaryBackgroundColor} ? 
(fill: #3E85F3) : (fill: #FFFFFF)};
`;

export const Link = styled.link`
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
