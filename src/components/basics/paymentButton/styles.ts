import { theme } from "@/styles/theme";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Content = styled(View)`
  width: 100%;
  height: 100px;
  background-color: ${theme.colors.secondary60};

  position: absolute;
  bottom: 0;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

export const BoxGeneral = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled(Text)`
  font-size: 32px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const ButtonPay = styled(TouchableOpacity)`
  padding: 8px;
  width: 200px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;
