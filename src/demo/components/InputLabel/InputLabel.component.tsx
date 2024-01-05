import { FC, ReactNode } from 'react';

import { Container } from './InputLabel.css';

export const InputLabel: FC<{
  children: ReactNode;
  moved?: boolean;
}> = ({ children, moved = true }) => {
  return <Container $moved={moved}>{children}</Container>;
};
