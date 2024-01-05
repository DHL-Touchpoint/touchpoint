import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Base = styled.button<{ $primary?: boolean }>`
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background: none;
  font-family: ${theme.font.delivery};
  font-weight: bold;
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;

  ${props =>
    props.$primary
      ? `
      color: ${theme.color.dhlColors.white};
      background-color: ${theme.color.dhlColors.red};

      &:disabled {
        background-color: ${theme.color.dhlColors.redDisabled};
        cursor: default;
      }

      &:hover:not(:disabled) {
        background-color: ${theme.color.dhlColors.redHovered};
      }
      &:active:not(:disabled) {
        background-color: ${theme.color.dhlColors.redPressed};
      }
    `
      : `
      
      color: ${theme.color.dhlColors.red};

      &:disabled {
        color: ${theme.color.dhlColors.redDisabled};
        cursor: default;
      }

      &:hover:not(:disabled) {
        color: ${theme.color.dhlColors.redHovered};
      }
      &:active:not(:disabled) {
        color: ${theme.color.dhlColors.redPressed};
      }  
`}
`;
