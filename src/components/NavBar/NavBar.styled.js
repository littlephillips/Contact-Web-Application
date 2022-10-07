import styled from 'styled-components';

export const StyledNav = styled.nav`
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  position: sticky;
  background-color: black;
`;

export const StyledUL = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const StyledLI = styled.li`
  margin: 10px;

  a {
    color: white;
  }
`;
