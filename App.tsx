import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Routes from "./src/routes";

import { AppearanceProvider } from "react-native-appearance";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppearanceProvider>
        <SafeAreaProvider style={{ height: "100%" }}>
          <Routes colorScheme={colorScheme} />
          <StatusBar
            translucent={true}
            style={colorScheme === "dark" ? "light" : "dark"}
            animated={true}
          />
        </SafeAreaProvider>
      </AppearanceProvider>
    );
  }
}
