import React, { useState, useEffect, useRef, useMemo } from 'react';
import FriendsFilter from '../components/FriendsFilter';
import FriendsDisplay from '../components/FriendsDisplay';
import { FriendData } from '@/types';
import Layout from '@/components/Layout';
import mockData from '@/mock-data';

export default function Friends() {
  const initialFilteredData = mockData.map((friend) => ({
    ...friend,
    loading: true,
  }));
  const [filteredData, setFilteredData] = useState<FriendData[]>(initialFilteredData);
  const [pagination, setPagination] = useState({ page: 1, itemsPerPage: 25 });

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);

  const handleApplyFilters = (closeFriends: boolean, superCloseFriends: boolean) => {
    let newData = mockData;

    if (closeFriends) {
      newData = newData.filter((friend) => friend.friendLevel === 'Close');
    }

    if (superCloseFriends) {
      newData = newData.filter((friend) => friend.friendLevel === 'Super Close');
    }

    const newDataWithLoading = newData.map((friend) => ({
      ...friend,
      loading: true,
    }));
    setFilteredData(newDataWithLoading.slice(0, newData.length));
    setPagination((prevState) => ({ ...prevState, page: 1 }));
  };
  useEffect(() => {
    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index) || 0;
            console.log('Item in view:', index);
  
            const startBatchIndex = Math.floor(index / pagination.itemsPerPage) * pagination.itemsPerPage;
            const endBatchIndex = startBatchIndex + pagination.itemsPerPage;
  
            if (filteredData.slice(startBatchIndex, endBatchIndex).some(item => item.loading)) {
              setTimeout(() => {
                setFilteredData((prevState) => {
                  const updatedData = [...prevState];

                  for (let i = startBatchIndex; i < endBatchIndex; i++) {
                    if (updatedData[i]) {
                      updatedData[i].loading = false;
                    }
                  }

                  return updatedData;
                });
              }, 1000);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    setObserver(newObserver);

    return () => {
      if (newObserver) {
        newObserver.disconnect();
      }
    };
  }, [filteredData, 
  pagination.itemsPerPage]);

  useEffect(() => {
    if (observer) {
      observer.disconnect();
      filteredData.forEach((_, index) => {
        const ref = rowRefs.current[index];
        if (ref) {
          observer.observe(ref);
        }
      });
    }
  }, [filteredData, observer]);

  return (
    <Layout>
      <FriendsFilter onApplyFilters={handleApplyFilters} />
      <FriendsDisplay data={filteredData} rowRefs={rowRefs} batchSize={pagination.itemsPerPage} />
    </Layout>
  );
}







