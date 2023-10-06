// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9GOfJyzmLga_uye0dX2k2Xe6HVahHh_Q",
    authDomain: "whatsapp-de292.firebaseapp.com",
    projectId: "whatsapp-de292",
    storageBucket: "whatsapp-de292.appspot.com",
    messagingSenderId: "55026547371",
    appId: "1:55026547371:web:f5e820071a16b67e3bd5ee",
    measurementId: "G-FWPBKQPBZN",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
