import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export const Content = styled(View)`
  flex-direction: column;
  padding: 16px 24px;
  justify-content: flex-start;
`;

export const ContentButtons = styled(View)`
  width: 100%;
  padding-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentList = styled(View)`
  width: 100%;
  padding-top: 24px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ButtonAction = styled(TouchableOpacity)`
  background-color: ${theme.colors.secondary50};
  border-radius: 8px;
  padding: 24px;
`;

export const TitleButton = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;
