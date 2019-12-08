import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

const TabBarIcon = ({ route, focused, color }) => (
  <View style={styles.root}>
    <Icon size={focused ? 24 : 20} style={{ color }} name={route.icon} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: 24,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TabBarIcon;
