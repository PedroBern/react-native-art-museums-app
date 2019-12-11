import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import PersonScreen from "../screens/PersonScreen";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Details: DetailsScreen,
    Person: PersonScreen
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
