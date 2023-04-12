import React from 'react';
import styles from '../styles/FriendAttribute.module.css';

interface FriendAttributeProps {
  type: 'Email' | 'Phone' | 'Default';
  data: string;
}

const FriendAttribute: React.FC<FriendAttributeProps> = ({ type, data }) => {
  const containerClasses = [
    styles.container,
    type === 'Email' ? styles.Email : '',
    type === 'Phone' ? styles.Phone : '',
    type === 'Default' ? styles.Default : '',
  ].join(' ');

  return (
    <div className={containerClasses}>
     {data}
    </div>
  );
};

export default FriendAttribute;
