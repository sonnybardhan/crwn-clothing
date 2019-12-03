import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAxmKs9PddBZllZG8lrvM8OErKbdutVAXo",
	authDomain: "crwn-db-84af0.firebaseapp.com",
	databaseURL: "https://crwn-db-84af0.firebaseio.com",
	projectId: "crwn-db-84af0",
	storageBucket: "crwn-db-84af0.appspot.com",
	messagingSenderId: "427834958985",
	appId: "1:427834958985:web:f269c7455d706a1ea05258",
	measurementId: "G-37K6H6RV9V"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
