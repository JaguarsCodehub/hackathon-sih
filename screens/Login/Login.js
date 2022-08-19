import { useNavigation } from "@react-navigation/core";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered iin with: ", user.email);
      })
      .catch((error) => alert(error.message));
    navigation.navigate("Post");
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
    navigation.navigate("Post");
  };

  return (
    <SafeAreaView style={styles.container} behavior={"height"}>
      <View style={styles.mainimg}>
        <Image
          style={styles.Image}
          source={require("../../assets/images/gifts.png")}
        ></Image>
      </View>
      <View
        style={{
          // marginHorizontal: 40,
          marginBottom: 30,
          paddingBottom: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#262626",
          }}
        >
          Aap ki Suvidha has something more for you !
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutLine]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGreen1,
    // marginTop: 70,
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#000",
    width: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 5,
  },

  buttonOutLine: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#000",
    // borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutLineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  Image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
