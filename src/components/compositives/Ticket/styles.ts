import styled from "styled-components/native";
import { theme } from "@/styles/theme";
import { Text, TouchableOpacity, View } from "react-native";

export const Content = styled(TouchableOpacity)`
  flex-direction: row;
  /* padding: 16px 24px; */
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: white;
`;

export const LineContent = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentInfo = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding-left: 16px;
  width: 70%;
`;

export const Title = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title500};
`;

export const TitleDate = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
`;

export const TitlePrice = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const InfoGeneral = styled(View)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-left: 16px;
`;
