import React from "react";
import { createAppContainer } from "react-navigation";
// import { createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import { FluidNavigator } from "react-navigation-fluid-transitions";

import MainTabNavigator from "./MainTabNavigator";
import DetailsScreen from "../screens/DetailsScreen";

const MainStack = FluidNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        headerShown: false
      }
    },
    Details: DetailsScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

export default createAppContainer(MainStack);
