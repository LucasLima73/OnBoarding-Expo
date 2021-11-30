import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoarding from "./src/screen/OnBoarding";
import Login from "./src/screen/Login";

const AppStack = createNativeStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={OnBoarding}
        />
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
  } else {
    return <Login />;
  }
};

export default App;
