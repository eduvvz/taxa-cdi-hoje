import React from 'react';
import { WrapperError } from '../CurrencyField/styles';
import {
  TextField as STextField,
  WrapperTextField,
  Label as SLabel,
} from './styles';

function TextField({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  mask,
  type = 'text',
}) {
  return (
    <WrapperTextField>
      <label htmlFor={name}>
        <SLabel>{label}</SLabel>
        <STextField
          id={name}
          placeholder={placeholder}
          value={value}
          mask={mask}
          hasError={Boolean(error)}
          onChange={onChange}
          type={type}
        />
        <WrapperError>{error}</WrapperError>
      </label>
    </WrapperTextField>
  );
}

export default TextField;
