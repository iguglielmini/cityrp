import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Content = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-top: 16px;
`;

export const ButtonCard = styled(TouchableOpacity)`
  border-radius: 10px;
  margin-top: 16px;
  margin-right: 8px;
  width: 150px;
  height: 150px;
  background-color: ${theme.colors.secondary60};

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 16px;
  padding-top: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const SubTitle = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.text400};
`;
