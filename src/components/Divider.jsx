import React from "react";
import { StyleSheet } from "react-native";
import { Divider } from "react-native-paper";

const CustomDivider = () => <Divider style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    marginTop: 8,
    marginBottom: 8
  }
});

export default CustomDivider;
