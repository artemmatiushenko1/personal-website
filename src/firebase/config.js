// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getStorage } from '@firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCn0vZnnD8oXxN6EMI14jR1Coe69ovpAWU',
  authDomain: 'personal-website-4afb5.firebaseapp.com',
  projectId: 'personal-website-4afb5',
  storageBucket: 'personal-website-4afb5.appspot.com',
  messagingSenderId: '164018756767',
  appId: '1:164018756767:web:a4fb1ee315853f1d8096aa',
  measurementId: 'G-TXBX9CZ2TL',
};

export const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
