// import {initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyDrgEIfkrFSnO5mNmW-kbOKaeMf1ZMje-c",
//   authDomain: "linkedin-clone-3b39f.firebaseapp.com",
//   databaseURL: "https://linkedin-clone-3b39f-default-rtdb.firebaseio.com",
//   projectId: "linkedin-clone-3b39f",
//   storageBucket: "linkedin-clone-3b39f.appspot.com",
//   messagingSenderId: "450842102133",
//   appId: "1:450842102133:web:2b15831b517105ab012b3c"
//   databaseURL: "https://console.firebase.google.com/u/0/project/linkedin-clone-3b39f/database/linkedin-clone-3b39f-default-rtdb/data/~2F"
// };

// export const app = initializeApp(firebaseConfig);

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8e6Lyw66J0yBYk8mnz5o5vRAP4x_Ya7g",
    authDomain: "linkedinv2-web.firebaseapp.com",
    projectId: "linkedinv2-web",
    storageBucket: "linkedinv2-web.appspot.com",
    messagingSenderId: "424235396060",
    appId: "1:424235396060:web:d9b608e64430184edd3d19",
    measurementId: "G-MWRY3X719K"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;