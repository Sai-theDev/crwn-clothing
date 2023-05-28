import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAV1pMdJe0hSQBNsimnM40_tee0SmYSLwY",
  authDomain: "crwn-clothing-db-b4d97.firebaseapp.com",
  projectId: "crwn-clothing-db-b4d97",
  storageBucket: "crwn-clothing-db-b4d97.appspot.com",
  messagingSenderId: "941991806362",
  appId: "1:941991806362:web:d5bfd7780d4fbc2dbc2623",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth,provider);

export const db=getFirestore();


export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db,'users', userAuth.uid);
  console.log(userDocRef)
}

