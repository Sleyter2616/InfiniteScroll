import React, { useState } from 'react';
import styles from '../styles/FriendsFilter.module.css';
import FilterPopup from './Filter/FilterPopup';
import FilterIcon from './Filter/FilterIcon';

interface FriendsFilterProps {
  onApplyFilters: (closeFriends: boolean, superCloseFriends: boolean) => void;
}

const FriendsFilter: React.FC<FriendsFilterProps> = ({ onApplyFilters }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({ closeFriends: false, superCloseFriends: false });

  const handleApplyFilters = (closeFriends: boolean, superCloseFriends: boolean) => {
    setAppliedFilters({ closeFriends, superCloseFriends });
    onApplyFilters(closeFriends, superCloseFriends);
  };
  const activeFilterCount = Object.values(appliedFilters).filter((value) => value).length;
  const handleFilterClick = () => {
    setFilterActive(!filterActive);
  };

  const handleClearAll = () => {
    setFilterActive(false);
    setAppliedFilters({ closeFriends: false, superCloseFriends: false });
     onApplyFilters(false, false);
  };
  const handleClose = () => {
    setFilterActive(false);
  };

  return (
    <div className={styles.container}>
    <button
      className={`${styles.filter} ${filterActive ? styles.filterActive :'' } ${activeFilterCount > 0 ? styles.filterActiveCount : ''}`}
      onClick={handleFilterClick}
    >
      <FilterIcon isActive={filterActive || activeFilterCount > 0} />
      {activeFilterCount > 0 && <span className={styles.filterCount}>{activeFilterCount}</span>}
    </button>
    <div className={styles.separator}>|</div>
    <button
      onClick={handleClearAll}
      className={`${styles.clearAll} ${activeFilterCount > 0 ? styles.clearAllActive : ''}`}
      disabled={activeFilterCount === 0}
    >
      Clear all
    </button>
    <div className={styles.popupContainer}>
      <FilterPopup visible={filterActive} onApplyFilters={handleApplyFilters} onClose={handleClose} />
    </div>
  </div>
);
};

export default FriendsFilter;
