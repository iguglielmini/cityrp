import styled from "styled-components/native";
import { Text, View } from "react-native";
import { theme } from "@/styles/theme";

export const InfoContent = styled(View)`
  width: 100%;
  padding: 24px 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.secondary40};
`;

export const Title = styled(Text)`
  font-size: 14px;
  margin-right: 6px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text400};
`;

export const TitlePrice = styled(Text)`
  font-size: 16px;
  margin-right: 6px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Box = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
