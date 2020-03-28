import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvKuaCYRkYxdlhEg5OOIDGfyj9MA8yozg",
  authDomain: "crownclothing-86485.firebaseapp.com",
  databaseURL: "https://crownclothing-86485.firebaseio.com",
  projectId: "crownclothing-86485",
  storageBucket: "crownclothing-86485.appspot.com",
  messagingSenderId: "859457528422",
  appId: "1:859457528422:web:124aceab92d5f86a1283a7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth, additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createadAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createadAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user:" + error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = (collectionKey, arrayOfObjectsToAdd) => {
 const collectionRef = firestore.collection(collectionKey)
 const batch = firestore.batch()

arrayOfObjectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc()
  batch.set(newDocRef, obj )
});

batch.commit()
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items} = doc.data()

    return ({
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    })

  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export default firebase;
