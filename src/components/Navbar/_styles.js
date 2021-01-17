import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 61px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  color ${(props) => props.theme.colors.txtPrimary};
  cursor: pointer;
`;
