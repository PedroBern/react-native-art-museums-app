import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Headline } from "react-native-paper";

const Link = ({ url, children, Component, style }) => (
  <TouchableOpacity onPress={() => handleLinkPress(url)}>
    <Component style={[styles.link, styles.centeredText, style]}>
      {children}
    </Component>
  </TouchableOpacity>
);

Link.defaultProps = {
  Component: Headline,
  style: {}
};

function handleLinkPress(url) {
  WebBrowser.openBrowserAsync(url);
}
const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center"
  },
  link: {
    color: "#2e78b7"
  }
});

export default Link;
