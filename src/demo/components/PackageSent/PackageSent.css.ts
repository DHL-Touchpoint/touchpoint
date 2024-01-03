import { theme } from '@/styles/theme';
import { FaCheck } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

export const CheckedCircle = styled(FaCheck)`
  width: 70px;
  height: 70px;
  padding: 8px;
  border-radius: 50%;
  position: relative;
  background-color: transparent;
  border: 5px solid ${theme.color.dhlColors.red};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ResponseJsonButton = styled.b`
  cursor: pointer;
  color: ${theme.color.dhlColors.red};
`;

const fadeIn = keyframes`
  0% { transform: scale(0.8); opacity: 0 };
  60% { transform: scale(1.05); opacity: 1 };
  100% { transform: scale(1); opacity: 1 };
`;

export const SentContainer = styled.div`
  text-align: center;
  padding: 3rem;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-in-out 0s forwards;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 4px;
`;