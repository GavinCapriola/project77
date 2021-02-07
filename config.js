import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBWBGHl-yy-hbct_PzvFLiWKVBcta7EizI",
    authDomain: "barter-system-app-23781.firebaseapp.com",
    projectId: "barter-system-app-23781",
    storageBucket: "barter-system-app-23781.appspot.com",
    messagingSenderId: "739840107265",
    appId: "1:739840107265:web:8103957854dc96e0d0b100"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();