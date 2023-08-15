import { theme } from "@/styles/theme";
import styled from "styled-components/native";

export const Content = styled.View`
  margin-top: 24px;
  margin-left: 16px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TitleIcon = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
  font-size: 16px;
  text-align: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1vw;
  border-color: ${theme.colors.line};
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 18px;
`;
