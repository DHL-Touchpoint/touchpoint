import { DhlButton } from "@/demo/components/DhlButton";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { transform:translateY(50px); opacity: 0 };
  80% { transform: translateY(-10px); opacity: 1 };
  100% { transform: translateY(0); opacity: 1 };
`;

const bounceIn = keyframes`
  0% { transform: scale(0); opacity: 0 };
  80% { transform: scale(1.1); opacity: 1 };
  100% { transform: scale(1); opacity: 1 };
`;

export const Confirm = styled.div`
  width: 46%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #8080803b;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 1px 1px 4px 2px #8080801a;
  cursor: pointer;
`;

export const ServicePointText = styled.div`
  text-align: end;
`;

export const SeeApiDataButton = styled(DhlButton)`
  position: absolute;
  right: -8px;
  bottom: -8px;
`;

export const BounceButton = styled(DhlButton)`
  animation: ${bounceIn} 0.3s ease-in-out 0s forwards;
`;

export const Card = styled.div<{
  $animationDelay: number;
}>`
  opacity: 0;
  transform: translateY(0);
  width: 46%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #8080803b;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 1px 1px 4px 2px #8080801a;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
  animation: ${fadeIn} 0.25s ease-in-out
    ${({ $animationDelay }) => $animationDelay * 100}ms forwards;
`;
