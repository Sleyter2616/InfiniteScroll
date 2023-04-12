export type FriendData = {
    id: number;
    name: string;
    friendLevel: FriendLevel
    email: string;
    phone: string;
    loading?: boolean;
  };

  export type CurrentPage = 'home' | 'friends' | 'friend';

  export type  FriendLevel =  'Close' | 'Super Close' | 'Default';