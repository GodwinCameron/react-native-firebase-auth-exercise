import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { memoryLruGarbageCollector } from "firebase/firestore";

export const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User logged in: ", user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("There was a problem logging in: ", errorCode, errorMessage);
    });
};

export const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User logged out");
    }).catch((error) => {
      // An error happened.
      console.log("There was a problem logging out: ", error);
    });
}


export const handleCreateUser = (email, password, displayName) => {

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const currentUser = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: displayName
    }).then(() => {
      console.log("User signed up: ", currentUser.email, currentUser.displayName);
    }).catch((error) => {
      console.log("There was a problem while setting the displayName during sign up: ", error);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("There was a problem signing up: ", errorCode, errorMessage);
  });
}