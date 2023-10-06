import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import { useState } from 'react';
import { Input, Button } from 'antd';


const { TextArea } = Input;

function Home() {
  const [tweet, setTweet] = useState('');

  return (
    <div>
      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '30%' }}>
          <TextArea
              className={styles.textarea}
              maxLength={280}
              onChange={(e) => setTweet(e.target.value)} value={tweet} 
          />
          <Button type="primary">Tweet</Button>
        </div>
        <LastTweets />
      </main>
    </div>
  );
}

export default Home;
