import AsyncStorage from "@react-native-async-storage/async-storage";

export const getBackgroundColor = async (): Promise<string> => {
  try {
    const color = await AsyncStorage.getItem("backgroundColor");
    return color || "#9775FA";
  } catch (error) {
    console.error("Error retrieving background color:", error);
    return "#9775FA";
  }
};
