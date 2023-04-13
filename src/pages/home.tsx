import React, { useState } from 'react';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import SideNavbar from '../components/SideNavbar';
import Layout from '@/components/Layout';



export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'friends'>('home');

  return (
    <Layout>
      <Header currentPage={currentPage} />
      <HomePage currentPage={currentPage} />
      <SideNavbar  />
      </Layout>
  );
}
