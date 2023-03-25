import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "top-mangas-8859d.firebaseapp.com",
    projectId: "top-mangas-8859d",
    storageBucket: "top-mangas-8859d.appspot.com",
    messagingSenderId: "470170202942",
    appId: "1:470170202942:web:0e5de2ef2ef2b3d173726f"
};

const app = initializeApp(firebaseConfig);