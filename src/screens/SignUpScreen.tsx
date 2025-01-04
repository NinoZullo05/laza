import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";

const SignUpScreen = ({ navigation }: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput placeholder="Email Address" style={styles.input} />

      <View style={styles.switchContainer}>
        <Text>Remember me</Text>
        <Switch
          value={rememberMe}
          onValueChange={(value) => setRememberMe(value)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#9775FA",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
