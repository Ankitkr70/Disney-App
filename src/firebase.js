import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVDB4H4M2Xh9WxVNyiGULkuHghEGo2_y0",
  authDomain: "disney-app-effa7.firebaseapp.com",
  projectId: "disney-app-effa7",
  storageBucket: "disney-app-effa7.appspot.com",
  messagingSenderId: "83622606909",
  appId: "1:83622606909:web:2d0068be7da00ff0bb9254",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
