import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCOasObd1oD1N8ArTX3bFuyqO7VWhjofFs",
  authDomain: "rajeshprime-d660a.firebaseapp.com",
  projectId: "rajeshprime-d660a",
  storageBucket: "rajeshprime-d660a.appspot.com",
  messagingSenderId: "680234042192",
  appId: "1:680234042192:web:e9553c5cf46b2b68ba2255",
  measurementId: "G-K33REF2G7P",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
