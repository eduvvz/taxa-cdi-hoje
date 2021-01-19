import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 61px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.a`
  font-weight: 600;
  font-size: 20px;
  color ${(props) => props.theme.colors.txtPrimary};
  cursor: pointer;
`;

export const WrapperLinks = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.lg}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  font-weight: 500;
  font-size: 16px;
  color ${(props) => props.theme.colors.txtPrimary};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color ${(props) => props.theme.colors.accent};
  }
`;
