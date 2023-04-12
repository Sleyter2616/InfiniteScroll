import React from 'react';
import styles from '../styles/FriendLevel.module.css';

interface FriendLevelProps {
  level: 'Close' | 'Super Close' | 'Default';
}

const FriendLevel: React.FC<FriendLevelProps> = ({ level }) => {
  const containerClasses = [
    styles.container,
    level === 'Super Close' ? styles.superClose : '',
    level === 'Close' ? styles.close : '',
  ].join(' ');

  return (
    <div className={containerClasses}>
      {level === 'Default' ? '' : `${level} Friends`}
    </div>
  );
};

export default FriendLevel;
