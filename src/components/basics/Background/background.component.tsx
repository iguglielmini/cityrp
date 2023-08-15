import React, { ReactNode } from "react";
import { View } from "react-native";

import { theme } from "@/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
// import { Container } from './styles';

type Props = {
  children: ReactNode;
};

const Background: React.FC<Props> = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient style={{ flex: 1 }} colors={[secondary80, secondary100]}>
      {children}
    </LinearGradient>
  );
};

export default Background;
