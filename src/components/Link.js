import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Headline } from "react-native-paper";

const Link = ({ url, children, Component, style }) => (
  <TouchableOpacity testID="hyperlink" onPress={() => handleLinkPress(url)}>
    <Component style={[styles.link, styles.centeredText, style]}>
      {children}
    </Component>
  </TouchableOpacity>
);

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

Link.defaultProps = {
  Component: Headline,
  style: {}
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
