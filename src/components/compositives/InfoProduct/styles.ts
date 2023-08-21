import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { theme } from "@/styles/theme";

export const Content = styled(View)`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled(Text)`
  font-size: 32px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const TitleInfo = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
  padding-left: 6px;
`;

export const SubTitleInfo = styled(Text)`
  font-size: 12px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Description = styled(Text)`
  padding-top: 16px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
`;

export const Box = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;
`;

export const Section = styled(View)`
  padding-top: 16px;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-start;
`;

export const Info = styled(View)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
`;

export const InfoBox = styled(View)`
  width: 150px;
  height: 80px;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 10px;
  background-color: ${theme.colors.secondary100};
`;

export const InfoBoxTitle = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 6px;
`;

export const ImageProduct = styled(Image)`
  width: 150px;
  height: 300px;
  margin-left: 64px;
`;
