import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

export const Content = styled(View)`
  width: 100%;
  padding: 16px 24px;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

export const Div = styled(View)`
  padding-left: 8px;
  flex-direction: column;
`;

export const Section = styled(View)`
  flex-direction: row;
`;

export const Textinfo = styled(Text)`
  font-size: 24px;
  margin-right: 6px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title500};
`;

export const TextUser = styled(Text)`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const TextMessage = styled(Text)`
  font-size: 14px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
`;

export const ButtonAvatar = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const ButtonLoja = styled(TouchableOpacity)``;

export const ImageLoja = styled(Image)`
    width: 42px;
    height: 42px;
`;
