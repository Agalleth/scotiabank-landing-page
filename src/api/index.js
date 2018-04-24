import firebase from 'firebase';
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyBN15CSofb8a74jUISE_ze0sBuAIJ8xf0A",
    authDomain: "scotiabank-landingpage.firebaseapp.com",
    databaseURL: "https://scotiabank-landingpage.firebaseio.com",
    projectId: "scotiabank-landingpage",
    storageBucket: "scotiabank-landingpage.appspot.com",
    messagingSenderId: "505817977911"
};

firebase.initializeApp(config);

const Api = {
    database: firebase.firestore(),
}

export default Api;