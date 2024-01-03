'use client';
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { Container, Input } from './TextInputBase.css';
import { InputLabel } from '../InputLabel';

type Props = Pick<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  | 'onBlur'
  | 'onChange'
  | 'onFocus'
  | 'value'
  | 'disabled'
  | 'type'
  | 'min'
  | 'max'
  | 'placeholder'
> & {
  label?: ReactNode;
  fullWidth?: boolean;
};

export const TextInputBase: FC<Props> = ({
  label,
  onBlur,
  onChange,
  onFocus,
  min,
  max,
  value,
  disabled,
  fullWidth,
  placeholder,
  type = 'text',
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <Container $fullWidth={fullWidth}>
      <InputLabel moved={focused || !!value}>{label}</InputLabel>
      <Input
        disabled={disabled}
        type={type}
        min={min}
        placeholder={placeholder}
        max={max}
        onBlur={event => {
          setFocused(false);
          onBlur && onBlur(event);
        }}
        onChange={onChange}
        value={value}
        onFocus={event => {
          if (disabled) return;
          setFocused(true);
          onFocus && onFocus(event);
        }}
      />
    </Container>
  );
};
