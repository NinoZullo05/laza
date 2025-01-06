import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Brand } from "../types";

interface Props {
  brand: Brand;
  isSelected: boolean;
  onPress: () => void;
  isDarkMode: boolean;
}

const BrandCard: React.FC<Props> = ({
  brand,
  isSelected,
  onPress,
  isDarkMode,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.brandCard,
        isSelected && styles.brandCardSelected,
        isDarkMode && styles.brandCardDark,
      ]}
      onPress={onPress}
    >
      <Icon
        name={getBrandIcon(brand.name)}
        size={35}
        color={isSelected ? "#FFF" : isDarkMode ? "#FFF" : "#1D1E20"}
      />
      <View style={styles.brandInfo}>
        <Text
          style={[
            styles.brandName,
            isSelected && styles.brandNameSelected,
            isDarkMode && styles.brandNameDark,
          ]}
        >
          {brand.name}
        </Text>
        <Text
          style={[
            styles.brandProducts,
            isSelected && styles.brandProductsSelected,
            isDarkMode && styles.brandProductsDark,
          ]}
        >
          {brand.totalProducts} Products
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const getBrandIcon = (brandName: string): string => {
  switch (brandName.toLowerCase()) {
    case "adidas":
      return "triangle-outline";
    case "nike":
      return "checkmark-outline";
    case "puma":
      return "paw-outline";
    case "fila":
      return "flash-outline";
    default:
      return "shirt-outline";
  }
};

const styles = StyleSheet.create({
  brandCard: {
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  brandCardSelected: {
    backgroundColor: "#9775FA",
  },
  brandCardDark: {
    backgroundColor: "#2D3035",
  },
  brandInfo: {
    justifyContent: "center",
    marginLeft: 10,
  },
  brandName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1D1E20",
  },
  brandNameSelected: {
    color: "#FFF",
  },
  brandNameDark: {
    color: "#FFF",
  },
  brandProducts: {
    fontSize: 12,
    color: "#8F959E",
  },
  brandProductsSelected: {
    color: "#FFF",
  },
  brandProductsDark: {
    color: "#A3A3A3",
  },
});

export default BrandCard;
