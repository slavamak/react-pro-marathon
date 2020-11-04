import React from 'react';

import styles from './Container.module.scss';

interface IProps {
  children: React.ReactNode
};

export const Container: React.FC<IProps> = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};

