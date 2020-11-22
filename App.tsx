import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Routes from "./src/routes";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ height: "100%" }}>
        <Routes colorScheme={colorScheme} />
        <StatusBar translucent={true} style={colorScheme} animated={true} />
      </SafeAreaProvider>
    );
  }
}
