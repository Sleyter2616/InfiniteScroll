import React, { FC } from 'react';
import styles from '../styles/Header.module.css';
import { CurrentPage } from '../types';

interface HeaderProps {
  currentPage: CurrentPage;
}

const Header: FC<HeaderProps> = ({ currentPage }) => {
  const capitalizedCurrentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <header className={styles.header}>
      <div className={styles.currentPage}>{capitalizedCurrentPage}</div>
    </header>
  );
};

export default Header;
