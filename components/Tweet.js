import styles from "../styles/Tweet.module.css";
import { Image } from 'antd';
import { HeartFilled, DeleteFilled } from '@ant-design/icons';

function Tweet(props) {

    // Manipulation des dates - A revori pour avoir exactement ce que l'on veut
    // let date = new Date(props.date).toISOString()
    let date = new Date(props.date)
    date = Date.now() - date
    date = new Date(date).toISOString().slice(11, 19)


    return (
        <div>
            <main className={styles.main}>
                <div className={styles.headerTweet}>
                    <Image width={50} height={50} src="/avatar.jpg" style={{borderRadius: '50%'}} />
                    <div className={styles.containerHeaderUserTweet}>
                        <div style={{fontWeight: 'bold'}}>{props.firstname}</div> <span className={styles.colorUsernameDate}>@{props.username} · il y a {date}</span>
                    </div>
                </div>

                <div>
                    {/* <p>Welcome to <a className={styles.hashtag} href="#">#hackatweet</a> guys</p> */}
                    <p>{props.text}</p>
                </div>
                
                <div>
                    <HeartFilled style={{ color: '#F61772' }} /> <span style={{ color: '#F61772' }}>{props.like}</span>
                    <DeleteFilled style={{marginLeft: '8px'}} />
                </div>
            </main>
        </div>
    );
}

export default Tweet;
