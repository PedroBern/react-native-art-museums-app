import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

const EmptyList = () => (
  <View style={styles.root}>
    <Paragraph>Nothing to show.</Paragraph>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    padding: 16
  }
});

export default EmptyList;
