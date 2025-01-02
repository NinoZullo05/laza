import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo.png")} style={styles.image} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9775FA",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});
