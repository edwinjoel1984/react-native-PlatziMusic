
import * as firebase from "firebase";

// import default from "../../../Library/Caches/typescript/2.6/node_modules/@types/react-native-vector-icons/Ionicons";

const config = {
    apiKey: "AIzaSyAhhgfq0A3Ab113A1WnlB4R1zJ0DZWsIKM",
    authDomain: "platzimusic-2bcf0.firebaseapp.com",
    databaseURL: "https://platzimusic-2bcf0.firebaseio.com",
    projectId: "platzimusic-2bcf0",
    storageBucket: "platzimusic-2bcf0.appspot.com",
    messagingSenderId: "594446648883"
  };
  firebase.initializeApp(config);

  export const firebaseAuth = firebase.auth()
  export const firebaseDatabase = firebase.database();

  export default firebase;