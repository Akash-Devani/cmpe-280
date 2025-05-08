// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// ADD FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "AIzaSyC7Gx_FFCTs3bjTkabCX9gp_qXtkg55Aek",
    authDomain: "day-weaver-pggnb.firebaseapp.com",
    projectId: "day-weaver-pggnb",
    storageBucket: "day-weaver-pggnb.firebasestorage.app",
    messagingSenderId: "385394644538",
    appId: "1:385394644538:web:2fa9bd9e433e23dae00703",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const analytics = getAnalytics(app);
