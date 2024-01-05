import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div<{ $fullWidth?: boolean }>`
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;

  font-size: 1rem;
  font-family: ${theme.font.delivery};

  &:focus {
    outline: 1px solid #3f6bb0;
    border: 1px solid #3f6bb0;
  }
`;
