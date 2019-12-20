import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Appbar, Surface, Title, TouchableRipple } from "react-native-paper";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

const ExploreScreen = () => {
  const { push } = useNavigation();

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="Explore" />
      </Appbar.Header>
      <View style={styles.content}>
        <ScrollView style={styles.grow}>
          {[
            "Person",
            "Gallery",
            "Classification",
            "Technique",
            "Period",
            "Object",
            "Culture"
          ].map(target => (
            <Surface elevation={4} style={styles.surface} key={target}>
              <TouchableRipple
                onPress={() => push("List", { target })}
                style={styles.card}
              >
                <Title>{target}</Title>
              </TouchableRipple>
            </Surface>
          ))}
        </ScrollView>
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
    paddingTop: 8,
    paddingBottom: 8
  },
  grow: {
    flex: 1
  },
  card: {
    padding: 16,
    paddingLeft: 32
  },
  surface: {
    margin: 8,
    borderRadius: 16
    // backgroundColor: "#fafafa"
  }
});

export default ExploreScreen;
