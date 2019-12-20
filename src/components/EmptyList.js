import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

const EmptyList = ({ notShow }) =>
  notShow ? null : (
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

EmptyList.propTypes = {
  notShow: PropTypes.bool
};

export default EmptyList;
