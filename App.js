import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import RegisterScreen from "./screens/RegisterScreen";

// TODO: Navigation Container

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [creatingAccount, setCreatingAccount] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User ", user.email, " is logged in");
        setUser(user);
        setLoggedIn(true);
      } else {
        console.log("no user logged in");
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    // <RegisterScreen setCreatingAccount={setCreatingAccount} />

    <>
      {loggedIn ? (
        <ProfileScreen user={user} />
      ) : creatingAccount ? (
        <RegisterScreen setCreatingAccount={setCreatingAccount} />
      ) : (
        <LoginScreen setCreatingAccount={setCreatingAccount} />
      )}
    </>
  );
}
