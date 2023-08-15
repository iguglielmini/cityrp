import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Background } from "@/components/basics";
import { AuthProvider } from "@/hooks";
import Routes from "@/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
