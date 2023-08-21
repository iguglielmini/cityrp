import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Product, Setting } from "@/pages";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="Product" component={Product} />
      <Screen name="Settings" component={Setting} />
    </Navigator>
  );
};

export { AppRoutes };
