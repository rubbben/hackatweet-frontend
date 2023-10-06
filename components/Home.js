import styles from '../styles/Home.module.css';
import Tweet from './Tweet';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">HOME</a>
        </h1>
        <Tweet />
      </main>
    </div>
  );
}

export default Home;
