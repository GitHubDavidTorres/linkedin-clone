import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAFuc1kkX2AY1xv8PDEKHJsiGSNfumokw0',
  authDomain: 'linkedin-clone-39800.firebaseapp.com',
  projectId: 'linkedin-clone-39800',
  storageBucket: 'linkedin-clone-39800.appspot.com',
  messagingSenderId: '194367471416',
  appId: '1:194367471416:web:fc871949fa41d517838bcd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
