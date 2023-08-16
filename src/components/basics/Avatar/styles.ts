import styled from "styled-components/native";
import { Image, Text, View } from "react-native";
import { theme } from "@/styles/theme";

export const Avatar = styled(Image)`
  width: 96px;
  height: 96px;
  border-radius: 60px;
`;

export const InfoText = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const TextUser = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const TextVip = styled(Text)`
  font-size: 18px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.title700};
`;

export const Content = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ContentInfo = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  padding-left: 16px;
`;
