import React from 'react';
import { A } from 'hookrouter';

import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isAnchor?: boolean;
  href?: string;
  color?: 'yellow' | 'green';
  mobileFullWidth?: boolean;
  isSmall?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  color = 'yellow',
  isSmall = false,
  mobileFullWidth = false,
  isAnchor = false,
  href = '/',
}) => {
  const classes = cn(className, styles.root, styles[color], {
    [styles.full]: mobileFullWidth,
    [styles.small]: isSmall,
  });

  if (isAnchor) {
    return (
      <A href={href} className={classes}>
        {children}
      </A>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};
