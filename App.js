import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { StyleSheet, View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppNavigator from "./src/navigation/AppNavigator";
import LoadingStore from "./src/components/LoadingStore";
import theme from "./src/constants/theme";
import { store, persistor } from "./src/store";

export default function App(props) {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingStore />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
