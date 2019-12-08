import React from "react";
import { createAppContainer } from "react-navigation";
// import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import DetailsScreen from "../screens/DetailsScreen";

const MainStack = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        headerShown: false
      }
    },
    Details: DetailsScreen
  },
  { initialRouteName: "Main" }
);

export default createAppContainer(MainStack);
