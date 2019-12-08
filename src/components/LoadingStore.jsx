import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

import Spinner from "./Spinner";

const LoadingStore = ({ route, focused, color }) => (
  <View style={styles.root}>
    <Spinner />
    <Paragraph>Loading previous state...</Paragraph>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LoadingStore;
