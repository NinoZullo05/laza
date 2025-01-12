import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback,
  Platform,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import BrandCard from "../components/BrandCard";
import ProductCard from "../components/ProductCard";
import { Brand, Product } from "../types";

interface Props {
  navigation: any;
}

const { width, height } = Dimensions.get("window");
const productCardWidth = (width - 60) / 2;

const brands: Brand[] = [
  { id: "1", name: "Adidas", totalProducts: 325 },
  { id: "2", name: "Nike", totalProducts: 286 },
  { id: "4", name: "Fila", totalProducts: 158 },
];

const products: Product[] = [
  {
    id: "1",
    name: "Nike Sportswear Club Fleece",
    price: 99,
    description:
      "The Nike Sportswear Club Fleece Hoodie delivers soft warmth in a street-ready profile.",
    colors: ["#3E3E3E", "#7A7A7A", "#CCCCCC"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 287,
  },
  {
    id: "2",
    name: "Trail Running Jacket Nike Windrunner",
    price: 99,
    description:
      "The Nike Windrunner sets you up for comfort in any weather with its water-repellent finish.",
    colors: ["#3E3E3E", "#7A7A7A", "#CCCCCC"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 176,
  },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const translateY = useRef(new Animated.Value(height)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }
  }, [isDarkMode]);

  const toggleDrawer = () => {
    if (isDrawerVisible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: height,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => setIsDrawerVisible(false));
    } else {
      setIsDrawerVisible(true);
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const onBrandPress = (brandId: string) => {
    setSelectedBrand(selectedBrand === brandId ? null : brandId);
  };

  const navigateToProduct = (product: Product) => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <SafeAreaView style={[styles.safeArea, isDarkMode && styles.safeAreaDark]}>
      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={toggleDrawer}
            >
              <Icon
                name="menu-outline"
                size={24}
                color={isDarkMode ? "#FFF" : "#000"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate("Cart")}
            >
              <Icon
                name="cart-outline"
                size={24}
                color={isDarkMode ? "#FFF" : "#000"}
              />
              {/* Cart Badge */}
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={[styles.title, isDarkMode && styles.titleDark]}>
              Hello
            </Text>
            <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
              Welcome to Laza.
            </Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View
              style={[
                styles.searchInputContainer,
                isDarkMode && styles.searchInputContainerDark,
              ]}
            >
              <Icon
                name="search-outline"
                size={18}
                color="#A3A3A3"
                style={styles.searchIcon}
              />
              <TextInput
                ref={searchInputRef}
                style={[
                  styles.searchInput,
                  isDarkMode && styles.searchInputDark,
                ]}
                placeholder="Search..."
                placeholderTextColor={isDarkMode ? "#8F959E" : "#8B9097"}
                value={search}
                onChangeText={setSearch}
              />
            </View>
            <TouchableOpacity
              style={styles.voiceButton}
              onPress={() => {
                /* Implement voice search */
              }}
            >
              <Icon name="mic-outline" size={22} color="#A3A3A3" />
            </TouchableOpacity>
          </View>

          {/* Brands Section */}
          <View style={styles.sectionHeader}>
            <Text
              style={[
                styles.sectionTitle,
                isDarkMode && styles.sectionTitleDark,
              ]}
            >
              Choose Brand
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Brands")}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.brandsContainer}
          >
            {brands.map((brand) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                isSelected={selectedBrand === brand.id}
                onPress={() => onBrandPress(brand.id)}
                isDarkMode={isDarkMode}
              />
            ))}
          </ScrollView>

          {/* New Arrival Section */}
          <View style={styles.sectionHeader}>
            <Text
              style={[
                styles.sectionTitle,
                isDarkMode && styles.sectionTitleDark,
              ]}
            >
              New Arrival
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("NewArrivals")}
            >
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.productsGrid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={favorites.includes(product.id)}
                onPress={() => navigateToProduct(product)}
                onFavoritePress={() => toggleFavorite(product.id)}
                isDarkMode={isDarkMode}
              />
            ))}
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={[styles.bottomNav, isDarkMode && styles.bottomNavDark]}>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="home" size={24} color="#9775FA" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate("Favorites")}
          >
            <Icon name="heart-outline" size={24} color="#A3A3A3" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate("Cart")}
          >
            <Icon name="cart-outline" size={24} color="#A3A3A3" />
          </TouchableOpacity>
        </View>

        {/* Drawer Overlay */}
        {isDrawerVisible && (
          <TouchableWithoutFeedback onPress={toggleDrawer}>
            <Animated.View style={[styles.overlay, { opacity: fadeAnim }]} />
          </TouchableWithoutFeedback>
        )}

        {/* Drawer */}
        <CustomDrawer navigation={undefined} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  safeAreaDark: {
    backgroundColor: "#1B262C",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  containerDark: {
    backgroundColor: "#121212",
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    alignItems: "center",
  },
  headerButton: {
    padding: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: "#000",
  },
  headerIconDark: {
    tintColor: "#FFF",
  },
  welcomeSection: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
  },
  titleDark: {
    color: "#FFF",
  },
  subtitle: {
    fontSize: 18,
    color: "#A3A3A3",
  },
  subtitleDark: {
    color: "#B8B8B8",
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    width: width - 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInputContainerDark: {
    backgroundColor: "#2D3035",
  },
  searchInput: {
    fontSize: 14,
    color: "#000",
    flex: 1,
  },
  searchInputDark: {
    color: "#FFF",
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: "#A3A3A3",
    marginRight: 10,
  },
  voiceButton: {
    padding: 10,
  },
  voiceIcon: {
    width: 22,
    height: 22,
    tintColor: "#A3A3A3",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
  sectionTitleDark: {
    color: "#FFF",
  },
  viewAll: {
    fontSize: 14,
    color: "#A3A3A3",
  },
  brandsContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
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
  brandLogo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginRight: 10,
  },
  brandInfo: {
    justifyContent: "center",
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
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  productCard: {
    width: productCardWidth,
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
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
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
  favoriteIcon: {
    width: 20,
    height: 20,
    tintColor: "#A3A3A3",
  },
  favoriteIconActive: {
    tintColor: "#9775FA",
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
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottomNavDark: {
    backgroundColor: "#121212",
  },
  bottomNavItem: {
    alignItems: "center",
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: "#A3A3A3",
  },
  bottomNavIconActive: {
    tintColor: "#9775FA",
  },
  cartBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#FF4B4B",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});

export default HomeScreen;
