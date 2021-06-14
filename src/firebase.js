

const firebaseConfig = {
    apiKey: "AIzaSyCbJJDz1ZH6J8XU21fqe6n4eIPj0Yw5zUs",
    authDomain: "clone-316616.firebaseapp.com",
    projectId: "youtubeclone-316616",
    storageBucket: "youtubeclone-316616.appspot.com",
    messagingSenderId: "630965578951",
    appId: "1:630965578951:web:e930c27b80038b17cd62e2"
  };

firebase.initializeApp(firebaseConfig)


export const db = firebase.firestore();