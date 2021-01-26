import React from 'react';
import { CurrencyField as SCurrencyField, WrapperError } from './styles';
import { WrapperTextField, Label as SLabel } from '../TextField/styles';

function CurrencyField({
  label,
  placeholder,
  name,
  value,
  onChange,
  prefix,
  suffix,
  error,
  decimalsLimit = 2,
  type = 'text',
}) {
  return (
    <WrapperTextField>
      <label htmlFor={name}>
        <SLabel>{label}</SLabel>
        <SCurrencyField
          id={name}
          placeholder={placeholder}
          value={value}
          onValueChange={onChange}
          prefix={prefix}
          suffix={suffix}
          hasError={Boolean(error)}
          decimalsLimit={decimalsLimit}
          type={type}
        />
        <WrapperError>{error}</WrapperError>
      </label>
    </WrapperTextField>
  );
}

export default CurrencyField;
