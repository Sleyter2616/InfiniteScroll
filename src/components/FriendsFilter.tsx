import React, { useState } from 'react';
import styles from '../styles/FriendsFilter.module.css';
import FilterPopup from './Filter/FilterPopup';
import FilterIcon from './Filter/FilterIcon';

interface FriendsFilterProps {
  onApplyFilters: (closeFriends: boolean, reallyCloseFriends: boolean) => void;
}

const FriendsFilter: React.FC<FriendsFilterProps> = ({ onApplyFilters }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({ closeFriends: false, reallyCloseFriends: false });

  const handleApplyFilters = (closeFriends: boolean, reallyCloseFriends: boolean) => {
    setAppliedFilters({ closeFriends, reallyCloseFriends });
    onApplyFilters(closeFriends, reallyCloseFriends);
  };
  const activeFilterCount = Object.values(appliedFilters).filter((value) => value).length;
  const handleFilterClick = () => {
    setFilterActive(!filterActive);
  };

  const handleClearAll = () => {
    setFilterActive(false);
    setAppliedFilters({ closeFriends: false, reallyCloseFriends: false });
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
