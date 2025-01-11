import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomDrawer = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <View style={styles.drawerContainer}>
      {/* User Info Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Mrh Raju</Text>
          <Text style={styles.verified}>Verified Profile</Text>
        </View>
        <TouchableOpacity style={styles.ordersButton}>
          <Text style={styles.ordersText}>3 Orders</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItems}>
        <View style={styles.menuItem}>
          <Icon name="brightness-6" size={24} color="#000" />
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
        <MenuItem icon="person" text="Account Information" />
        <MenuItem icon="lock" text="Password" />
        <MenuItem icon="shopping-bag" text="Order" />
        <MenuItem icon="credit-card" text="My Cards" />
        <MenuItem icon="favorite" text="Wishlist" />
        <MenuItem icon="settings" text="Settings" />
      </View>

      {/* Logout Section */}
      <TouchableOpacity style={styles.logout}>
        <Icon name="logout" size={24} color="#ff3b30" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const MenuItem = ({ icon, text }: { icon: string; text: string }) => (
  <View style={styles.menuItem}>
    <Icon name={icon} size={24} color="#000" />
    <Text style={styles.menuText}>{text}</Text>
  </View>
);

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  verified: {
    fontSize: 14,
    color: "gray",
  },
  ordersButton: {
    marginLeft: "auto",
    backgroundColor: "#f1f1f1",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  ordersText: {
    fontSize: 12,
    color: "#000",
  },
  menuItems: {
    flex: 1,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
  logoutText: {
    fontSize: 16,
    color: "#ff3b30",
    marginLeft: 15,
  },
});
