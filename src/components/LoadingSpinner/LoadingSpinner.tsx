import React from 'react';
import styles from './styles.module.css';

const LoadingSpinner = () => (
  <div data-testid="loadingSpinner" className={styles.loaderContainer}>
    <div className={styles.spinner} />
  </div>
);

export default LoadingSpinner;
