import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import styles from '../../styles/FriendInfo.module.css';
import mockData from '@/mock-data';
import FriendLevel from '@/components/FriendLevel';
import FriendAttribute from '@/components/FriendAttribute';

const FriendInfo = () => {
  const router = useRouter();
  const { id } = router.query;

const friendId = parseInt(id as string, 10)+1;
const friend = mockData.find((friend) => friend.id === friendId);


if (!friend) {
  return (
    <Layout>
      <p>Friend not found</p>
    </Layout>
  );
}

return (
  <Layout>
     <div className={styles.friendInfoWrapper}>
    <div className={styles.friendInfoBox}>
      <h2>{friend.name}</h2>
      <p>Friend Level:   {friend.friendLevel =='Default' ? <FriendAttribute type='Default' data={friend.friendLevel}/> : <FriendLevel level={friend.friendLevel} />}</p>
      <p>Email: <FriendAttribute type="Email" data={friend.email}/></p>
 <p>Phone:<FriendAttribute type="Phone" data={friend.phone}/></p>
 <button className={styles.backButton} onClick={() => router.back()}>Go Back</button>
    </div>
    
    </div>
 
  </Layout>
);
};

export default FriendInfo;
