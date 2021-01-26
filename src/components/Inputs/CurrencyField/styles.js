import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';

export const CurrencyField = styled(CurrencyInput)`
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

export const WrapperError = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 5px;
  color: red;
  font-weight: 600;
  font-size: 14px;
`;
