// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuYrxbKvbteFWVsRh4dOeim31btE_GZBQ",
  authDomain: "resumeapplication-942fd.firebaseapp.com",
  projectId: "resumeapplication-942fd",
  storageBucket: "resumeapplication-942fd.appspot.com",
  messagingSenderId: "569992602427",
  appId: "1:569992602427:web:15065d0b16aea6c1a6cd1e",
  measurementId: "G-GRZQ9451V8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
