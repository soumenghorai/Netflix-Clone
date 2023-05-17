import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgZ4_dsdzRbvkJ4rJdO8PiVwl_wg_ApCE",
  authDomain: "react-netflix-clone-e764b.firebaseapp.com",
  projectId: "react-netflix-clone-e764b",
  storageBucket: "react-netflix-clone-e764b.appspot.com",
  messagingSenderId: "934139067684",
  appId: "1:934139067684:web:03df05439b76b9b97287b1",
  measurementId: "G-YF7PRYZ4Z6"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
