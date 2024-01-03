import { FC } from 'react';

import { Base } from './DhlButton.css';

type Props = Pick<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'children' | 'className' | 'disabled' | 'onClick'
> & {
  primary?: boolean;
};

export const DhlButton: FC<Props> = ({
  children,
  disabled,
  onClick,
  className,
  primary = false,
}) => {
  return (
    <Base
      $primary={primary}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </Base>
  );
};
