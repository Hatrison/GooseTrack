import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;

  list-style: none;

  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
