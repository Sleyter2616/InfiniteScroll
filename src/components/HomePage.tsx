
import React, { FC } from 'react';
import styles from '../styles/FeaturesSection.module.css';

interface HomePageProps {
  currentPage: 'home' | 'friends';
}

const HomePage: FC<HomePageProps> = ({ currentPage }) => {
  return (
    <div className={styles.featuresSection}>
        <h1 className={styles.title}>Welcome to the Clerkie Challenge!</h1>
    </div>
  );
};

export default HomePage;
