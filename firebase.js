import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhSjunNkCL-OtY1AbCb_bAgUV6M1MLcKY",
  authDomain: "hackathon-post.firebaseapp.com",
  projectId: "hackathon-post",
  storageBucket: "hackathon-post.appspot.com",
  messagingSenderId: "941646491989",
  appId: "1:941646491989:web:cb254f09f155b7767dffdc",
};

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;
