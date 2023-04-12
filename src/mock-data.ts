import { FriendData, FriendLevel } from './types';

  const mockData: FriendData[] = [];
  
  for (let i = 1; i < 101; i++) {
    let friendLevel : FriendLevel = 'Default';
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        friendLevel = 'Close';
        break;
      case 1:
        friendLevel = 'Default';
        break;
      case 2:
        friendLevel = 'Super Close';
        break;
    }
    mockData.push({
      id: i,
      name: `Friend ${i}`,
      friendLevel,
      email: `friend${i}@example.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100})-${Math.floor(Math.random() * 1000) + 100}-${Math.floor(Math.random() * 10000) + 1000}`,
    });
  }
  
  export default mockData;
  