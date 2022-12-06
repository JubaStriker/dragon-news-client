// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhKSpPb07gRHEV7IwyTxkSw6b0uHn7wE0",
    authDomain: "dragon-news-bb33c.firebaseapp.com",
    projectId: "dragon-news-bb33c",
    storageBucket: "dragon-news-bb33c.appspot.com",
    messagingSenderId: "366419581178",
    appId: "1:366419581178:web:64e2eb0187f57e8d1e1143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;