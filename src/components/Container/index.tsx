import React from 'react';

import cn from 'classnames';

import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = null }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
