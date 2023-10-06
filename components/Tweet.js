import styles from "../styles/Tweet.module.css";
import { Image } from 'antd';
import { HeartFilled, DeleteFilled } from '@ant-design/icons';

function Tweet() {
    return (
        <div>
            <main className={styles.main}>
                <div className={styles.headerTweet}>
                    <Image width={50} height={50} src="/avatar.jpg" style={{borderRadius: '50%'}} />
                    <div className={styles.containerHeaderUserTweet}>
                        <div style={{fontWeight: 'bold'}}>Antoine</div> <span className={styles.colorUsernameDate}>@AntoineLeProf · 5 hours</span>
                    </div>
                </div>

                <div>
                    <p>Welcome to <a className={styles.hashtag} href="#">#hackatweet</a> guys</p>
                </div>
                
                <div>
                    <HeartFilled style={{ color: '#F61772' }} /> <span style={{ color: '#F61772' }}>1</span>
                    <DeleteFilled style={{marginLeft: '8px'}} />
                </div>
            </main>
        </div>
    );
}

export default Tweet;
