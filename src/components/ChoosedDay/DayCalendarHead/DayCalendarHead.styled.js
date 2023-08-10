import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;

  list-style: none;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background: #fff;

  @media screen and (max-width: 767px) {
    padding: 14px 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const ListItemMobile = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ListItemDesktop = styled.li`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
