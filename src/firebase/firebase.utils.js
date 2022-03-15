import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCFGuqvGIy1-Mo-upH3_cYMDxoQvvgAcME",
    authDomain: "crwn-db-3ed97.firebaseapp.com",
    projectId: "crwn-db-3ed97",
    storageBucket: "crwn-db-3ed97.appspot.com",
    messagingSenderId: "1061488112132",
    appId: "1:1061488112132:web:2c064eab5d599872fe3b51",
    measurementId: "G-NX2TLJBPMS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;