import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Animated } from "react-native";
import Constants from "expo-constants";

import HomePage from "../pages/Home";
import Detail from "../pages/Detail";

function Home() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              headerShown: false,
              headerStyle: { marginTop: Constants.statusBarHeight },
            }}
          />
          <Stack.Screen name="Detalhe" component={Detail} />
        </>
      </Stack.Navigator>
    </>
  );
}
export default Home;
