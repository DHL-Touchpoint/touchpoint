import styled from 'styled-components';

export const Container = styled.label<{ $moved: boolean }>`
  position: absolute;
  top: 0.5rem;
  left: 0.25rem;
  padding: 0 0.25rem;
  pointer-events: none;

  background-color: #fff;

  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);

  transition: all 0.1s linear;
  ${props => props.$moved && `transform: scale(0.75); top: -0.525rem;`}
`;
