import React from 'react';
import styles from '../styles/FriendsDisplay.module.css';
import FriendLevel from './FriendLevel';
import LoadingRow from './LoadingRow';
import Link from 'next/link';
import { FriendData } from '../types';

interface FriendsDisplayProps {
  data: FriendData[];
  rowRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  batchSize: number;
}

const FriendsDisplay: React.FC<FriendsDisplayProps> = ({ data, rowRefs , batchSize }) => {
  
  return (
    <div className={styles.container}>
      {data.map((friend, index) => {
      
        const rowContent = (
          <div 
          key={index} 
          className={styles.row} 
          ref={(el) => (rowRefs.current[index] = el)}
          data-index={index}>
            <div className={styles.rowContent}>
            {friend.loading ? (
                <LoadingRow fade top />
              ) : (
                <div className={styles.nameAndLevel}>
                  <div className={styles.name}>{friend.name}</div>
                  {friend.friendLevel !== 'Default' && (
                    <FriendLevel level={friend.friendLevel} />
                  )}
                </div>
              )}
            </div>
            <div className={styles.rowContent}>
              {friend.loading ? (
                <LoadingRow fade />
              ) : (
                <div className={styles.contactInfo}>
                  {friend.email} • {friend.phone}
                </div>
              )}
            </div>
          </div>
        );

        return friend.loading ? (
          <React.Fragment key={index}>{rowContent}</React.Fragment>
        ) : (
          <Link key={index} href={`/friend/${friend.id-1}`}>
              {rowContent}
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsDisplay;
