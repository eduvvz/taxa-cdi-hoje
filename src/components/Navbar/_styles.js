import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 61px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
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
  padding: 0px 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 0px 20px;
  }
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

export const MobileMenu = styled.div`
  width: 75vw;
  height: calc(100% - 61px);
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  top: 61px;
  right: ${(props) => (props.show ? '0' : '-75vw')};
  z-index: 1;
  transition: 0.5s;
`;

export const MbMenuLink = styled.a`
  height: 61px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0px 20px;
  display: flex;
  align-items: center;
`;
