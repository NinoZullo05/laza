import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

interface CustomDrawerProps {
  navigation: any;
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {/* User Info Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>Mrh Raju</Text>
            <Text style={styles.verified}>
              Verified Profile{" "}
              <Ionicons name="checkmark-circle" size={16} color="green" />
            </Text>
          </View>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderText}>3 Orders</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Dark Mode")}
          >
            <Ionicons name="sunny-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Account Information")}
          >
            <Ionicons name="person-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Account Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Password")}
          >
            <MaterialIcons name="lock-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Order")}
          >
            <Ionicons name="receipt-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("My Cards")}
          >
            <FontAwesome name="credit-card" size={24} color="#000" />
            <Text style={styles.menuText}>My Cards</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Wishlist")}
          >
            <Ionicons name="heart-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("Settings")}
          >
            <Ionicons name="settings-outline" size={24} color="#000" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      {/* Logout Section */}
      <TouchableOpacity
        style={styles.logoutSection}
        onPress={() => console.log("Logout")}
      >
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  verified: {
    fontSize: 14,
    color: "gray",
  },
  orderButton: {
    marginLeft: "auto",
    backgroundColor: "#e0f7fa",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  orderText: {
    fontSize: 12,
    color: "#00796b",
    fontWeight: "bold",
  },
  menuSection: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuText: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  logoutSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    marginLeft: 16,
  },
});

export default CustomDrawer;
