import styled from "styled-components/native";
import { ImageBackground, Text, View } from "react-native";
import { theme } from "@/styles/theme";

export const IntroImage = styled(ImageBackground)`
  width: 100%;
  height: 320px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SubTitle = styled(Text)`
  font-size: 16px;
  width: 40px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const BoxDate = styled(View)`
  width: 55px;
  height: 55px;

  align-items: center;
  justify-content: center;

  border-radius: 25px;
  background-color: ${theme.colors.primary};
  margin-left: 24px;
  margin-top: 24px;
`;

export const Box = styled(View)`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${theme.colors.overlay};
`;

export const Title = styled(Text)`
  font-size: 21px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const DateText = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.secondary30};
  font-family: ${theme.fonts.title700};
`;

export const Section = styled(View)`
  padding: 24px;
`;

export const Box2 = styled(View)`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const Description = styled(Text)`
  font-size: 14px;
  padding-top: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
`;
