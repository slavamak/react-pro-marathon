import React from 'react';
import PropTypes from 'prop-types';

import styles from './Container.module.scss';

export const Container: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes= {
  children: PropTypes.node.isRequired
};
