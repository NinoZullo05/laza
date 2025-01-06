import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Importa le icone dalla libreria

interface DrawerProps {
  isVisible: boolean;
  onClose: () => void;
  translateY: Animated.Value;
}

const CustomDrawer: React.FC<DrawerProps> = ({
  isVisible,
  onClose,
  translateY,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Qui implementeresti la logica per cambiare il tema dell'app
  };

  if (!isVisible) return null;

  const menuItems = [
    { id: "account", icon: "person-circle", title: "Account Information" },
    { id: "password", icon: "key", title: "Password" },
    { id: "order", icon: "cart", title: "Order" },
    { id: "cards", icon: "card", title: "My Cards" },
    { id: "wishlist", icon: "heart", title: "Wishlist" },
    { id: "settings", icon: "settings", title: "Settings" },
  ];

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
        },
      ]}
    >
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Icon name="menu" style={styles.menuIcon} size={24} color="#1D1E20" />
          <View style={styles.ordersCounter}>
            <Text style={styles.ordersText}>3 Orders</Text>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Icon
            name="person"
            style={styles.profileImage}
            size={50}
            color="#1D1E20"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.profileName}>Mrh Raju</Text>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>Verified Profile</Text>
              <View style={styles.verifiedDot} />
            </View>
          </View>
        </View>
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.menuItem}>
        <View style={styles.menuItemLeft}>
          <Icon name="moon" style={styles.menuIcon} size={24} color="#1D1E20" />
          <Text style={styles.menuText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#E7E8EA", true: "#6A5AE0" }}
          thumbColor={"#FFFFFF"}
        />
      </View>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => {
            /* Implementa la navigazione */
          }}
        >
          <View style={styles.menuItemLeft}>
            <Icon
              name={item.icon}
              style={styles.menuIcon}
              size={24}
              color="#1D1E20"
            />
            <Text style={styles.menuText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Icon
          name="log-out"
          style={[styles.menuIcon, styles.logoutIcon]}
          size={24}
          color="#FF5757"
        />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    paddingTop: 30,
    marginTop: 60,
  },
  profileSection: {
    marginBottom: 32,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  ordersCounter: {
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  ordersText: {
    color: "#1D1E20",
    fontSize: 13,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1D1E20",
    marginBottom: 4,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  verifiedText: {
    fontSize: 13,
    color: "#8F959E",
    marginRight: 4,
  },
  verifiedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#34C759",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F6FA",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    fontSize: 15,
    color: "#1D1E20",
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: 24,
  },
  logoutIcon: {
    color: "#FF5757",
  },
  logoutText: {
    fontSize: 15,
    color: "#FF5757",
    marginLeft: 12,
  },
});

export default CustomDrawer;
