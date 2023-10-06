import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">HOME</a>
        </h1>
        <LastTweets />
      </main>
    </div>
  );
}

export default Home;
