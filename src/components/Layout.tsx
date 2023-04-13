import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import SideNavbar from './SideNavbar';
import Header from './Header';
import styles from '../styles/Layout.module.css';
import { CurrentPage } from '../types';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  let currentPage:CurrentPage = 'home';

  if (router.pathname === '/friends') {
    currentPage = 'friends';
  } else if (router.pathname.startsWith('/friend/')) {
    currentPage = 'friend';
  }
  const isFriendInfo = currentPage === 'friend';
  const mainContentClass = isFriendInfo ? styles.friendInfoContent : styles.mainContent;

  return (
    <>
      <SideNavbar />
      <Header currentPage={currentPage} />
      <main className={mainContentClass}>{children}</main>
    </>
  );
};

export default Layout;
