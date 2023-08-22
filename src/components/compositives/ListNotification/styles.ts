import styled from "styled-components/native";
import { ScrollView, Text, View, Image } from "react-native";
import { theme } from "@/styles/theme";

export const Scroll = styled(ScrollView)`
  width: 100%;
  padding: 0 24px;
  margin-bottom: 82px;
`;

export const TitleSection = styled(Text)`
  font-size: 24px;
  padding-bottom: 32px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Box = styled(View)`
  margin-bottom: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
