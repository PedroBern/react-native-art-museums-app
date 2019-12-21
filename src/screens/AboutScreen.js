import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Appbar, Paragraph, Headline, Divider } from "react-native-paper";

import Link from "../components/Link";

const AboutScreen = () => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="About" />
      </Appbar.Header>
      <View style={styles.content}>
        <View>
          <Headline style={styles.centeredText}>Built with the</Headline>
          <Link url="https://github.com/harvardartmuseums/api-docs">
            Harvard Art Museums API
          </Link>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.row}>
          <Headline style={styles.centeredText}>Source code on </Headline>
          <Link url="https://github.com/PedroBern/react-native-art-museums-app">
            GitHub
          </Link>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.row}>
          <Paragraph style={styles.centeredText}></Paragraph>
          <Link
            url="https://github.com/PedroBern/react-native-art-museums-app/blob/master/privacy_policy.md"
            Component={Paragraph}
          >
            Privacy policy
          </Link>
        </View>
        <Divider style={styles.divider} />
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
  divider: {
    width: "100%",
    padding: 1
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
  },
  link: {
    color: "#2e78b7"
  }
});

export default AboutScreen;
