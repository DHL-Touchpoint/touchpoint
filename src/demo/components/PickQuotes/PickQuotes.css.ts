import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const QuotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  gap: 0.5rem;
`;

export const PickContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
`;

export const QuotesListButton = styled.b`
  cursor: pointer;
  color: ${theme.color.dhlColors.red};
`;
