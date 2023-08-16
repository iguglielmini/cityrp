import { theme } from "@/styles/theme";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Image, Text, TouchableOpacity, View } from "react-native";

const statusBarHeight = getStatusBarHeight();

export const Content = styled(View)`
  width: 100%;
  margin-top: ${statusBarHeight}px;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;
