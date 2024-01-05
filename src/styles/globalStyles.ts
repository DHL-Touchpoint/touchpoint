import { theme } from "@/styles/theme";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  from { transform: rotate(0deg) };
  to { transform: rotate(360deg) };
`;

export const Loader = styled.span`
  width: 36px;
  height: 36px;
  border: 5px solid ${theme.color.dhlColors.red};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
