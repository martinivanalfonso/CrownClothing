import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAvKuaCYRkYxdlhEg5OOIDGfyj9MA8yozg",
    authDomain: "crownclothing-86485.firebaseapp.com",
    databaseURL: "https://crownclothing-86485.firebaseio.com",
    projectId: "crownclothing-86485",
    storageBucket: "crownclothing-86485.appspot.com",
    messagingSenderId: "859457528422",
    appId: "1:859457528422:web:124aceab92d5f86a1283a7"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase   