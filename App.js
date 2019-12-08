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
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  } else {
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
}

async function loadResourcesAsync() {
  // await Promise.all([
  //   Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("native-base/Fonts/Ionicons.ttf")
  //   })
  // ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
