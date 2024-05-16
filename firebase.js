import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

//best practice is to store this in a .env file and import it here
const firebaseConfig = {
  apiKey: "AIzaSyBpCr-rr3IGrC8w97mJJlExOs3yiZKfW4c",
  authDomain: "class-work-f8cec.firebaseapp.com",
  projectId: "class-work-f8cec",
  storageBucket: "class-work-f8cec.appspot.com",
  messagingSenderId: "818919614915",
  appId: "1:818919614915:web:09e36b71332af4489a7576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);


//persist user authentication state
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


//initialize all other firebase services here, such as Firestore, Storage, etc.

