import React from 'react';

import cn from 'classnames';

import styles from './Heading.module.scss';

interface HeadingProps {
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading: React.FC<HeadingProps> = ({ children, className, size = 1, bold = false }) => {
  const Tag = `h${size}` as HeadingTag;
  const classes = cn(className, { [styles['root--bold']]: bold });

  return <Tag className={classes}>{children}</Tag>;
};
