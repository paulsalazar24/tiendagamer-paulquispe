import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCVjEZzb-iNsc25zu_2L-i0upU6mKPL_RU",
    authDomain: "coder-database-5a603.firebaseapp.com",
    projectId: "coder-database-5a603",
    storageBucket: "coder-database-5a603.appspot.com",
    messagingSenderId: "855874467485",
    appId: "1:855874467485:web:f91ae9c1dc73287876c674"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
