import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import PersonScreen from "../screens/PersonScreen";
import ListScreen from "../screens/ListScreen";
import FeedScreen from "../screens/FeedScreen";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Details: DetailsScreen,
    Person: PersonScreen,
    List: ListScreen,
    Feed: FeedScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      gesturesEnabled: true,
      headerShown: false
    }
  }
);

export default createAppContainer(MainStack);
