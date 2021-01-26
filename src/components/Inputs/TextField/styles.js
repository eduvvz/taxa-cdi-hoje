import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const WrapperTextField = styled.div`
  display: flex;
  margin-top: 20px;

  & > label {
    width: 100%;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.colors.txtPrimary};
  margin-bottom: 5px;
`;

export const TextField = styled(InputMask)`
  width: 100%;
  border-radius: 4px;
  padding: 10px 5px;
  border: ${(props) => (props.hasError ? '1px solid red' : 'none')};
  background-color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;

  &:focus {
    border: none;
    outline: none;
  }
`;
