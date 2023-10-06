import styles from "../styles/LastTweets.module.css";

function LastTweets() {

    // Récupérer les données des tweets depuis le backend
    // importer le composant Tweet
    // Faire un map des données pour les transformer en tableau JSX de composants Tweet
    let tweets = []

    return (
        <div>
            {tweets}
        </div>
    );
}

export default Tweet;
