import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from "react-native";
import { Appbar } from "react-native-paper";

import DetailsContent from "../components/DetailsContent";

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam("id", "");
  const fluidId = navigation.getParam("fluidId", "");
  const title = navigation.getParam("title", "Missing title");
  const division = navigation.getParam("division", "");
  const primaryimageurl = navigation.getParam("primaryimageurl", "");

  return (
    <View style={styles.root}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={title} subtitle={division} />
      </Appbar.Header>
      <ScrollView style={styles.body}>
        <Image source={{ uri: primaryimageurl }} style={styles.image} />
        <DetailsContent id={id} />
      </ScrollView>
    </View>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black"
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    width: width
  },
  header: {
    width: width
  },
  image: {
    width: width,
    height: width
  }
});

export default DetailsScreen;
