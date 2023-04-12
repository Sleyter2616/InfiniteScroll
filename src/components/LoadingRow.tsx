// LoadingRow.tsx
import React from 'react';
import styles from '../styles/LoadingRow.module.css';

interface LoadingRowProps {
  fade?: boolean;
  top?: boolean;
}

const LoadingRow: React.FC<LoadingRowProps> = ({ fade, top }) => {
  const fadeInClass = fade ? styles.fadeIn : '';

  return (
    <>
      {top ? (
        <div className={`${styles.loadingRow} ${fadeInClass}`}>
          <div className={styles.loadingNameAndLevelLeft}></div>
          <div className={styles.loadingNameAndLevelRight}></div>
        </div>
      ) : (
        <div className={`${styles.loadingRow} ${fadeInClass}`}>
          <div className={styles.loadingContactInfoLeft}></div>
          <div className={styles.loadingContactInfoRight}></div>
        </div>
      )}
    </>
  );
};

export default LoadingRow;
