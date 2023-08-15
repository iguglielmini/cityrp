import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "@/styles/theme";

const statusBarHeight = getStatusBarHeight();

export const Content = styled.View`
  padding-top: ${statusBarHeight}px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageIntro = styled.Image`
    width: 100%;
    /* height: 360px; */
`;

export const Section = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;