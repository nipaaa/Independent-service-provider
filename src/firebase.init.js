import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbb8gNVz1UbkqH3o8wv4JXDPyI6X8NqGU",
  authDomain: "independent-service-prov-8c99d.firebaseapp.com",
  projectId: "independent-service-prov-8c99d",
  storageBucket: "independent-service-prov-8c99d.appspot.com",
  messagingSenderId: "839952945419",
  appId: "1:839952945419:web:3711cc06752b4adc93920e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;