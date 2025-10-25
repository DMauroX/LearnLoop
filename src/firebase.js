// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK2IO2fJqciMpLOzzTdASl7aX4vCIU6Q8",
    authDomain: "learnloop-a61a9.firebaseapp.com",
    projectId: "learnloop-a61a9",
    storageBucket: "learnloop-a61a9.firebasestorage.app",
    messagingSenderId: "634337556688",
    appId: "1:634337556688:web:c422a79e41e3e1a93f46d5"
    databaseURL: "https://TUO_PROJECT_ID.firebaseio.com", // Aggiungi l'URL del database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // Esporta il database
