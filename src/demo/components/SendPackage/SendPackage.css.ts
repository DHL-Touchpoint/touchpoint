import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const CommunicantContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const FullWidth = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: ${theme.color.dhlColors.red};
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const DataButtons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const DemoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 4px;
`;