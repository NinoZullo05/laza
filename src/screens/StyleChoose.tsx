import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { getBackgroundColor } from "../hooks/getBackgroundColor";

const StyleChoose = ({ navigation }: any) => {
  const [bgColor, setBgColor] = useState("#9775FA");

  useEffect(() => {
    const fetchBackgroundColor = async () => {
      const color = await getBackgroundColor();
      setBgColor(color);
    };
    fetchBackgroundColor();
  }, []);

  const Skip = () => {
    navigation.navigate("GetStarted");
    console.log("Premuto");
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/style.png")}
          style={styles.image}
        />
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Look Good, Feel Good</Text>
        <Text style={styles.subtitle}>
          Create your individual & unique style and look amazing everyday.
        </Text>

        {/* Men / Women */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.inactiveButton]}>
            <Text style={[styles.buttonText, styles.inactiveText]}>Men</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.activeButton]}>
            <Text style={[styles.buttonText, styles.activeText]}>Women</Text>
          </TouchableOpacity>
        </View>

        {/* Skip */}
        <TouchableOpacity onPress={Skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#9775FA",
  },
  inactiveButton: {
    backgroundColor: "#F1EFF6",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "#8E8E8E",
  },
  skipText: {
    fontSize: 16,
    color: "#9775FA",
    fontWeight: "500",
  },
});

export default StyleChoose;
