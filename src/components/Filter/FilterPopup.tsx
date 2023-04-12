import React, { useState } from 'react';
import styles from '../../styles/FilterPopup.module.css';
import CloseButton from './CloseButton';

interface FilterPopupProps {
  visible: boolean;
  onApplyFilters: (closeFriends: boolean, reallyCloseFriends: boolean) => void;
  onClose: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({  visible, onApplyFilters, onClose  }) => {
  const [closeFriends, setCloseFriends] = useState(false);
  const [reallyCloseFriends, setReallyCloseFriends] = useState(false);

  if (!visible) return null;

  const handleApply = () => {
    onApplyFilters(closeFriends, reallyCloseFriends);
    onClose();
  };

  const handleClearAll = () => {
    setCloseFriends(false);
    setReallyCloseFriends(false);
  };

  return (
    <div className={styles.container}>
    <div className={styles.topSection}>
      <button  onClick={handleClearAll}  className={`${styles.clearAll} ${closeFriends || reallyCloseFriends ? styles.clearAllActive : ''}`}
      disabled={!closeFriends && !reallyCloseFriends }>Clear all</button>
      <div className={styles.filterTitle}>Filter</div>
      <div className={styles.closeButton} onClick={onClose}><CloseButton/></div>
    </div>
    <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.bottomSectionTitle}>Friend Status</div>
        </div>
        <div className={styles.section}>
        <div className={styles.checkboxTitle}>Close Friends</div>
          <div
            className={`${styles.checkbox} ${closeFriends ? styles.checkedCheckbox : ''}`}
            onClick={() => setCloseFriends(!closeFriends)}
          >
            {closeFriends && <span className={styles.checkmark}>&#10003;</span>}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.checkboxTitle}>Really Close Friends</div>
          <div
            className={`${styles.checkbox} ${reallyCloseFriends ? styles.checkedCheckbox : ''}`}
            onClick={() => setReallyCloseFriends(!reallyCloseFriends)}
          >
            {reallyCloseFriends && <span className={styles.checkmark}>&#10003;</span>}
          </div>
          </div>

         <button className={styles.applyButton} onClick={handleApply}>Apply</button>
      </div>

  </div>

  );
};

export default FilterPopup;
