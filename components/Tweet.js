import styles from "../styles/Tweet.module.css";
import { Image } from 'antd';

function Tweet() {
    return (
        <div>
            <main className={styles.main}>
                <div>
                    {/* icon user */}
                    <Image width={200} src="/avatar.jpg" style={styles.avatar} />
                    {/* Firstname, @username, age du tweet */}
                    <div></div>
                </div>
                    {/* texte du tweet */}
                <div></div>
                    {/* Nombre de like, en option sur ses propres tweet : poubelle */}
                <div></div>
            </main>
        </div>
    );
}

export default Tweet;
