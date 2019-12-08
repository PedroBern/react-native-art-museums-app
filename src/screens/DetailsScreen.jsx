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
import { Transition } from "react-navigation-fluid-transitions";
import { Appbar } from "react-native-paper";

import { resetCurrentDetail } from "../store/actions/details";

const DetailsScreen = ({ navigation, resetCurrentDetail }) => {
  useEffect(() => {
    return () => resetCurrentDetail();
  }, []);

  const fluidId = navigation.getParam("fluidId", "not and id");
  const title = navigation.getParam("title", "No title to display");
  const division = navigation.getParam("division", "");
  const images = navigation.getParam("images", []);

  return (
    <View style={styles.root}>
      <Transition anchor={fluidId}>
        <Appbar.Header style={styles.header}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={title} subtitle={division} />
        </Appbar.Header>
      </Transition>
      <ScrollView style={styles.body}>
        <Transition shared={fluidId}>
          <Image source={{ uri: images[0].url }} style={styles.image} />
        </Transition>
        <Transition anchor={fluidId}>
          <View>
            <Text>Content goes here</Text>
          </View>
        </Transition>
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

export default connect(null, { resetCurrentDetail })(DetailsScreen);
