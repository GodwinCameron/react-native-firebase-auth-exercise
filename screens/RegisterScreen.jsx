import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { handleCreateUser, handleLogin } from "../services/authService";

const RegisterScreen = (props) => {
  const { setCreatingAccount } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Login Function
  const register = () => {
    handleCreateUser(email, password, username);
    setCreatingAccount(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Register:</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Choose Your Username"
          onChangeText={(newText) => setUsername(newText)}
          defaultValue={username}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Choose Your Password"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
        />

        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCreatingAccount(false)}>
          <Text style={styles.toLoginText}>
            Already have an Account? Login here
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 150,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "blue",
    textAlign: "center",
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  toLoginText: {
    textAlign: "center",
    marginTop: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
