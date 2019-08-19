import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAZ0lIYtd8RA891cE7gAyLeZaKfO9lNuo",
    authDomain: "clobaz-9dcc4.firebaseapp.com",
    databaseURL: "https://clobaz-9dcc4.firebaseio.com",
    projectId: "clobaz-9dcc4",
    storageBucket: "",
    messagingSenderId: "203881900265",
    appId: "1:203881900265:web:89a3a73b82042157"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
      if (!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error) {
              console.log('error creating user', error.message);
          }
     }
     return userRef;

    }

  export default firebase;