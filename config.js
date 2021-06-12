import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDEWzjS4I_lgZeq_4V7ipbJIDmOQIV0oNo",
    authDomain: "story-hub-1fcd3.firebaseapp.com",
    projectId: "story-hub-1fcd3",
    storageBucket: "story-hub-1fcd3.appspot.com",
    messagingSenderId: "298167016141",
    appId: "1:298167016141:web:169e5cbeb080550d0c6784",
    measurementId: "G-PKDJXN5JSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase.firestore();