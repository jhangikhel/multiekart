import firebase from "@firebase/app";
require("firebase/auth");
const configs = require("./index.json");

/* const config = {
  apiKey: configs.firebase.apiKey,
  authDomain: configs.firebase.authDomain,
  databaseURL: configs.firebase.databaseURL,
  projectId: configs.firebase.projectId,
  storageBucket: configs.firebase.storageBucket,
  messagingSenderId: configs.firebase.messagingSenderId,
  appId: configs.firebase.appId,
}; */
const config = {
  apiKey: "AIzaSyBjPKqQg1y3ezkl8rX7vH1KHZGy_lhSx5Y",
  authDomain: "multiekartprod.firebaseapp.com",
  projectId: "multiekartprod",
  storageBucket: "multiekartprod.appspot.com",
  messagingSenderId: "947934157698",
  appId: "1:947934157698:web:59b8c4b015b994da93cd9b",
  measurementId: "G-HX6K0BEYHN"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export default firebase.auth();
