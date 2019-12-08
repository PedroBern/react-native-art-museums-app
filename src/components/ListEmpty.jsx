import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

import Spinner from "./Spinner";

const ListEmpty = ({ loading, error, refreshing }) => (
  <View style={styles.root}>
    {loading && !refreshing ? (
      <Spinner />
    ) : error ? (
      <Paragraph>{error}</Paragraph>
    ) : !refreshing ? (
      <Paragraph>Nothing to show</Paragraph>
    ) : null}
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

export default ListEmpty;
