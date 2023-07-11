import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7bG4gePM6CNpEL3di_UMg6v7ms2ey2PE",
  authDomain: "checkov-lmkw.firebaseapp.com",
  projectId: "checkov-lmkw",
  storageBucket: "checkov-lmkw.appspot.com",
  messagingSenderId: "92584594559",
  appId: "1:92584594559:web:3bc7f1a80066896f6bc34a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
