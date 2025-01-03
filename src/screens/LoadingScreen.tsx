import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";

const LoadingScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);
    navigation.Navigate("Choose");
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/Logo.png")} style={styles.image} />
      </View>
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9775FA",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    resizeMode: "contain",
  },
});

export default LoadingScreen;
