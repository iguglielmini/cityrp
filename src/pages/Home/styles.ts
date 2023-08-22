import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { ScrollView, Text, View } from "react-native";
import { theme } from "@/styles/theme";

const statusBarHeight = getStatusBarHeight();

export const Content = styled.View`
  padding-top: ${statusBarHeight}px;
`;

export const Scroll = styled(ScrollView)`
  width: 100%;
  margin-bottom: 120px;
`;

export const TitleSection = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Box = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;
`;

export const Box2 = styled(View)`
  margin-bottom: 24px;
`;
