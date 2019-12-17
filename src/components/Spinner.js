import React from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Spinner = props => (
  <ActivityIndicator
    animating={true}
    color={"#000"}
    size="large"
    style={styles.root}
    {...props}
  />
);

const styles = StyleSheet.create({
  root: {
    padding: 16
  }
});

export default Spinner;
