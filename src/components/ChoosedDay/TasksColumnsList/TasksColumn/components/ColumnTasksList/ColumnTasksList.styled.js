import styled from 'styled-components';

export const List = styled.ul`
  max-height: 298px;
  overflow-y: scroll;

  @media (min-width: 768px) {
    max-height: 380px;
  }
`;
