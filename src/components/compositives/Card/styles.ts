import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export const Content = styled(ImageBackground)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const ButtonCard = styled(TouchableOpacity)`
  border-radius: 10px;
  width: 150px;
  height: 150px;
  background-color: ${theme.colors.secondary60};
  margin-top: 16px;
  margin-left: 8px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`;

export const Box = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px;
`;
