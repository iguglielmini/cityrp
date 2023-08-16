import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Setting } from "@/pages";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Setting} />
    </Navigator>
  );
};

export { AppRoutes };
