import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { memo } from "react";
import Home from "./home.routes";

function Routes() {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default memo(Routes);
