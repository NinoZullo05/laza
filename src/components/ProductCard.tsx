import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Product } from "../types";

interface Props {
  product: Product;
  isFavorite: boolean;
  onPress: () => void;
  onFavoritePress: () => void;
  isDarkMode: boolean;
}

const ProductCard: React.FC<Props> = ({
  product,
  isFavorite,
  onPress,
  onFavoritePress,
  isDarkMode,
}) => {
  return (
    <TouchableOpacity
      style={[styles.productCard, isDarkMode && styles.productCardDark]}
      onPress={onPress}
    >
      <View style={styles.productImagePlaceholder}>
        <Icon
          name="shirt-outline"
          size={50}
          color={isDarkMode ? "#FFF" : "#000"}
        />
      </View>
      <TouchableOpacity
        style={[styles.favoriteButton, isDarkMode && styles.favoriteButtonDark]}
        onPress={onFavoritePress}
      >
        <Icon
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={isFavorite ? "#9775FA" : "#A3A3A3"}
        />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text
          style={[styles.productName, isDarkMode && styles.productNameDark]}
          numberOfLines={2}
        >
          {product.name}
        </Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productCardDark: {
    backgroundColor: "#2D3035",
  },
  productImagePlaceholder: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 6,
  },
  favoriteButtonDark: {
    backgroundColor: "#1B262C",
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1D1E20",
  },
  productNameDark: {
    color: "#FFF",
  },
  productPrice: {
    fontSize: 14,
    color: "#8F959E",
  },
});

export default ProductCard;
