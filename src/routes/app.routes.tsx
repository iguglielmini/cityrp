import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Notification, Product, Setting, Event } from "@/pages";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Home" component={Home} />
      <Screen name="Event" component={Event} />
      <Screen name="Product" component={Product} />
      <Screen name="Settings" component={Setting} />
      <Screen name="Notification" component={Notification} />
    </Navigator>
  );
};

export { AppRoutes };
