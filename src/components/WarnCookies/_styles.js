import styled from 'styled-components';

export const ModalWarnCookies = styled.div`
  position: fixed;
  bottom: 30px;
  width: 90%;
  padding: 20px 20px;
  box-shadow: 0px 2px 20px 2px rgba(0, 0, 0, 0.08);
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1280px;
  z-index: 100;
  background-color: white;

  ${(props) => `display: ${props.show ? 'block' : 'none'}`};
`;

export const TextWarn = styled.p`
  font-size: 23px;
  font-weight: 700;
  margin-bottom: 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  background-color: ${(props) => props.theme.colors.accent};
  color: white;
  padding: 15px 0px;
  font-weight: 700;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    margin-top: 10px;
  }
`;

export const Mark = styled.a`
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
`;
