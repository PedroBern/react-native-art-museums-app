import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Constants from "expo-constants";

import TabBarIcon from "../components/TabBarIcon";
import FeedScreen from "../screens/FeedScreen";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AboutScreen from "../screens/AboutScreen";
import DetailsScreen from "../screens/DetailsScreen";
import theme from "../constants/theme";

const renderTabBar = props => (
  <TabBar
    {...props}
    style={styles.tabBar}
    indicatorStyle={styles.indicator}
    renderIcon={props => <TabBarIcon {...props} />}
  />
);

const renderScene = ({ route }) => {
  switch (route.key) {
    case "feed":
      return <FeedScreen />;
    case "favorites":
      return <FavoritesScreen />;
    case "explore":
      return <ExploreScreen />;
    case "about":
      return <AboutScreen />;
    default:
      return null;
  }
};

const MainTabNavigator = props => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: "feed", icon: "ios-home" },
      { key: "explore", icon: "ios-search" },
      { key: "favorites", icon: "ios-heart" },
      { key: "about", icon: "ios-more" }
    ]
  });

  return (
    <TabView
      tabBarPosition="bottom"
      navigationState={state}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={index => setState({ ...state, index })}
      initialLayout={{ width: Dimensions.get("window").width }}
      sceneContainerStyle={styles.scene}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.primary
  },
  indicator: {
    top: 0,
    backgroundColor: theme.colors.secondary,
    height: 3
  },
  scene: {
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary
  }
});

export default MainTabNavigator;
