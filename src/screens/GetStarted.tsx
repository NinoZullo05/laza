import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GetStarted = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s Get Started</Text>

      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.twitterButton]}>
        <Text style={styles.buttonText}>Twitter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.link}>Signin</Text>
      </Text>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#4267B2",
  },
  twitterButton: {
    backgroundColor: "#1DA1F2",
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: "gray",
  },
  link: {
    color: "#6A5AE0",
    fontWeight: "bold",
  },
  createAccountButton: {
    marginTop: 20,
    padding: 15,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#9775FA",
  },
  createAccountText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GetStarted;
