import { styles } from "../styles/LastTweets.module.css";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";
console.log(Tweet);

function LastTweets() {
    const urlBack = "https://hackatweet-backend-eta.vercel.app";

    let [lastTweets, setLastTweets] = useState([]);

    // Récupérer les données des tweets depuis le backend
    // importer le composant Tweet
    // Faire un map des données pour les transformer en tableau JSX de composants Tweet
    useEffect(() => {
        fetch(`${urlBack}/tweets/lasttweets`)
            .then((response) => response.json())
            .then((data) => {
                console.log(
                    "from LastTweets - inside useEffect - data[0].userId.firstname =>",
                    data[0].userId.firstname
                );
                let tweets = data.map((tw, i) => (
                    <Tweet
                        key={i}
                        like={tw.like}
                        date={tw.date}
                        firstname={tw.userId.firstname}
                        username={tw.userId.username}
                        text={tw.text}
                    />
                ));
                // let tweets = data.map((tw, i) =>  {
                // return {key: i, like: tw.like, date: tw.date, userId: tw.userId, text: tw.text}
                console.log(
                    "from LastTweets - inside useEffect - tweets =>",
                    tweets
                );
                setLastTweets(tweets);
                console.log(
                    "from LastTweets - inside useEffect - lastTweets =>",
                    lastTweets
                );
            });
    }, []);

    console.log("from LastTweets - outside useEffect - tweets =>", lastTweets);

    return <div>{lastTweets}</div>;
}

export default LastTweets;
