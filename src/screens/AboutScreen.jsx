import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Appbar, Paragraph, Headline } from "react-native-paper";

import Link from "../components/Link";

const AboutScreen = ({}) => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="About" />
      </Appbar.Header>
      <View style={styles.content}>
        <View>
          <Headline style={styles.centeredText}>
            This is my first react-native App, made for the final project of
          </Headline>
          <Link url="https://www.edx.org/course/cs50s-mobile-app-development-with-react-native">
            CS50 mobile on edX
          </Link>
        </View>
        <View style={styles.row}>
          <Headline style={styles.centeredText}>Source code on </Headline>
          <Link url="https://github.com/PedroBern/react-native-art-museums-app">
            GitHub
          </Link>
        </View>
        <View>
          <Headline style={styles.centeredText}>Built with</Headline>
          <Link url="https://github.com/harvardartmuseums/api-docs">
            Harvard Art Museums API
          </Link>
        </View>
        <View style={styles.row}>
          <Paragraph style={styles.centeredText}>by </Paragraph>
          <Link url="https://github.com/pedrobern" Component={Paragraph}>
            @pedrobern
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 40
  },
  centeredText: {
    textAlign: "center"
  },
  row: {
    flexDirection: "row"
  }
});

export default AboutScreen;
