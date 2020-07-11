import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBl59PbmKsKMkNOO6g2vIIZETiG8hHyF3U",
  authDomain: "booksantaapp-99c34.firebaseapp.com",
  databaseURL: "https://booksantaapp-99c34.firebaseio.com",
  projectId: "booksantaapp-99c34",
  storageBucket: "booksantaapp-99c34.appspot.com",
  messagingSenderId: "86509300256",
  appId: "1:86509300256:web:e66c4a62181129883baa45"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
