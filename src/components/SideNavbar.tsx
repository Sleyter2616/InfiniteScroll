import React, { FC } from 'react';
import styles from '../styles/SideNavbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavButton: FC<NavButtonProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <button
        className={`${styles.navButton} ${isActive ? styles.active : ''}`}
      >
        {children}
      </button>
    </Link>
  );
};

const SideNavbar: FC = () => {
  return (
    <aside className={styles.sideNavbar}>
      <div className={styles.topSection}>
        <img className={styles.textIcon} src="/clerkie-icon.png" alt="Clerkie icon" />
        Clerkie Challenge
      </div>
      <NavButton href="/">
        <img className={styles.textIcon} src="/home-icon.png" alt="Home icon" />
        <span className={styles.navText}>Home</span>
      </NavButton>
      <NavButton href="/friends">
        <img className={styles.textIcon} src="/friends-icon.png" alt="Friends icon" />
        <span className={styles.navText}>Friends</span>
      </NavButton>
    </aside>
  );
};

export default SideNavbar;
